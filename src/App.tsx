import { useCallback, useEffect, useState } from "react";
import "./App.css";
import HangmanDrawing from "./Component/HangmanDrawing";
import HangmanWord from "./Component/HangmanWord";
import Keyboard from "./Component/Keyboard";
import Modal from "./Component/Model";
import Hint from "./Component/Hint";

const wordCategories: Record<string, string[]> = {
  Animals: [
    "dog",
    "cat",
    "cow",
    "bat",
    "fox",
    "ant",
    "rat",
    "owl",
    "bee",
    "pig",
    "deer",
    "duck",
    "bear",
    "lion",
    "frog",
    "crab",
    "wolf",
    "snail",
    "swan",
  ],
  Fruits: [
    "apple",
    "pear",
    "plum",
    "fig",
    "kiwi",
    "lime",
    "grape",
    "melon",
    "date",
    "mango",
  ],
  Countries: [
    "india",
    "china",
    "italy",
    "france",
    "japan",
    "brazil",
    "egypt",
    "spain",
    "nepal",
    "greece",
  ],
  Sports: [
    "soccer",
    "tennis",
    "chess",
    "golf",
    "cricket",
    "rugby",
    "boxing",
    "fencing",
    "hockey",
    "dance",
  ],
  Movies: [
    "titanic",
    "jaws",
    "rocky",
    "shrek",
    "frozen",
    "up",
    "cars",
    "bolt",
    "elf",
    "dumbo",
  ],
  Food: [
    "rice",
    "corn",
    "fish",
    "bread",
    "beans",
    "pasta",
    "chips",
    "soup",
    "salad",
    "fruit",
  ],
  Colors: [
    "red",
    "blue",
    "green",
    "pink",
    "gray",
    "teal",
    "gold",
    "cyan",
    "lime",
    "navy",
  ],
  Vehicles: [
    "car",
    "bus",
    "bike",
    "jeep",
    "ship",
    "boat",
    "tram",
    "van",
    "taxi",
    "train",
  ],
  Instruments: [
    "guitar",
    "flute",
    "drum",
    "harp",
    "piano",
    "trumpet",
    "violin",
    "cello",
    "sax",
    "banjo",
  ],
  Jobs: [
    "nurse",
    "chef",
    "clerk",
    "maid",
    "pilot",
    "actor",
    "judge",
    "guide",
    "coach",
    "guard",
  ],
  Weather: [
    "rain",
    "snow",
    "wind",
    "sun",
    "hail",
    "fog",
    "storm",
    "cloud",
    "breeze",
    "frost",
  ],
  Clothes: [
    "hat",
    "coat",
    "sock",
    "belt",
    "jeans",
    "scarf",
    "dress",
    "shirt",
    "shorts",
    "boots",
  ],
  School: [
    "book",
    "pen",
    "desk",
    "chalk",
    "test",
    "math",
    "glue",
    "bag",
    "lunch",
    "class",
  ],
};

const getRandomCategory = (): string => {
  const categories = Object.keys(wordCategories);
  return categories[Math.floor(Math.random() * categories.length)];
};

const getWordFromCategory = (category: string): string => {
  const words = wordCategories[category];
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [category, setCategory] = useState<string>(() => getRandomCategory());

  const [wordToGuess, setWordToGuess] = useState<string>(
    getWordFromCategory(category)
  );
  const [userGuess, setUserGuess] = useState<string[]>([]);
  console.log("userguess", userGuess);

  const correctGuess = userGuess.filter((letter) =>
    wordToGuess.includes(letter)
  );
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
      const key = e.key.toLocaleLowerCase();

      console.log(key);
      if (!key.match(/^[a-zA-Z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [userGuess]);

  useEffect(() => {
    setWordToGuess(getWordFromCategory(category));
    setUserGuess([]);
  }, [category]);

  //this will generate new word/category when user press enter

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setUserGuess([]);

      // Keep the same category but get a new word from it
      setCategory(getRandomCategory());
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="flex flex-col gap-12 justify-center items-center bg-black text-white h-[100vh] w-[100vw]">
      <div className="flex justify-center items-center rounded-md text-white p-4 min-fit  h-[50px] border-2 border-white">
        {category && category}
      </div>
      {isLoser && "better luck next time"}
      {isWinner && "WINNER!!"}
      <HangmanDrawing inCorrectGuess={inCorrectGuess.length} />
      <HangmanWord
        wordToGuess={wordToGuess}
        userGuess={userGuess}
        reveal={isLoser}
      />
      <Hint
        wordToGuess={wordToGuess}
        correctGuess={correctGuess}
        addGuessedLetter={addGuessedLetter}
      />
      <div className="self-stretch">
        <Keyboard
          activeLetter={correctGuess}
          inactiveLetter={inCorrectGuess}
          addGuessedLetter={addGuessedLetter}
          disabled={isLoser || isWinner}
        />
      </div>
      <Modal
        isOpen={isWinner || isLoser}
        message={isWinner ? "You Win!" : "You Lose!"}
        setCategory={setCategory}
        getRandomCategory={getRandomCategory}
      />
      <div className="text-[13px]">Press Enter for New Word</div>
    </div>
  );
}

export default App;
