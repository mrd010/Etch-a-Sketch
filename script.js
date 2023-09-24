// Menu Consts
const boardSizeInput = document.querySelector("#grid-width");
const changeBoardSizeBtn = document.querySelector("#change-button");
const resetBoardBtn = document.querySelector("#reset-button");

let pixelCount = 0;

// Board Consts
const board = document.querySelector("#board");

// functions

function updateBoardSize() {
  correctInput();
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

// correct input by user if its value exceed 8-100 range and also round float number to int
function correctInput() {
  let inputValue = Math.floor(boardSizeInput.value);

  if (inputValue > 100) {
    boardSizeInput.value = 100;
  } else if (inputValue < 8) {
    boardSizeInput.value = 8;
  }
}

// MAIN ----------------------------------------------------------------------------------------------------------

// Initialize Board
updateBoardSize();

// update board size when clicking change board size button and change button back to normal
changeBoardSizeBtn.addEventListener("click", () => {
  updateBoardSize();
  changeBoardSizeBtn.style.backgroundColor = "whitesmoke";
});

// in input change by user check and correct input and change button when input didn't apply
boardSizeInput.addEventListener("change", () => {
  correctInput();
  if (pixelCount != boardSizeInput.value ** 2) {
    changeBoardSizeBtn.style.backgroundColor = "lemonchiffon";
  } else {
    changeBoardSizeBtn.style.backgroundColor = "whitesmoke";
  }
});
