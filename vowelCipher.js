function vowelCipher(string) {
    // have a const string of vowels "aeiou"
    // check and see if letter in character IS in string of vowels
    // IF its in string of vowels, return the index location +1 UNLESS it's past 5. If its past 5, return 0

    const vowels = "aeiou";
    const vowelsArr = vowels.split("")

    const stringArr = string.split("")
    for (let i = 0; i < stringArr.length; i++) {
        if (vowelsArr.includes(stringArr[i])) {
            stringArr[i] = vowelConversion(stringArr[i], vowels)
        }
    }
    return stringArr.join("")
}

function vowelConversion(char, vowels) {
    let charIndex = vowels.indexOf(char)
    if (charIndex + 1 >= vowels.length) {
        charIndex = 0;
    }
    else {
        charIndex += 1
    }
    return vowels[charIndex]
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
