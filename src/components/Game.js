import { useEffect, useRef, useState } from "react";
import setGameState from "./setGameState";

const Game = () => {
  const initialState = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  const timer = useRef(null);
  const [gameState, setState] = useState(initialState);

  console.log(gameState);

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log(Date.now());
      setState(setGameState);
    }, 1000);
  }, []);
  return <div>{JSON.stringify(gameState)}</div>;
};

export default Game;
