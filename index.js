function genPassword(list) {
    // Generates password for button
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
    if (checkboxLet.checked && checkboxNum.checked && checkboxSym.checked) {
        let letNumSym = letters.concat(numbers, symbols); 
        passwordEl.textContent = "New Password: " + genPassword(letNumSym);
    } else if (checkboxLet.checked && checkboxNum.checked) {
        let letNum = letters.concat(numbers); 
        passwordEl.textContent = "New Password: " + genPassword(letNum);
    } else if (checkboxLet.checked && checkboxSym.checked) {
        let letSym = letters.concat(symbols); 
        passwordEl.textContent = "New Password: " + genPassword(letSym);
    } else if (checkboxNum.checked && checkboxSym.checked) {
        let numSym = numbers.concat(symbols); 
        passwordEl.textContent = "New Password: " + genPassword(numSym);
    } else if (checkboxLet.checked) {
        passwordEl.textContent = "New Password: " + genPassword(letters);
    } else if (checkboxNum.checked) {
        passwordEl.textContent = "New Password: " + genPassword(numbers);
    } else if (checkboxSym.checked) {
        passwordEl.textContent = "New Password: " + genPassword(symbols);
    }
}

const letters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const symbols = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-",
    "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

let nrOfChars = 12; // How long password should be
let passwordEl = document.getElementById("newpassword-el");
let checkboxLet = document.querySelector("#letters");
let checkboxNum = document.querySelector("#numbers");
let checkboxSym = document.querySelector("#symbols");

// 1. Add a way for the user to easily copy-paste the password
// 2. Have user input how long their password should be.
// 3. 
// Optional: 

