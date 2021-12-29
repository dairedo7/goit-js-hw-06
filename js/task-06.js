const validationInput = document.querySelector('#validation-input');
// const dataLength = validationInput.getAttribute("[data-length='6']");
// console.log(Number(dataLength));

validationInput.addEventListener("blur", (evt) => {
    if (Number(validationInput.dataset.length) === evt.currentTarget.value.length) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
})