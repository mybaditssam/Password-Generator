// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerchar = "abcdefghijklmnopqrstuvwxyz";
var upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberchar = "0123456789"
var specchar = "!$%&'()*+,-./:;<=>?@[^_`{|}~"

function generatePassword () {
  pwlength = parseInt(prompt("How many characters would you like in your password? (Minimum of 8, Maximum of 128)"));
  return "";
}

var addlowerchar = confirm("Would you like lower case characters?")
var addupperchar = confirm("Would you like upper case characters?")
var addnumberchar = confirm("Would you like number characters?")
var addspecchar = confirm("Would you like special characters?")


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