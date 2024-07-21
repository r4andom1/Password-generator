function genPassword(list) {
    // Generates password for button
    if (list == "") {
        return ""
    }
    let password = "";
    for (i = 0; i < nrOfChars; i++) {
        let randomChar = list[genRandomNumbers(list)]; // makes random character
        password += randomChar;
    }
    return password
}

function genRandomNumbers(list) {
    // Returns random number based of list length
    let listLen = list.length;
    return Math.floor(Math.random() * listLen)
}

function outputPassword() {
    let allChars = "";
    if (checkboxLet.checked) {
        allChars += letters;
    }
    if (checkboxNum.checked) {
        allChars += numbers;
    }
    if (checkboxSym.checked) {
        allChars += symbols;
    }
    passwordEl.textContent = genPassword(allChars);
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const symbols = "~`!@#$%^&*()_-+={[}]|:;<>.?/"
const numbers = "0123456789"

let nrOfChars = 12; // How long password should be
let passwordEl = document.getElementById("newpassword-el");
let checkboxLet = document.querySelector("#letters");
let checkboxNum = document.querySelector("#numbers");
let checkboxSym = document.querySelector("#symbols");

// 1. Add a way for the user to easily copy-paste the password
// 2. Have user input how long their password should be.
// 3. Add a slider for the user to decide how many characters their password is. (Check w3schools)
// Optional: 

