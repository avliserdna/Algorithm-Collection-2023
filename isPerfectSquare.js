// your code here
// you can cheat and use Math.sqrt
// or you can do it the manual way
function isPerfectSquare(n) {
  for (let i = 0; i <= n; i++) {
    if (i*i === n) {
      return true
    }
  }
  return false
}

console.log(isPerfectSquare(1))     // true
console.log(isPerfectSquare(4))     // true
console.log(isPerfectSquare(64))    // true
console.log(isPerfectSquare(100))   // true
console.log(isPerfectSquare(169))   // true
console.log(isPerfectSquare(2))     // false
console.log(isPerfectSquare(40))    // false
console.log(isPerfectSquare(32))    // false
console.log(isPerfectSquare(50))    // false
