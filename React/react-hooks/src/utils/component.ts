import React from "react";

export interface ButtonProps {
  id: string;
  title?: string;
  onClick?: React.MouseEventHandler;
}

export interface InputProps {
  id: string;
  value?: number;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
