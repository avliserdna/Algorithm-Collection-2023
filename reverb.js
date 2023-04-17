function reverb(string) {
    // Check string for vowels
    // look for the char with the FURTHEST index that IS  vowel, repeat all words after said index while LESS than max length of string
    // if NOT a string, return NULL

    if (typeof string !== "string") {
        return null
    }
    let indexOflastVowel = lastVowelFinder(string)
    let reverb = string.slice(indexOflastVowel, string.length)
    return string += reverb
}

function lastVowelFinder(string) {
    const vowels = "aeiou";
    const stringArr = string.split("")
    let vowelIndex = 0;
    for (let i = 0; i < stringArr.length; i++) {
        if (vowels.includes(stringArr[i].toLowerCase())) {
            vowelIndex = i
        }
    }
    return vowelIndex
}



console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
