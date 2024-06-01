import { useEffect, useState } from "react";
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from "react-icons/fa";

export default function Game(){

    const [myScore, setMyScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [myChoice, setMyChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [bgColor, setBgColor] = useState("#333");
    const choices = ["rock", "paper", "scissors"];
    const [myChoiceColor, setMyChoiceColor] = useState("#fff");
    const [computerChoiceColor, setComputerChoiceColor] = useState("#fff");
    const [result, setResult] = useState("");
    const clickHandler = (choice) => {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice('');
        setMyChoice('');
        setTimeout(() => {
            setMyChoice(choice);
            setComputerChoice(computerChoice);
        }, 1000);
        // setComputerChoice(computerChoice);
        if((choice === "rock" && computerChoice === "scissors") || (choice === "paper" && computerChoice === "rock") 
            || (choice === "scissors" && computerChoice === "paper")){
            setMyChoiceColor("green");
            setTimeout(() => {
                setMyChoiceColor("#fff");
                setMyScore(myScore + 1);
            }, 1000);
        }
        else if((choice === "scissors" && computerChoice === "rock") || (choice === "rock" && computerChoice === "paper")
             || (choice === "paper" && computerChoice === "scissors")){
                setComputerChoiceColor("red");
                setTimeout(() => {
                    setComputerChoiceColor("#fff");
                    setComputerScore(computerScore + 1);
                }, 1000);
        }
    }
    // const [myChoiceColor, setMyChoiceColor] = useState('');

useEffect(() => {
  switch(myChoice) {
    case 'rock':
      setMyChoiceColor('gray');
      break;
    case 'paper':
      setMyChoiceColor('blue');
      break;
    case 'scissors':
      setMyChoiceColor('red');
      break;
    default:
      setMyChoiceColor('');
  }
  
}, [myChoice]);
// const [computerChoiceColor, setComputerChoiceColor] = useState('');

useEffect(() => {
  switch(computerChoice) {
    case 'rock':
      setComputerChoiceColor('gray');
      break;
    case 'paper':
      setComputerChoiceColor('blue');
      break;
    case 'scissors':
      setComputerChoiceColor('red');
      break;
    default:
      setComputerChoiceColor('');
  }
}, [computerChoice]);
    useEffect(() => {
        if(myScore === 5 ){
            setResult("You win the game");
            setBgColor("green");
            setTimeout(()=>{
                setBgColor("black");
                setMyScore(0);
                setComputerScore(0);
                setMyChoice(null);
                setComputerChoice(null);
                setResult("");
            },2000)
        }
        else if(computerScore === 5){
            setResult("Computer win the game");
            setBgColor("red");
            setTimeout(()=>{
                setBgColor("black");
                setMyScore(0);
                setComputerScore(0);
                setMyChoice(null);
                setComputerChoice(null);
                setResult("");
            },2000)
        }
    })
    return (
      <div className="flex flex-col items-center justify-center w-full h-full  text-white m-2 px-4 p-2 gap-y-5" style={{backgroundColor:bgColor}} >
        <h1 className=" font-semibold text-[24px] text-center mb-[20px] text-[#4caf50]">WELCOME TO ROCK, PAPER, SCISSORS GAME</h1>
        <div className="flex flex-col md:flex-row justify-between">
            {/* <button className="bg-[#4caf50] rounded-md text-white m-2 p-2 hover:bg-green-800 transition-all duration-100 ease-in " onClick={() => clickHandler("rock")}><span><FaRegHandRock /></span>Rock</button> */}
            <button className="bg-[#4caf50] rounded-md text-white m-2 p-2 hover:bg-green-800 transition-all 
                duration-100 ease-in flex items-center gap-2 " 
                onClick={() => clickHandler("rock")}>
                <span><FaRegHandRock /></span>Rock
            </button>
            <button className="bg-[#4caf50] rounded-md text-white m-2 p-2 hover:bg-green-800 transition-all 
            duration-100 ease-in flex items-center gap-2 "  onClick={() => clickHandler("paper")}><span><FaRegHandPaper /></span><span>Paper</span></button>
            <button className="bg-[#4caf50] rounded-md text-white m-2 p-2 hover:bg-green-800 transition-all 
            duration-100 ease-in flex items-center gap-2 "  onClick={() => clickHandler("scissors")}><span><FaRegHandScissors /></span>Scissors</button>
        </div>
        <div className=" flex flex-col text-[#fff] text-[18px] font-semibold text-center text-gap-[1px] gap-y-5">
            <p>Your Choice   : <span style={{color:myChoiceColor}} >{myChoice}</span> </p>
            <p>Computer's Choice :<span style={{color:computerChoiceColor}} > {computerChoice}</span></p>
            <p className="text-3xl " >Your Score : {myScore}</p>
            <p className="text-3xl ">Computer's Score : {computerScore}</p>
        </div>
        <div>
            <button className="bg-[#4caf50] rounded-md text-white m-2 p-2 hover:bg-green-800 transition-all 
                duration-100 ease-in flex items-center gap-2" onClick={() => {setMyScore(0); setComputerScore(0); setBgColor("black"); setComputerChoice(''); setMyChoice('');}}>Reset</button>
        </div>
        <div>
            <p>{result}</p>
        </div>
      </div>
    )

}