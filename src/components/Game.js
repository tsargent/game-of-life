import { useEffect, useRef, useState } from "react";
import setGameState from "./setGameState";
import "./Game.css";

const Game = ({ initialState, cellSize = 10, interval = 1000 }) => {
  const timer = useRef(null);
  const boardSize = initialState[0].length * cellSize;
  const boardStyle = { width: boardSize, height: boardSize };
  const [gameState, setState] = useState(initialState);
  const cellStyle = { width: cellSize, height: cellSize };

  useEffect(() => {
    timer.current = setInterval(() => {
      setState(setGameState);
    }, interval);
  }, [interval]);
  return (
    <div className="game-board" style={boardStyle}>
      {gameState.map((row, idx) => (
        <div className="game-row" key={`row-${idx}`}>
          {row.map((cell, idx) => (
            <div
              className={`game-cell ${cell ? "alive" : "dead"}`}
              style={cellStyle}
              key={`cell-${idx}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Game;
