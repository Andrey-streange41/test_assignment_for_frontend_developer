import React from "react";

interface ComponentProps {
  onChange: (e: any) => void;
}

const ImageUploader = ({ onChange }: ComponentProps) => {
  return (
    <div className="w-full h-[54px] border-none  flex">
      <div className="w-[84px] h-full  flex justify-center items-center border p-[15px] rounded-[4px] text-[16px] border-black">
        Upload
      </div>
      <div className="hover:text-[black] cursor-pointer h-full w-full justify-start items-center relative flex px-[16px] text-[#7E7E7E] border -ml-[2px] border-[#D0CFCF]">
        Upload your photo
        <input
          accept="image/jpg, image/jpeg"
          onChange={onChange}
          className="absolute w-full h-full cursor-pointer border left-0 opacity-0 z-50"
          type="file"
        />
      </div>
    </div>
  );
};

export default ImageUploader;
