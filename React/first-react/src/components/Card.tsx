import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="w-full h-40 rounded-lg shadow-md flex">
        <img
          src="https://awsimages.detik.net.id/community/media/visual/2020/12/02/sate-taichan-3.jpeg?w=1200"
          className="h-full w-1/2 rounded-l-lg"
        />
        <div className="flex flex-col p-3 gap-y-5">
          <div>
            <p className="font-bold">Sate Taichan</p>
            <p className="text-sm">
              Sate taichan enak, tidak pakai bumbu pengawet
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Harga : Rp 30,000</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
