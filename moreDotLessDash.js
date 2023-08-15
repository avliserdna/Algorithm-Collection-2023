// Your code here
function moreDotLessDash(str) {
  let dotCtr = 0;
  let dashCtr = 0;

  const strArr = str.split("")

  for (char of strArr) {
    if (char === ".") {
      dotCtr++
    }

    if (char === "-") {
      dashCtr++
    }
  }
  return dotCtr > dashCtr ? true : false
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
