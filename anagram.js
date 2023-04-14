function anagrams(word1, word2) {
    // word, and word 2 have INEQUAL lengths
    // compare word2 to word 1 by checking to see if word2's chars are ANYWEHRE within word1
    // use word1.includes(word2 char)
    // any thing that's FALSE is returned as false
    // if EVERYTHING passes true, then return true

    for (let i = 0; i < word2.length; i++) {
        if (!word1.includes(word2[i])) {
            return false
        }
    }
    return true
}

console.log(anagrams("cat", "act"));          // true
console.log(anagrams("restful", "fluster"));  // true
console.log(anagrams("cat", "dog"));          // false
console.log(anagrams("boot", "bootcamp"));    // false
