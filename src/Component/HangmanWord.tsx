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
    <div
      className="flex gap-[.25em] text-[3rem] font-bold font-mono
      max-[1440px]:text-[42px] 
      max-[1024px]:text-[38px]  
      max-[768px]:text-[34px]  
      max-[425px]:text-[30px]
      max-[375px]:text-[28px]  
      max-[320px]:text-[24px] 
    "
    >
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
