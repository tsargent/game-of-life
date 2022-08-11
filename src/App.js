import Game from "./components/Game";
import board from "./boards/random";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Game cellSize={10} initialState={board(80)} />
    </div>
  );
}

export default App;
