import setGameState from "./setGameState";

describe("set game state", () => {
  it("returns state", () => {
    const currentState = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const expectedState = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const nextState = setGameState(currentState);
    expect(nextState).toEqual(expectedState);
  });
});
