const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", sendForm);

function sendForm(evt) {
    evt.preventDefault();

    const {
        elements: { email, password, }
    } = evt.currentTarget;

    if (email.value === "" || password.value === "") {
        return console.log(`Please fill in login and password fields`);
    }

    console.log(`Login: ${email.value}, password: ${password.value}`);
    evt.currentTarget.reset();
}
