// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerchar = "abcdefghijklmnopqrstuvwxyz";
var upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberchar = "0123456789"
var specchar = "!$%&'()*+,-./:;<=>?@[^_`{|}~"

function generatePassword () {
  prompt("How many digits?");
  return "password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// When generate button is clicked
// User is prompted password criteria 
//    - criteria must be 8 - 128 characters
//    - at least one character type should be chosen
// Password displays on page