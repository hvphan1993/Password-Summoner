// Assignment code here

//create arrays that include uppercase, lowercase, special characters, and numbers
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["\~", "\`", "\!", "\@", "\#", "\$", "\%", "\^", "\&", "\*", "\(", "\)", "\_", "\-", "\+", "\=", "\{", "\[", "\}", "\]", "\|", "\:", "\'", "\<", "\>", "\,", "\.", "\?", "\/"];
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

  //prompts have confirm boxes to T/F the variables of lowercase, upper, special, and numerics- after confirm or cancel it generates password
  
  var lowerCase = lowerCaseConfirm();
  var upperCase = upperCaseConfirm();
  var numeric = numericConfirm();
  var specialChar = specialCharConfirm();

  //we want all answers here. length + what characters to use


  var password = generatePassword(characterLength, lowerCase, upperCase, numeric, specialChar);
  var passwordText = document.querySelector("#password");
  if (password != undefined) {  
    passwordText.value = password;
  }
        
}

function generatePassword(characterLength, lowerCase, upperCase, numeric, specialChar) {
  var password = "";

  var combo = [];   
  if (lowerCase) {
    combo.push.apply(combo, lowerCaseArray);
  }
  if (upperCase) {
    combo.push.apply(combo, upperCaseArray);
  }
  if (numeric) {
    combo.push.apply(combo, numericArray);
  }
  if (specialChar) {
    combo.push.apply(combo, specialCharArray);
  }
  if (combo.length == 0) {
    window.alert("Invalid input! Please select at least one character type.");
    return ;
  }

  for (i = 0; i < characterLength; i++) {
    var char = Math.floor(Math.random() * combo.length);

    password += combo[char];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
