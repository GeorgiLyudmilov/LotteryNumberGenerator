const lotteryGrid = document.getElementById("lottery-grid");
const generateButton = document.getElementById("generate-button");

const images = [];

function generateNumber() {
  return Math.floor(Math.random() * 49) + 1;
}

function generateImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function generateLotteryNumbers() {
  lotteryGrid.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const lotteryNumber = generateNumber();
    const lotteryImage = generateImage();
    const numberDiv = document.createElement("div");
    numberDiv.classList.add("lottery-number");
    numberDiv.innerHTML = `
      <div class="number">${lotteryNumber}</div>
      <img class="image" src="./css/images/loto.png "alt="Lottery Image">
    `;
    lotteryGrid.appendChild(numberDiv);
  }
}

generateButton.addEventListener("click", generateLotteryNumbers);
