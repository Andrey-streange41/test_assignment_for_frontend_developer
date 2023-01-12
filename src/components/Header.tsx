import React from "react";
import Button from "./ui/buttons/Button";
import classNames from "../utils/classNames";

const Header = () => {
  return (
    <div
      className={classNames(
        "border h-[60px] px-4 flex items-center gap-[14px] lg:justify-center fixed top-0 bg-white w-full",
        "md:px-8 z-[1001]"
      )}
    >
      <section className="w-full flex items-center justify-between lg:w-[1170px]">
      <section className="flex items-center">
        <img src="/logo.png" alt="logo" />
        <img src="logo-text.png" alt="logo-text" />
      </section>
      <section className="flex items-center gap-[10px]">
        <Button className="w-[100px]" onClick={() => {}}>Users</Button>
        <Button className="w-[100px]" onClick={() => {}}>Sign up</Button>
      </section>
      </section>
    </div>
  );
};

export default Header;
