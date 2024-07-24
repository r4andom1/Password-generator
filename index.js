function genPassword(list) {
    // Generates password for button
    if (list == "") {
        return ""
    }
    let password = "";
    for (i = 0; i < passwordLength; i++) {
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
    if (allChars == "") { // if no buttons are checked, output a blank text.
        passwordEl.textContent = "";
    } else {
        passwordEl.innerText = "Your new password: " + "\n" + genPassword(allChars);
    }
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const symbols = "~`!@#$%^&*()_-+={[}]|:;<>.?/";
const numbers = "0123456789";

let passwordLength = 10; //default length
let passwordEl = document.getElementById("newpassword-el");
let checkboxLet = document.querySelector("#letters");
let checkboxNum = document.querySelector("#numbers");
let checkboxSym = document.querySelector("#symbols");

let slider = document.getElementById("myRange");
let output = document.getElementById("value");
output.innerHTML = slider.value; // Display the default slider value
slider.onchange = function(event) {
    output.innerHTML = slider.value;
    passwordLength = slider.value; // How long password should be based on slider pos
}

// 1. Add functionality for the slider so what the user inputs changes how long the password becomes.
// 2. Add a way for the user to easily copy-paste the password (W3S?)
// Optional: Style website more!

