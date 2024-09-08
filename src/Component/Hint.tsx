import { useEffect, useState } from "react";
import { FcIdea } from "react-icons/fc";

interface HintProps {
  wordToGuess: string;
  correctGuess: string[];
  addGuessedLetter: (letter: string) => void;
}

const Hint = ({ wordToGuess, addGuessedLetter, correctGuess }: HintProps) => {
  console.log(wordToGuess);
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
    <div className="w-2/5 flex justify-end">
      <div className="cursor-pointer">
        <FcIdea onClick={addHint} size={"2em"} />
      </div>
    </div>
  );
};

export default Hint;
