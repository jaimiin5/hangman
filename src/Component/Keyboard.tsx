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
  console.log(activeLetter);
  const usedKey = [...inactiveLetter, ...activeLetter];
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] gap-[.5rem] w-1/2 place-item-center	">
        {alphabetArray.map((alphabet) => {
          return (
            <button
              disabled={
                inactiveLetter.includes(alphabet) ||
                activeLetter.includes(alphabet) ||
                disabled
              }
              className={`bg-slate-700 h-16 aspect-square text-[20px] uppercase  
              ${!usedKey.includes(alphabet) && "hover:bg-slate-800"}            
              ${inactiveLetter.includes(alphabet) && "opacity-25 "}
               ${activeLetter.includes(alphabet) && "!bg-sky-700 "}
              
              `}
              key={alphabet}
              onClick={() => addGuessedLetter(alphabet)}
            >
              {alphabet}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
