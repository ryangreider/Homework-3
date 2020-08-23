const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function promptForLength() {
  // Ask
  const userLength = prompt('What length will your password be? (Minimum: 8');

  // Verify
  if (!isNaN(userLength)) {
    if (userLength >= 8) {
      // Return
      return parseInt(userLength);
    }
  }
}

function confirmUppercase() {
  return confirm('Will the password include uppercase letters?');
}

function confirmLowercase() {
  return confirm ('Lowercase letters?');
}

function confirmSpecialChar() {
  return confirm ('Special Characters?');
}

function generatePassword() {
  const uppercaseChar = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const lowercaseChar = [...'abcdefghifjklmnopqrstuvwxyz'];
  const numberChar = [...'1234567890'];
  const specialChar = [ ..."!@#$%^&*()+-_.,~{}[]:'/\\"];
}
// Prompts
// 1- Length
// 2- Uppercase
// 3- lowercase
// 4- special characters