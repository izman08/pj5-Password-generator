// Password generator character sets
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

// Function to generate random password
function generatePassword(length, useLowercase, useUppercase, useNumbers, useSymbols) {
    let characterSet = '';

    if (useLowercase) characterSet += lowerCaseLetters;
    if (useUppercase) characterSet += upperCaseLetters;
    if (useNumbers) characterSet += numbers;
    if (useSymbols) characterSet += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}

// Event listener for generating password
document.getElementById('generatePassword').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('output').innerText = password;
});
