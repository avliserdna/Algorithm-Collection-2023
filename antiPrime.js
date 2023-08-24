// Your code here
// the inverse of isPrime
// nvm, it's true IF the number has more divisors than any number less than N
// so if i%n == 0 between 1 and less than N, store in divisorStorage
// divisorStorage.length = nDivisor length

// we will comapre every single divisor TO that and look for the other divisors
// if ANYTHING is BIGGER (not bigger/equal, just BIGGER), return false OTHERWISE return true
function isAntiPrime(n) {
  const divisorStorage = []
  let i = 1;
  while (i<=n) {
    if (n%i === 0) {
      divisorStorage.push(i)
    }
    i++
  }

  for (let j = 1; j < n; j++) {
    let smallerNStorage = []
    for (let k = 0; k <=j; k++) {
      if (j%k === 0) {
        smallerNStorage.push(k)
      }
    }
    if (divisorStorage.length < smallerNStorage.length) {
      return false
    }
  }
  return true
}


console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
