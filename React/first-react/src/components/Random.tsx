import { Component } from "react";

interface RandomProps {
  text: string;
}

class Random extends Component<RandomProps> {
  render() {
    const { text } = this.props;

    return (
      <div className="text-blue-500 font-semibold">
        <p>Hasil dari props : {text}</p>
      </div>
    );
  }
}

export default Random;
