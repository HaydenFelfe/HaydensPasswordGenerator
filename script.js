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
        return null;
    } else if (passwordLength > 128) {
        window.alert("Your password must be less than 128 characters.");
        return null;
    }
    var confirmSpecialChar = confirm("Click OK to confirm adding in special characters.");
    var chars = "";
    if (confirmSpecialChar) {
        chars += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    }
    var confirmNumbericNumbers = confirm("Click OK to confirm adding in numberic characters.");
    if (confirmNumbericNumbers) {
        chars += "0123456789";
    }
    var confirmLowercaseLetters = confirm("Click OK to confirm adding in lowercase characters");
    if (confirmLowercaseLetters) {
        chars += "abcdefghijklmnopqrstuvwxyz"
    }
    var confirmUppercaseLetters = confirm("Click OK to confirm adding in uppercase characters.");
    if (confirmUppercaseLetters) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var password = "";

        for (var i = 0; i < passwordLength; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }


    }


    return password;
}
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
