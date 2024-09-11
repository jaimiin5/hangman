interface HangmanWordProps {
  userGuess: string[];
  wordToGuess: string;
  reveal?: boolean;
}
const HangmanWord = ({
  userGuess,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className="flex gap-[.25em] text-[3rem] font-bold font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-[.1em]">
          <span
            style={{
              visibility:
                userGuess.includes(letter) || reveal ? "visible" : "hidden",
              color: !userGuess.includes(letter) && reveal ? "red" : "white",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
