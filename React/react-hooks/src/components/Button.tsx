import { FC } from "react";
import { ButtonProps } from "../utils/component";

const Button: FC<ButtonProps> = ({ id, title, type, onClick }) => {
  return (
    <button
      id={id}
      type={type}
      className="w-full h-14 bg-green-500 hover:bg-green-700 text-center text-white flex justify-center items-center"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default Button;
