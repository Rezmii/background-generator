const firstColorInput = document.querySelector("#color1");
const secondColorInput = document.querySelector("#color2");
const colorDisplay = document.querySelector(".colorDisplay");
const copyColor = document.querySelector(".copyColor");
const bodyElement = document.querySelector("body");
let firstColor = firstColorInput.value;
let secondColor = secondColorInput.value;

setBackground(firstColor, secondColor);
displayColor(firstColor, secondColor);
displayCopy(firstColor, secondColor);

firstColorInput.addEventListener("input", () => {
  firstColor = firstColorInput.value;
  setBackground(firstColor, secondColor);
  displayColor(firstColor, secondColor);
  displayCopy(firstColor, secondColor);
});

secondColorInput.addEventListener("input", () => {
  secondColor = secondColorInput.value;
  setBackground(firstColor, secondColor);
  displayColor(firstColor, secondColor);
  displayCopy(firstColor, secondColor);
});

function displayColor(first, second) {
  let ntcValue1 = ntc.name(first);
  let ntcValue2 = ntc.name(second);
  let color1 = ntcValue1[1];
  let color2 = ntcValue2[1];
  let html = `${color1}, ${color2}`;
  colorDisplay.innerHTML = html;
}

function displayCopy(first, second) {
  let color1 = hexToRgb(first.slice(1));
  let color2 = hexToRgb(second.slice(1));
  let html = `linear-gradient(90deg, rgb(${color1}), rgb(${color2}));`;
  copyColor.innerHTML = html;
}

function setBackground(first, second) {
  let color1 = hexToRgb(first.slice(1));
  let color2 = hexToRgb(second.slice(1));
  document.body.style.background = `linear-gradient(90deg, rgb(${color1}), rgb(${color2}))`;
}

function hexToRgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return r + "," + g + "," + b;
}
