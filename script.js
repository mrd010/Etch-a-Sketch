// Menu Consts
const boardSizeInput = document.querySelector("#grid-width");
const changeBoardSizeBtn = document.querySelector("#change-button");
const resetBoardBtn = document.querySelector("#reset-button");

let pixelCount = 0;

// Board Consts
const board = document.querySelector("#board");

// functions

function updateBoardSize() {
  const boardWidth = boardSizeInput.value;
  if (pixelCount != boardWidth ** 2) {
    while (pixelCount <= boardWidth ** 2) {
      let newPixel = document.createElement("div");
      newPixel.classList.add("pixel");
      board.appendChild(newPixel);
      pixelCount++;
    }

    while (pixelCount > boardWidth ** 2) {
      let oldPixel = board.querySelector("div");
      board.removeChild(oldPixel);
      pixelCount--;
    }
    board.style.cssText = `grid-template-rows: repeat(${boardWidth}, 1fr);grid-template-columns: repeat(${boardWidth}, 1fr);`;
  }
}

function InitializeBoard() {
  updateBoardSize();
}

function changeBoardSize() {
  updateBoardSize();
}

InitializeBoard();
changeBoardSizeBtn.addEventListener("click", changeBoardSize);
