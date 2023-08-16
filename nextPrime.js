// Your code here
// take in a number
// prime numbers are numbers whose factors are itself and 1
// this means, you need to see what the next number that returns n%n, and nothing else.
// this is achieved by starting an index from the current number
// try running tests of curr % j (starting from 2).
// If j !== curr and returns 0, that's NOT a prime number
// if J === curr, and returns 0 and hasn't returned a 0 beforehand, then it IS a prime number
// return the next biggest prime number next to it

function nextPrime(n) {
  let isPrime = true;
  for (let i = n+1; i > n; i++) {
    for (let j = 2; j < i; j++) {
      if (i%j===0) {
        isPrime = false
        break;
      }
      else{
        isPrime = true
      }
    }
    if (isPrime === true) {
      return i
    }
  }
}


console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
