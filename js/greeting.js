const greeting = document.querySelector("#greeting");
const usernameForm = document.querySelector("#inputUsername");
const usernameInput = document.querySelector("#inputUsername input");

const USERNAME = "username";
const HIDDEN_CLASSNAME = "hidden";

function addUser(event){
    event.preventDefault();
    usernameForm.classList.add(HIDDEN_CLASSNAME);
    const username = usernameInput.value;
    localStorage.setItem(USERNAME, username);
    sayHello(username);
}

function sayHello(username){
    greeting.innerText = `Hi! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME);
if(savedUserName === null){
    usernameForm.classList.remove(HIDDEN_CLASSNAME);
    usernameForm.addEventListener("submit", addUser);
}
else{
    sayHello(savedUserName);
}