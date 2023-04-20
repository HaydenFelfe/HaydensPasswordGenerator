// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to contain?");
    if (isNaN(passwordLength)) {
        window.alert("Please enter a valid number");
        return;
      } else if (passwordLength < 8) {
        window.alert("Your password must be at least 8 characters.");
        return;
      } else if (passwordLength > 128) {
        window.alert("Your password must be less than 128 characters.");
        return;
      }


}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
