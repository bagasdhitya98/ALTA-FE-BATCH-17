import React, { Component } from "react";

interface LayoutProps {
  children?: React.ReactNode;
  mode?: boolean;
}

export class Layout extends Component<LayoutProps> {
  render() {
    const { children, mode } = this.props;

    return (
      <section
        className={`w-screen h-max flex flex-col justify-center items-center ${
          mode === true ? "bg-slate-500" : "bg-white"
        }`}
      >
        {children}
      </section>
    );
  }
}

export default Layout;
