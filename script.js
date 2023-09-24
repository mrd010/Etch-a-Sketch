// Menu Consts
const boardSizeInput = document.querySelector("#grid-width");
const changeBoardSizeBtn = document.querySelector("#change-button");
const resetBoardBtn = document.querySelector("#reset-button");

// Board Consts
const board = document.querySelector("#board");

// variables
let pixels = board.querySelectorAll(".pixel");
let pixelCount = 0;

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

    pixels = board.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
      pixel.addEventListener("mouseover", paintPixel);
    });
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

function paintPixel() {
  // get pixel background color current opacity
  let pixelBgColor =
    getComputedStyle(this).getPropertyValue("background-color");
  let splitedColor = pixelBgColor.split(",");

  let currentOpacity =
    splitedColor.length == 4 ? Number(splitedColor[3].slice(1, -1)) : 1;

  //   set new color if opacity is less than 1
  if (currentOpacity < 1) {
    let newOpacity = currentOpacity + 0.1;
    if (newOpacity > 1) {
      newOpacity = Math.floor(newOpacity);
    }
    splitedColor[3] = ` ${newOpacity})`;
    let newPixelBgColor = splitedColor.join();

    this.style.backgroundColor = newPixelBgColor;
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
