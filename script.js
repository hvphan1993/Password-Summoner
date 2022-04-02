// Assignment code here

//create arrays that include uppercase, lowercase, special characters, and numbers
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// create function that on button click we are prompted with our first question


function promptLength() {
  var firstQ = 0; // set as zero to initialize while loop
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

function lowerCaseConfirm(){
  var lowerCaseConfirm = window.confirm("Would you like lowercase characters in your password? Select 'OK' for yes and 'Cancel' for no.");
    return lowerCaseConfirm;
}

function upperCaseConfirm() {
  var upperCaseConfirm = window.confirm("Would you like uppercase characters in your password? Select 'OK' for yes and 'Cancel' for no.");
    return upperCaseConfirm;
}

function numericConfirm() {
  var numericConfirm = window.confirm("Would you like numeric characters in your password? Select 'OK' for yes and 'Cancel' for no.");
    return numericConfirm;
}

function specialCharConfirm() {
  var specialCharConfirm = window.confirm("Would you like special characters in your password? Select 'OK' for yes and 'Cancel' for no.");
    return specialCharConfirm;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //prompt 1
  var characterLength = promptLength();

    //prompt 2 teacher has confirm boxes to T/F the variables of lowercase, upper, special, and numerics- after confirm or cancel it generates password
  
  var lowerCase = lowerCaseConfirm();
  var upperCase = upperCaseConfirm();
  var numeric = numericConfirm();
  var specialChar = specialCharConfirm();

    //we want all answers here. length + what characters to use


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
