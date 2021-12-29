const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const defaultText = "Anonymous";

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value !== "" ? event.currentTarget.value : defaultText;
})