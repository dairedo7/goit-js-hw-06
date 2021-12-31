const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", sendForm);

function sendForm(evt) {
    evt.preventDefault();

    const {
        elements: { email, password, }
    } = evt.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert(`Please fill in login and password fields`);
    }

    const formVals = {};
    const formData = new FormData(evt.currentTarget); // Creates object FormData
    // The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and 
    // their values, which can then be easily sent using the XMLHttpRequest.send() method

    formData.forEach((elVal, prop) => {
        formVals[prop] = elVal;
    });

    console.log("Credentials are: ", formVals);
    evt.currentTarget.reset();
}
