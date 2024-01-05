import { FC } from "react";
import { CardProps } from "../utils/component";

const Card: FC<CardProps> = ({ id, children }) => {
  return (
    <div id={id} className="w-96 h-full shadow-md rounded-md">
      {children}
    </div>
  );
};

export default Card;
