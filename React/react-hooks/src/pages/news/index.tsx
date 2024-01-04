import { useState } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";

const News = () => {
  const [count, setCount] = useState<number>(0);
  const [mode, setMode] = useState<boolean>(false);

  return (
    <section
      className={`flex flex-col justify-center items-center w-screen h-full ${
        !mode ? "bg-white h-screen" : "bg-slate-700 h-screen"
      }`}
    >
      <div className="w-30 space-x-5 flex">
        <Button id="increment" title="+" onClick={() => setCount(count + 1)} />
        <Input
          id="value-count"
          value={count}
          onChange={(e: any) => setCount(e.target.value)}
        />
        <Button id="decrement" title="-" onClick={() => setCount(count - 1)} />
      </div>
      <div className="">
        <Button id="mode" title="Mode" onClick={() => setMode(!mode)} />
      </div>
    </section>
  );
};

export default News;
