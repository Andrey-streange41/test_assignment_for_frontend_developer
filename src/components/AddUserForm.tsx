import React, { useState } from "react";
import TextField from "./ui/inputs/TextField";
import Radio from "./ui/inputs/Radio";
import { IUser, PositionType } from "../types";
import ImageUploader from "./ui/inputs/ImageUploader";
import Button from "./ui/buttons/Button";
import { getPositions, postUserAction } from "../api/users";

const AddUserForm = () => {
  const [addUser, setAddUser] = useState<Partial<IUser> & {file:File | null}>({
    name: "",
    email: "",
    phone: "",
    position: PositionType["Lawyer"],
    file: null
  });

  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailError, setEmailError] = useState("This field is required !");
  const [phoneError, setPhoneError] = useState("This field is required !");
  const [fileError, setFileError] = useState("Required !");

  const emailHandler = (e: any) => {
    setAddUser({ ...addUser, email: e.target.value });
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (!String(e.target.value).toLowerCase().match(re)) {
      setEmailError("Invalid email !");
    } else setEmailError("");
  };

  const phoneHandler = (e: any) => {
    console.log(e.target.value);

    setAddUser({ ...addUser, phone: e.target.value });
    const re = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm
    
    
    
    if (!String(e.target.value).toLowerCase().match(re)) {
      setPhoneError("Invalid phone number !");
    } else setPhoneError("");
  };

  const handleRadio = (value: PositionType) => {
    setAddUser({ ...addUser, position: value });
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0] || e.target.files
    const format = file.name.split(".")[1];
    const maxFileSize = 5 * 1000 * 1000

    let reader = new FileReader();
    let url = reader.readAsDataURL(file)
    console.log(url);
    
    
    if (file.size > maxFileSize) {
      setFileError("The photo size must not be greater than 5 Mb.");
      return;
    }
   
    
    if (format !== "jpeg" && format !== "jpg") {
      setFileError("The photo format must be jpeg/jpg type.");
      return;
    }

    setAddUser({...addUser, file:file})
    setFileError('');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { positions } = await getPositions();
    
    const position_id = positions.find((el: any) => el.name === addUser.position).id
    const formData = new FormData();
    let file = addUser.file  as File
    formData.append("name", (addUser.name || ''));
    formData.append("email", (addUser.email || ''));
    formData.append("phone", (addUser.phone ||''));
    formData.append("position_id", JSON.stringify(position_id));
    formData.append("photo", file);
    const resp = await postUserAction(formData)
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[50px]  md:w-[380px]">
        <div className="w-full">
          <TextField
            onChange={(e) => setAddUser({ ...addUser, name: e.target.value })}
            onBlur={() => setNameDirty(true)}
            type="text"
            placeholder="Your name"
            className="w-[328px] h-[54px] md:w-full"
          />
          <div className="text-[red]">
            {!addUser.name ||
            ((addUser.name.length < 2 || addUser.name.length > 60) && nameDirty)
              ? "Min length 2 symbols !"
              : null}
          </div>
        </div>

        <div>
          <TextField
            onBlur={() => setEmailDirty(true)}
            onChange={emailHandler}
            type="email"
            placeholder="Email"
            className="w-[328px] h-[54px] md:w-full"
          />
          <div className="text-[red]" hidden={!(emailDirty && emailError)}>
            {emailError}
          </div>
        </div>

        <div className="relative mb-6">
          <TextField
            onBlur={() => setPhoneDirty(true)}
            onChange={phoneHandler}
            required
            autoComplete="phone"
            type="tel"
            placeholder="Phone"
            className="w-[328px] h-[54px] md:w-full"
          />
          <label className="text-[#7E7E7E] text-[12px] mt-1 ml-4" htmlFor={"#"}>
            +38 (XXX)-XXX-XX-XX
          </label>
          <div className="text-[red]" hidden={!(phoneDirty && phoneError)}>
            {phoneError}
          </div>
        </div>
      </div>
      <section className="mb-[50px]">
        <h3 className="text-[16px] leading-[26px] mb-[14px]">
          Select your position
        </h3>
        <section className="flex flex-col gap-[13px]">
          <Radio
            onClick={handleRadio}
            cheked={PositionType["Lawyer"] === addUser.position}
            label="Lawyer"
            name={PositionType["Lawyer"]}
          />
          <Radio
            onClick={handleRadio}
            cheked={PositionType["Content manager"] === addUser.position}
            label="Content manager"
            name={PositionType["Content manager"]}
          />
          <Radio
            onClick={handleRadio}
            cheked={PositionType.Security === addUser.position}
            label="Security"
            name={PositionType.Security}
          />
          <Radio
            onClick={handleRadio}
            cheked={PositionType.Designer === addUser.position}
            label="Designer"
            name={PositionType.Designer}
          />
        </section>
      </section>

      <ImageUploader onChange={handleImageUpload} />
      <img src={''} alt="" />
      <div className="text-[red]" hidden={!fileError}>{fileError}</div>
      <div className="w-full flex justify-center  mt-[50px]">
        <Button
        disabled={Boolean(
            fileError.length || !addUser.file||
            emailError.length ||
            phoneError.length ||
            !addUser.name ||
            addUser.name.length < 2 ||
            addUser.name.length > 60
        )}
        className="mb-[100px] w-[100px]"
        onClick={() => {}}
      >
        Sign up
      </Button>
      </div>
      
    </form>
  );
};

export default AddUserForm;
