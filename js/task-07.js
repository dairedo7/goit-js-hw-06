const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSize.addEventListener("input", (el) => {
    text.style.fontSize = el.currentTarget.value + "px";
});

// fontSize.addEventListener("input", changeInputSize);

// function changeInputSize() {
//     text.style.fontSize = fontSize.value + "px";
// }