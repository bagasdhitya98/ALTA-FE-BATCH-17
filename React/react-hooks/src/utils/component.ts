import React from "react";

export interface ButtonProps {
  id: string;
  title?: string;
  type?: string;
  onClick?: React.MouseEventHandler;
}

export interface InputProps {
  id: string;
  value?: number | string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface CardProps {
  id: string;
  children?: React.ReactNode;
}
