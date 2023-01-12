import  { DetailedHTMLProps, InputHTMLAttributes } from "react";


interface ComponentProps {
  required?: boolean;
  className?: string;
  style?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  id?: string;
  testId?: string;
  type?: string;
  value?: string;
  realValue?: string;
  onChange?: (e:any) => void;
  innerRef?: any;
  autoComplete?: string;
  placeholder?: string;
  disabled?: boolean;
  prefix?: string;
  long?: boolean;
  full?: boolean;
  isError?: boolean;
  register?: (...props: any) => void;
  onBlur?:()=>void
}

const TextField = ({ required,
  className,
  id,
  type,
  value,
  realValue,
  autoComplete,
  onChange,
  prefix,
  long,
  full,
  placeholder,
  disabled,
  isError,
  onBlur,
  register }: ComponentProps) => {
  return (
    <div className="">
      <input
        onBlur={onBlur}
        onChange={onChange}
        id={id}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={` w-full rounded-[4px] px-[16px] py-[14px] 
        focus:outline-none focus:ring-neutral-300  border-[#D0CFCF] border ${className}`}
        type={type}
      />
     
    </div>
  );
};

export default TextField;
