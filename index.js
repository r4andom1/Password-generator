function genPassword() {
    // Generates password for button
    if (! passwordDone) {
        for (i = 0; i < nrOfChars; i++) {
            let randomChar = characters[genRandomNumbers(characters)]; // makes random character
            password += randomChar;
        }
        passwordDone = true;
        passwordEl.textContent = "New Password: " + password;
    }
    
}

function genRandomNumbers(list) {
    // Returns random number based of list length
    let listLen = list.length;
    return Math.floor(Math.random() * listLen)
}

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
     "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let nrOfChars = 12; 
let password = [];
let passwordDone = false;
let passwordEl = document.getElementById("newpassword-el");
let checkbox = document.querySelector("#letters");

// 1. Have user input how long their password should be.
// 2. Generate random numbers depending on how long their password is. Store in list?
// 3. Pick out random characters from characters[] based on generated random numbers.
// 4. Add the random characters to a password variable.
// 5. 
// Optional: Have them choose to include symbols/numbers

