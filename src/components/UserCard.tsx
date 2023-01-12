import React from "react";
import { IUser } from "../types";

interface ComponentProps {
  user: IUser;
}

const UserCard = ({ user }: ComponentProps) => {
 
  
  return (
    <li className="w-[328px] 3xl:w-[370px] lg:w-[284px] min-h-[254px] bg-[#FFFFFF] rounded-[10px] flex flex-col items-center justify-center gap-5 p-5">
      <img
        src={user.photo}
        alt="avatar"
        className="w-[70px] h-[70px] rounded-full "
      />
      <span className="text-center w-[208px] overflow-clip">{user.name}</span>

      <section className="flex flex-col justify-center items-center gap-1  w-full">
        <span className="overflow-clip w-[208px] text-center">{user.position}</span>
        <span className="overflow-clip w-[208px] text-center">{user.email}</span>
        <span className="overflow-clip w-[208px] text-center">{user.phone}</span>
      </section>
    </li>
  );
};

export default UserCard;
