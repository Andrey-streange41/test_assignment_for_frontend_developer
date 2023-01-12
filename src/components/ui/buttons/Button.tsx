import classNames from "../../../utils/classNames";

interface ComponentProps {
  onClick: () => any;
  className?: string;
  children: any;
  disabled?: boolean;
}

const Button = ({ children, className, onClick, disabled }: ComponentProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "bg-[#F4E041] rounded-[80px]  cursor-pointer h-[34px] ",
        String(className),
        disabled ? "bg-[#b6b5b5] text-white" : ""
      )}
    >
      {children}
    </button>
  );
};

export default Button;
