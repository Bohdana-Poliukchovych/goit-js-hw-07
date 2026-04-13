const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value.trim() === "" || password.value.trim() === "") {
        return alert("All form fieldsmust befilled in");
    }

    const formData = {
        email: email.value.trim(),
        password: password.value.trim(),
    };
    console.log(formData);
    event.currentTarget.removeEventListener();
});