// Menu Consts
const boardSizeInput = document.querySelector("#grid-width");
const changeBoardSizeBtn = document.querySelector("#change-button");
const resetBoardBtn = document.querySelector("#reset-button");

// Board Consts
const board = document.querySelector("#board");

function boardInitialize() {
  const boardWidth = boardSizeInput.value;

  for (let i = 0; i < boardWidth; i++) {
    for (let j = 0; j < boardWidth; j++) {
      let newPixel = document.createElement("div");
      newPixel.classList.add("pixel");
      board.appendChild(newPixel);
    }
  }
  board.style.cssText = `grid-template-rows: repeat(${boardWidth}, 1fr);grid-template-columns: repeat(${boardWidth}, 1fr);`;
}
// Button Actions
// changeBoardSizeBtn.addEventListener("click", listener);

// function changeBoardSize() {}

boardInitialize();
