// Your code here
// Take in a string, check and see if there are 3 or more characters consecutively to be counted as a triplet

// Split string
// Check if char value = index, if it does incremenet. if it doesnt, reset to 1.
// If index <= 3, return true

function tripletTrue(string) {
  const stringArr = string.split("")
  let ctr = 1;
  let curr = ""
  for (let i = 0; i < stringArr.length; i++) {
    if (curr === stringArr[i]) {
      ctr+=1
    }
    else {
      curr = stringArr[i]
      ctr = 1
    }
    if (ctr >= 3) {
      return true
    }
  }
  return false
}


console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
