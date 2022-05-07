const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function isLogin() {
    const savedUserName = localStorage.getItem(USERNAME_KEY);

    if (savedUserName) {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreetings(savedUserName);
    } else {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();

            loginForm.classList.add(HIDDEN_CLASSNAME);

            const username = loginInput.value;
            localStorage.setItem(USERNAME_KEY, username);

            paintGreetings(username);
        });
    }
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

window.addEventListener('DOMContentLoaded', isLogin);
