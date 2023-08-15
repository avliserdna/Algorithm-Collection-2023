// Your code here
// get a string, then check for vowels
// in vowel index, replace vowel with vowel+b+vowel

function sillyString(str) {
  const strArr = str.split("")
  const vowels = "aeiou"

  for (let i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) {
      strArr[i] = `${strArr[i]}b${strArr[i]}`
    }
  }
  return strArr.join("")
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
