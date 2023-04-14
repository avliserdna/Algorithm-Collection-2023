function sameCharCollapse(str) {
    // take in a string
    // turn the string into an array
    // check the first index if the neighboring one is doubled
    // if they're the same value, turn the current index and the next index into white spaces
    // repeat this process until there are no duplicates
    const strArr = str.split("")

    for (let i = 0; i < strArr.length - 1; i++) {
        if (strArr[i] === strArr[i + 1]) {
            strArr[i] = ""
            strArr[i + 1] = ""
            return sameCharCollapse(strArr.join(""))
        }
    }
    return strArr.join("")
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
