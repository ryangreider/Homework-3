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
  const userLength = prompt('What length will your password be? (Minimum: 8)');

  // Verify
  if (!isNaN(userLength)) {
    if (userLength >= 8) {
      // Return
      return parseInt(userLength);
    }
  }

  return 8
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

function confirmNumberChar() {
  return confirm ('Numbers?');
}

function generatePassword() {
  const uppercaseChar = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const lowercaseChar = [...'abcdefghifjklmnopqrstuvwxyz'];
  const numberChar = [...'1234567890'];
  const specialChar = [ ..."!@#$%^&*()+-_.,~{}[]:'/\\"];

  const passwordLength = promptForLength();
  const wantsUppercase = confirmUppercase();
  const wantsLowercase = confirmLowercase();
  const wantsSpecialChar = confirmSpecialChar();
  const wantsNumbers = confirmNumberChar();

  // Result
  let password = '';

  while (true) {
    if (wantsUppercase) {
      password += uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
    } 

    if (wantsLowercase) {
      password += lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
    }

    if (wantsSpecialChar) {
      password += specialChar[Math.floor(Math.random() * specialChar.length)];
    }

    if (wantsNumbers) {
      password += numberChar[Math.floor(Math.random() * numberChar.length)];
    }

    if (password.length >= passwordLength) {
      break;
    }

  }
  return password.slice(0, passwordLength);
}
