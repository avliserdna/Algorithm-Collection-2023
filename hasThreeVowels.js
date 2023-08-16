// Your code here
// get a string
// split string, and compare for vowels
// if it's a vowel, put it into a ctrStorage (array)
// check if vowel is in the storage before putting it in
// if the storage is at length of 3, return true
// if none, return false

function hasThreeVowels(str) {
  const strArr = str.split("")
  const vowels = "aeiou"
  const vowelStorage = []
  for (char of strArr) {
    if (vowelStorage.length >= 3) {
      return true
    }
    if (vowels.includes(char)){
      if (!vowelStorage.includes(char)) {
        vowelStorage.push(char)
      }
    }
  }
  return false
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
