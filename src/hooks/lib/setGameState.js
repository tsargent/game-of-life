/*
1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

function getCellState(row, col, state) {
  const cellState = state[row][col];
  let count = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (state[row + i]) {
        if (state[row + i][col + j]) count++;
        if (state[row + i][col + j] && i === 0 && j === 0) count--;
      }
    }
  }
  return [cellState, count];
}

const setGameState = (state) => {
  // use JSON methods to deep-clone the array
  const nextState = JSON.parse(JSON.stringify(state));
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state.length; j++) {
      const cellState = getCellState(i, j, state);
      const alive = cellState[0];
      const neighborCount = cellState[1];
      // 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
      if (alive && neighborCount < 2) {
        nextState[i][j] = 0;
      }

      // 2. Any live cell with two or three live neighbours lives on to the next generation.
      if (alive && (neighborCount === 2 || neighborCount === 3)) {
        // no-op, cell continues to live
      }

      //3. Any live cell with more than three live neighbours dies, as if by overpopulation.
      if (alive && neighborCount > 3) {
        nextState[i][j] = 0;
      }

      // 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      if (!alive && neighborCount === 3) {
        nextState[i][j] = 1;
      }
    }
  }
  return nextState;
};

export default setGameState;
