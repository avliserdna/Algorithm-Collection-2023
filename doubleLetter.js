function doubleLetterCount(string) {
    // Take in string, check and see if FOLLOWING the next string is the same value as the string.
    // If string index is at the EDGE, do NOT check
    // Increment on  counter per double
    let ctr = 0;
    for (let i = 0; i < string.length; i++) {
        if (i === string.length) {
            return ctr
        }
        if (string[i] === string[i + 1]) {
            ctr += 1
        }
    }
    return ctr
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
