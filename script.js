// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var numbers = "0123456789";
var specials = "!@#$%^&*";



// Write password to the #password input
function writePassword() {

  var passwordLength = parseInt(prompt("Enter password length:"));
  var includeLowerCase = confirm("Do you want to include lower case?:");
  var includeUpperCase = confirm("Do you want to include upper case?:");
  var includeNumeric = confirm("Do you want to include numeric?:");
  var includeSpecial = confirm("Do you want to include special characters?:");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length incorrect. Password length should be between 8 and 128 characters.");
    return null;
  }

  if (includeLowerCase || includeUpperCase || includeNumeric || includeSpecial) {
    var password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumeric, includeSpecial);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  } else {
    alert("Password criteria invalid. Criteria needs to include at least one of lowercase, uppercase, numeric, or special characters.");
  }

}

function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumeric, includeSpecial) {
  var characters = "";
  var password = "";

  if (includeLowerCase) {
    characters = characters.concat(alphabet);
  }
  if (includeUpperCase) {
    characters = characters.concat(alphabetUpper);
  }
  if (includeNumeric) {
    characters = characters.concat(numbers);
  }
  if (includeSpecial) {
    characters = characters.concat(specials);
  }
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.random();
    var characterNumber = Math.floor(randomNumber * characters.length + 1);
    password += characters.charAt(characterNumber);
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
