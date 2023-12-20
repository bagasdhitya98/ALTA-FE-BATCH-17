import { Component } from "react";

interface CardProps {
  image: string;
  title: string;
  content: string;
  price: string;
}

class Card extends Component<CardProps> {
  render() {
    const { image, title, content, price } = this.props;

    return (
      <div className="w-96 h-full rounded-lg shadow-md flex">
        <img src={image} className="h-full w-1/2 rounded-l-lg" />
        <div className="flex flex-col p-3 gap-y-5">
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-sm">{content}</p>
          </div>
          <div>
            <p className="text-sm font-bold">Harga : {price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
