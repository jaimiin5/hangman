const Head = (
  <div className="bg-white h-[12%] w-[20%] rounded-full absolute top-[10%] right-[-9.5%]" />
);
const Body = (
  <div className="bg-white h-[25%] w-[2%] absolute top-[20%] right-0" />
);
const Left_Hand = (
  <div className="bg-white h-[15%] w-[1.5%] absolute top-[25%] right-[-6%] rotate-[-36deg]" />
);
const Right_Hand = (
  <div className="bg-white h-[15%] w-[1.5%] absolute top-[25%] right-[6%] rotate-[35deg]" />
);
const Left_Leg = (
  <div className="bg-white h-[16%] w-[1.5%] absolute top-[42%] right-[-7%] rotate-[-36deg]" />
);
const Right_Leg = (
  <div className="bg-white h-[16%] w-[1.5%] absolute top-[42%] right-[7%] rotate-[35deg]" />
);

interface HangmanDrawingProps {
  inCorrectGuess: number;
}
const Body_Parts = [Head, Body, Left_Hand, Right_Hand, Left_Leg, Right_Leg];
const HangmanDrawing = ({ inCorrectGuess }: HangmanDrawingProps) => {
  return (
    <div key={Math.random()} className="relative h-[50vh] w-[30vw] max-w-[250px] max-h-[400px] mx-auto">
      {Body_Parts.slice(0, inCorrectGuess)}
      <div className="h-[10.5%] w-[1%] bg-white absolute top-0 right-0" />
      <div className="h-[2%] w-[75%] bg-white ml-[30%]" />
      <div className="h-[80%] w-[2%] bg-white ml-[30%]" />
      <div className="h-[1%] w-[60%] bg-white" />
    </div>
  );
};

export default HangmanDrawing;
