import React from "react";
import UserCard from "./UserCard";
import Button from "./ui/buttons/Button";
import { IUser } from "../types";

interface ComponentProps {
  users: IUser[];
  loadMore: () => void;
}

const UserCardList = ({ users, loadMore }: ComponentProps) => {
  return (
    <div className="flex justify-center items-center flex-col  lg:w-[1170px] ">
      <ul className="flex flex-col gap-5 mb-[50px] md:w-full md:flex-row md:flex-wrap justify-center items-center  3xl:items-start 3xl:justify-start 3xl:w-full">
        {users.map((el, i) => (
          <UserCard key={i} user={el} />
        ))}
      </ul>
      <Button className="w-[120px] mb-[140px]" onClick={loadMore}>
        Show more
      </Button>
    </div>
  );
};

export default UserCardList;
