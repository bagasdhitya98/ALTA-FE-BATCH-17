import { Component } from "react";

import Card from "./components/Card";
import Modal from "./components/Modal";
import Random from "./components/Random";
import Layout from "./components/Layout";

import data from "./dummy/foods.json";

interface CountState {
  count: number;
  mode: boolean;
  visibility: boolean;
}

class App extends Component<CountState> {
  state = {
    count: 0,
    mode: false,
    visibility: false,
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

  handlePopup() {
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });
  }

  switchMode() {
    const { mode } = this.state;
    this.setState({ mode: !mode });
  }

  // Fase Mounting
  componentDidMount() {
    console.log("Component Did Mount");
  }

  // Fase Updating
  componentDidUpdate(prevState: CountState) {
    const { count } = this.state;
    if (prevState.count !== count) {
      console.log("Component Did Update");
    }
  }

  // Fase Unmounting
  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { count, mode, visibility } = this.state;

    return (
      <Layout mode={mode}>
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
        <div className="my-3 gap-y-5 flex flex-col">
          <button
            className="bg-slate-500 w-40 h-10"
            onClick={() => this.switchMode()}
          >
            Change Mode
          </button>
          <button
            className="bg-slate-500 w-40 h-10"
            onClick={() => this.handlePopup()}
          >
            Show Popup 1
          </button>
          <Random text="Contoh props 1" />
          <Random text="Contoh props 2" />
          <Random text="Contoh props 3" />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-4">
          {data &&
            data.map((item: any, index: number) => {
              return (
                <Card
                  key={index}
                  image={item.image}
                  content={item.content}
                  title={item.title}
                  price={item.price}
                />
              );
            })}
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
        {visibility ? (
          <Modal
            title="Contoh Penerapan Props"
            content="Kita bisa reuse component ini"
            shownModal={() => this.handlePopup()}
          />
        ) : (
          <></>
        )}
      </Layout>
    );
  }
}

export default App;
