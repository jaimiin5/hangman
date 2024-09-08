interface ModalProps {
  isOpen: boolean;
  message: string;
  setGivePermission?: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  getRandomCategory: () => string;
}
const Modal = ({
  isOpen,
  message,
  getRandomCategory,
  setCategory,
}: ModalProps) => {
  const playAgain = () => {
    setCategory(getRandomCategory());
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md">
            <h2 className="text-black text-2xl font-bold mb-4">{message}</h2>
            <button
              onClick={playAgain}
              className="bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-800"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
