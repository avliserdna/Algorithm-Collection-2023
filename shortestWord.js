// Your code here
// get sentence
// split sentence
// track shortest word, by tracking length and the word itself.
// over write what the shortest length and word is by going down the list
// return shortestWord

function shortestWord(string) {
  const stringArr = string.split(" ")
  let shortWord = stringArr[0]
  let shortest = stringArr[0].length

  for (word of stringArr) {
    if (word.length <= shortest) {
      shortWord = word
      shortest = word.length
    }
  }
  return shortWord
}


console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
