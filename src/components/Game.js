import { useEffect, useRef } from "react";

const Game = () => {
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log(Date.now());
    }, 1000);
  }, []);
  return <div>this is the game</div>;
};

export default Game;
