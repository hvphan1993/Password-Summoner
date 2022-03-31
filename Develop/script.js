// Assignment code here

//create arrays that include uppercase, lowercase, special characters, and numbers
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// create function that on button click we are prompted with our first question


function promptUser() {
  var firstQ = 0;
  while (firstQ < 8 || firstQ > 128) {
    firstQ = prompt("How many characters do you want in your password?");
  
      if (firstQ >= 8 && firstQ <= 128) {
        alert("Your password will have " + firstQ + " characters."); 
    }
        else {
          alert("Please enter a value of at least 8 characters and no more than 128 characters.")
      }  
  }
  return firstQ;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var characterLength = promptUser();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
