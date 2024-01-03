import React, { Component } from "react";

interface CardProps {
  title: string;
  price: string;
  onClick: React.MouseEventHandler;
}

class Card extends Component<CardProps> {
  render() {
    const { title, price, onClick } = this.props;

    return (
      <div className="w-full h-full rounded-lg shadow-md flex">
        <div className="flex flex-col p-3 gap-y-5">
          <div>
            <p className="font-bold">{title}</p>
          </div>
          <div>
            <p className="text-sm font-bold">Harga : {price}</p>
          </div>
          <button
            onClick={onClick}
            className="w-full h-10 p-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md flex justify-center items-center"
          >
            Details
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
