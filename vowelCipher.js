// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {

    // iterate through string
    // look for where char of string IS in alphabet
    // add by num and see where it ends up on the alphabet
    // if index number hits ABOVE alphabet's  length, reset to 0 and add there
    const stringArr = string.split("")

    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] = cipher(stringArr[i], num)
    }
    return stringArr.join("")
}

function cipher(char, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let charIndex = alphabet.indexOf(char)
    let newIndex = charIndex + num;
    if (newIndex > alphabet.length) {
        newIndex = num - 1
    }
    return alphabet[newIndex]
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
