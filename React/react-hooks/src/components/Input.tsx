import { FC } from "react";
import { InputProps } from "../utils/component";

const Input: FC<InputProps> = ({ id, value, type, onChange }) => {
  return (
    <input
      id={id}
      className="p-3 w-full h-full bg-white rounded-md border border-green-500 focus:border-green-500"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
