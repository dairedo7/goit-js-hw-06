let counterVal = document.querySelector("#value");
let decreaseVal = document.querySelector("[data-action='decrement']");
let increaseVal = document.querySelector("[data-action='increment']");

let counter = 0;

decreaseVal.addEventListener("click", () => {
    counter = handleSubtraction(counter);
    counterVal.innerText = counter;
});

increaseVal.addEventListener("click", () => {
    counter = handleAddition(counter);
    counterVal.innerText = counter;
});

function handleAddition(value) {
    return (value += 1);
}

function handleSubtraction(value) {
    return (value -= 1);
}