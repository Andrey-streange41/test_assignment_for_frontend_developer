import React from "react";
import classNames from "../../../utils/classNames";
import { PositionType } from "../../../types";

interface ComponentProps {
  label: string;
  cheked?: boolean;
  id?: string;
  onClick: (value: PositionType) => void;
  name: PositionType;
}

const Radio = ({ label, cheked, id, onClick, name }: ComponentProps) => {
  return (
    <div onClick={() => onClick(name)} className="flex items-center gap-3">
      <div
        id={id}
        className={classNames(
          "border rounded-full w-5 h-5 border-[#D0CFCF] flex justify-center items-center cursor-pointer",
          !cheked ? `border-[#D0CFCF]` : `border-[#00BDD3]`
        )}
      >
        <div
          className="w-[10px] h-[10px] bg-[#00BDD3] rounded-full"
          hidden={!cheked}
        ></div>
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
