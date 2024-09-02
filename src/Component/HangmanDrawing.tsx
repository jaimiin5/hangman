import React from "react";

const Head = (
  <div className="bg-white h-[60px] w-[60px] rounded-full absolute top-[50px] right-[-27px]" />
);
const Body = (
  <div className="bg-white h-[100px] w-[7px] absolute top-[100px] right-0" />
);
const Left_Hand = (
  <div className="bg-white h-[65px] w-[5px] absolute top-[115px] right-[-20px] rotate-[-36deg]" />
);
const Right_Hand = (
  <div className="bg-white h-[65px] w-[5px] absolute top-[115px] right-[20px] rotate-[35deg]" />
);
const Left_Leg = (
  <div className="bg-white h-[65px] w-[5px] absolute top-[190px] right-[-20px] rotate-[-36deg]" />
);
const Right_Leg = (
  <div className="bg-white h-[65px] w-[5px] absolute top-[190px] right-[20px] rotate-[35deg]" />
);

interface HangmanDrawingProps {
  inCorrectGuess: number;
}
const Body_Parts = [Head, Body, Left_Hand, Right_Hand, Left_Leg, Right_Leg];
const HangmanDrawing = ({ inCorrectGuess }: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {Body_Parts.slice(0, inCorrectGuess)}
      <div className="h-[50px] w-[2px] bg-white absolute top-0 right-0" />
      <div className="h-[7px] w-[250px] bg-white ml-[120px]" />
      <div className="h-[400px] w-[7px] bg-white ml-[120px]" />
      <div className="h-[7px] w-[250px] bg-white" />
    </div>
  );
};

export default HangmanDrawing;
