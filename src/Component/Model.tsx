interface ModalProps {
  isOpen: boolean;
  message: string;
  onRestart?: () => void;
}

const Modal = ({ isOpen, message, onRestart }: ModalProps) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md">
            <h2 className="text-black text-2xl font-bold mb-4">{message}</h2>
            <button disabled
              onClick={onRestart}
              className="bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-800"
            >
              Press Enter to Restart Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
