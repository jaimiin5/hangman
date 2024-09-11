import { useEffect, useState } from "react";
import { FcIdea } from "react-icons/fc";

interface HintProps {
  wordToGuess: string;
  correctGuess: string[];
  addGuessedLetter: (letter: string) => void;
}

const Hint = ({ wordToGuess, addGuessedLetter, correctGuess }: HintProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const addHint = () => {
    // Find the next unGuessed letter starting from the current index
    let nextIndex = currentIndex;

    while (
      nextIndex < wordToGuess.length &&
      correctGuess.includes(wordToGuess[nextIndex])
    ) {
      nextIndex++; // Skip already guessed letters
    }

    // If there's an unGuessed letter, reveal it
    if (nextIndex < wordToGuess.length) {
      const letterToReveal = wordToGuess[nextIndex];
      addGuessedLetter(letterToReveal); // Add to guessed letters
      setCurrentIndex(nextIndex + 1); // Move to the next index
    }
  };
  useEffect(() => {
    setCurrentIndex(0);
  }, [wordToGuess]);

  return (
    <div
      className="flex justify-end relative left-32 top-10
    max-[1440px]:h-14 max-[1440px]:text-[18px] 
    max-[1024px]:h-11 max-[1024px]:text-[16px]  
    max-[768px]:h-12 max-[768px]:text-[13px]  
    max-[425px]:h-10 max-[425px]:text-[14px]
    max-[375px]:h-8  max-[375px]:text-[12px]  
    max-[320px]:h-6 max-[320px]:text-[10px] 
    "
    >
      <div className="cursor-pointer">
        <FcIdea onClick={addHint} size={"2em"} />
      </div>
    </div>
  );
};

export default Hint;
