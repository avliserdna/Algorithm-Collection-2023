function consonantCancel(sentence) {
    // take in a sentence
    // split the sentence into an array
    // check every single word, and split THAT word into an array too
    // check the first word if its a vowel, if the FIRST word is not a vowel, remove that word, then move to the next
    // continue until you FIND A VOWEL. then stop

    const sentenceArr = sentence.split(" ")
    for (let i = 0; i < sentenceArr.length; i++) {
        sentenceArr[i] = wordChecker(sentenceArr[i])
    }
    return sentenceArr.join(" ")
}

function wordChecker(word) {
    const vowels = "aeiou"
    const wordArr = word.split("")
    for (let i = 0; i < wordArr.length; i++) {
        if (vowels.includes(wordArr[i])) {
            return wordArr.join("")
        }
        else {
            wordArr[i] = ""
        }
    }
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
