function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)
        }`;
};

const form = document.querySelector('.login-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.nextElementSibling.email.value.trim();
    const password = form.nextElementSibling.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email,
        password: password,
    }
    console.log(formData);
})
