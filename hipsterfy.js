// your code here
// split sentence into an array, then have a vowel tracker variable. whatever the last variable is
function hipsterfy(sentence) {
  const strArr = sentence.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    let hipstered = hipsterfyVowel(strArr[i])
    strArr[i] = hipstered
  }
  return strArr.join(" ")
}

function hipsterfyVowel(word) {
  let vowels = "aeiou"
  let wordArr = word.split("")
  let currVowel = ""
  let vowelIndex = 0;
  for (let j = 0; j < wordArr.length;j++) {
    if (vowels.includes(wordArr[j])) {
      currVowel = wordArr[j]
      vowelIndex = j
    }

  }
  wordArr.splice(vowelIndex,1)
  return wordArr.join("")
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
