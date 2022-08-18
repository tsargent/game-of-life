import { useState, useEffect, useRef } from "react";
import setGameState from "./lib/setGameState";

function useGameOfLife({ initialState, interval }) {
  const [gameState, setGame] = useState(initialState);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => setGame(setGameState), interval);
  }, [interval]);

  return { gameState };
}

export default useGameOfLife;
