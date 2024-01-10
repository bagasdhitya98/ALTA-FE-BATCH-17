import React, { FC, useState, createContext, useContext } from "react";

interface ModeProps {
  children?: React.ReactNode;
  toggle?: boolean | any[];
  setToggle?: (toggle: boolean) => void;
}

const ModeContext = createContext({} as ModeProps);

export const useModeContext = () => {
  const context: any = useContext(ModeContext);
  const [toggle, setToggle] = context.toggle;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return {
    handleToggle,
    toggle,
  };
};

export const ModeProvider: FC<ModeProps> = ({ children }) => {
  const [toggle, setToggle] = useState<ModeProps>();
  return (
    <ModeContext.Provider value={{ toggle: [toggle, setToggle] }}>
      {children}
    </ModeContext.Provider>
  );
};
