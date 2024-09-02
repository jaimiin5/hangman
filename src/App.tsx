import { useCallback, useEffect, useState } from "react";
import "./App.css";
import HangmanDrawing from "./Component/HangmanDrawing";
import HangmanWord from "./Component/HangmanWord";
import Keyboard from "./Component/Keyboard";
import words from "./Wordlist.json";

const wordCategories: Record<string, string[]> = {
  Animals: ["dog", "elephant", "kangaroo"],
  Fruits: ["apple", "banana", "cherry"],
  Countries: ["Canada", "Germany", "Japan"],
  Sports: ["soccer", "basketball", "tennis"],
  Movies: ["Titanic", "Inception", "Avatar"],
  Food: ["pizza", "burger", "sushi"],
};

const getRandomCategory = (): string => {
  const categories = Object.keys(wordCategories);
  return categories[Math.floor(Math.random() * categories.length)];
};

const getWordFromCategory = (): string => {
  const category = getRandomCategory()
  const words = wordCategories[category];
  return words[Math.floor(Math.random() * words.length)];
};

const rendomAssWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  // const [category, setCategory] = useState<string>(getRandomCategory);
  const [wordToGuess, setWordToGuess] = useState<string>(
    rendomAssWord
  );
  console.log('answer',wordToGuess)
  //this will be the user input
  const [userGuess, setUserGuess] = useState<string[]>([]);

  const inCorrectGuess = userGuess.filter((letter) => {
    return !wordToGuess.includes(letter);
  });

  const isLoser = inCorrectGuess.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => userGuess.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (userGuess.includes(letter) || isLoser || isWinner) return; //if the letter is already press before then ignore the letter
      setUserGuess((currentGuess) => [...currentGuess, letter]); //otherwise add it to the state
    },
    [userGuess, isLoser, isLoser]
  );

  //physical keyboard logic
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [userGuess]);

  //this will generate new word/category when user press enter
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setUserGuess([]);

      // Keep the same category but get a new word from it
      setWordToGuess(rendomAssWord);

    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-black text-white h-screen w-full">
      {isLoser && "better luck next time"}
      {isWinner && "WINNER!!"}
      <HangmanDrawing inCorrectGuess={inCorrectGuess.length} />
      <HangmanWord
        wordToGuess={wordToGuess}
        userGuess={userGuess}
        reveal={isLoser}
      />
      <div className="self-stretch">
        <Keyboard
          activeLetter={userGuess.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetter={inCorrectGuess}
          addGuessedLetter={addGuessedLetter}
          disabled={isLoser || isWinner}
        />
      </div>
    </div>
  );
}

export default App;
