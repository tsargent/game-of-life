import "./Game.css";
import { useGameOfLife } from "../hooks";

const Game = ({ initialState, cellSize = 10, interval = 1000 }) => {
  const boardSize = initialState[0].length * cellSize;
  const boardStyle = { width: boardSize, height: boardSize };
  const cellStyle = { width: cellSize, height: cellSize };

  const { gameState } = useGameOfLife({ initialState, interval });

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
