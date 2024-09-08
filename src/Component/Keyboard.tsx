const alphabetArray = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

interface KeyboardProps {
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
}

const Keyboard = ({
  activeLetter,
  inactiveLetter,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  const usedKey = [...inactiveLetter, ...activeLetter];

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="grid grid-cols-10 gap-2">
        {alphabetArray.slice(0, 10).map((alphabet) => (
          <button
            disabled={usedKey.includes(alphabet) || disabled}
            className={`bg-slate-700 h-16 aspect-square text-[20px] uppercase rounded-lg
              ${!usedKey.includes(alphabet) && "hover:bg-slate-800"}            
              ${inactiveLetter.includes(alphabet) && "opacity-25"}
              ${activeLetter.includes(alphabet) && "!bg-sky-700"}
            `}
            key={alphabet}
            onClick={() => addGuessedLetter(alphabet)}
          >
            {alphabet}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-9 gap-2 pl-6">
        {alphabetArray.slice(10, 19).map((alphabet) => (
          <button
            disabled={usedKey.includes(alphabet) || disabled}
            className={`bg-slate-700 h-16 aspect-square text-[20px] uppercase rounded-lg
              ${!usedKey.includes(alphabet) && "hover:bg-slate-800"}            
              ${inactiveLetter.includes(alphabet) && "opacity-25"}
              ${activeLetter.includes(alphabet) && "!bg-sky-700"}
            `}
            key={alphabet}
            onClick={() => addGuessedLetter(alphabet)}
          >
            {alphabet}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 pl-14">
        {alphabetArray.slice(19, 26).map((alphabet) => (
          <button
            disabled={usedKey.includes(alphabet) || disabled}
            className={`bg-slate-700 h-16 aspect-square text-[20px] uppercase rounded-lg
              ${!usedKey.includes(alphabet) && "hover:bg-slate-800"}            
              ${inactiveLetter.includes(alphabet) && "opacity-25"}
              ${activeLetter.includes(alphabet) && "!bg-sky-700"}
            `}
            key={alphabet}
            onClick={() => addGuessedLetter(alphabet)}
          >
            {alphabet}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
