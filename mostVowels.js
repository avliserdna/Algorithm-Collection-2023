function mostVowels(sentence) {
    // take in sentence
    // split into array
    // create AEIOU checker
    // create counter
    // analyze per index, and get count of vowels
    // return index of array with highest count

    const sentenceArr = sentence.split(" ")
    const result = { highest: null, counter: 0 }

    for (let i = 0; i < sentenceArr.length; i++) {
        let word = sentenceArr[i];
        let ctr = vowelCounter(word);
        if (result.counter < ctr) {
            result.highest = word
            result.counter = ctr
        }
    }
    return result.highest
}
function vowelCounter(word) {
    const vowels = "aeiou";
    let ctr = 0;
    for (let j = 0; j < word.length; j++) {
        let char = word[j];
        if (vowels.includes(char)) {
            ctr++
        }
    }
    return ctr
}
console.log(mostVowels("what a wonderful life")); // "wonderful"
