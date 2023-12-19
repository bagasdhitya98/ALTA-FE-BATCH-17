import React, { Component } from "react";
import Card from "./components/Card";

interface CountState {
  count: number;
  mode: boolean;
}

class App extends Component<CountState> {
  state = {
    count: 0,
    mode: false,
  };

  handleIncrement() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  handleDecrement() {
    const { count } = this.state;
    this.setState({ count: count - 1 });
    if (count === 0) {
      alert("Out of bound");
      this.setState({ count: 0 });
    }
  }

  switchMode() {
    const { mode } = this.state;
    this.setState({ mode: !mode });
  }

  render() {
    const { count, mode } = this.state;

    return (
      <section
        className={`w-screen h-max flex flex-col justify-center items-center ${
          mode === true ? "bg-slate-500" : "bg-white"
        }`}
      >
        <div className="text-red-500">Hello world, this is tailwind effect</div>
        <div className="flex gap-x-5 my-10">
          <button
            className="p-3 bg-green-500 text-white"
            onClick={() => this.handleIncrement()}
          >
            +
          </button>
          <input
            className="bg-white shadow-md rounded-lg text-center text-slate-500"
            value={count}
            type="text"
          />
          <button
            className="p-3 bg-red-500 text-white"
            onClick={() => this.handleDecrement()}
          >
            -
          </button>
        </div>
        <div className="my-3">
          <button
            className="bg-slate-500 w-40 h-10"
            onClick={() => this.switchMode()}
          >
            Change Mode
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="grid grid-cols-1 gap-5 mt-10">
          <div className="p-3 w-80 h-18 lg:bg-orange-500 md:bg-red-500 sm:bg-yellow-500 bg-green-500">
            Element 1 for test responsivity
          </div>
          <div className="p-3 w-80 h-18 lg:bg-orange-500 md:bg-red-500 sm:bg-yellow-500 bg-green-500">
            Element 2 for test responsivity
          </div>
          <div className="p-3 w-80 h-18 lg:bg-orange-500 md:bg-red-500 sm:bg-yellow-500 bg-green-500">
            Element 3 for test responsivity
          </div>
          <div className="p-3 w-80 h-18 lg:bg-orange-500 md:bg-red-500 sm:bg-yellow-500 bg-green-500">
            Element 4 for test responsivity
          </div>
        </div>
      </section>
    );
  }
}

export default App;
