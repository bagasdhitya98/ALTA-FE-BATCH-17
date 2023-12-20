import { Component } from "react";

interface ModalProps {
  shownModal: () => void;
  title: string;
  content: string;
}

class Modal extends Component<ModalProps> {
  render() {
    const { shownModal, title, content } = this.props;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg">
          <p className="text-lg font-semibold mb-4">{title}</p>
          <p>{content}</p>
          <button
            className="mt-4 h-10 bg-blue-500 hover:bg-blue-600 text-white text-center font-bold p-3 rounded"
            onClick={shownModal}
          >
            Tutup Modal
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
