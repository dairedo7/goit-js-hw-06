const inputNumber = document.querySelector('input[type="number"]');
const createBox = document.querySelector('[data-create]');
const destroyBox = document.querySelector('[data-destroy]');
const currentBoxes = document.querySelector('#boxes');

createBox.addEventListener("click", () => {
  boxCreator(inputNumber.value);
  inputNumber.value = "";
});

destroyBox.addEventListener("click", () => {
  return currentBoxes.innerHTML = "";
});

function boxCreator(number) {
  const divArr = [];

  for (let i = 0; i < number; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.margin = "5px";

    divArr.push(divEl);
  }
  currentBoxes.append(...divArr);

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
