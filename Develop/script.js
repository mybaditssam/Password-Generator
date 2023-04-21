// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerchar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperchar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var numberchar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specchar = [
  "!", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", 
  ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"
];



function generatePassword () {
  var passwordlength = prompt("Choose between 8 and 128 characters");
  var confirmlower = confirm("Would you like lower case letters?")
  var confirmtupper = confirm("Would you like upper case letters?")
  var confirmnumb = confirm("Would you like numbers?")
  var confirmspec = confirm("Would you like special characters?")
  var charSet = [];

  if (confirmlower) {
    charSet = charSet.concat(lowerchar);
  }
  if (confirmtupper) {
    charSet = charSet.concat(upperchar);
  }
  if (confirmnumb) {
    charSet = charSet.concat(numberchar);
  }
  if (confirmspec) {
    charSet = charSet.concat(specchar);
  }
  if (charSet.length === 0) {
    alert("Select at least one character type");
    return "";
  }
  var generatedpassword = "";
  for (var i = 0; i < passwordlength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    generatedpassword += charSet[randomIndex];
  }
  return generatedpassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);