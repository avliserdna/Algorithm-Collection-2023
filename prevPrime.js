// Your code here
// start with n, descending, then check for prime number
// do the same process, by checking if there are any divisible numbers between 2 and 1 less N

function prevPrime(n) {
  if (n <= 2) {
    return null
  }
  let isPrime = true;
  for (let i = n-1; i>=1; i--) {
    for (let j = 2; j < i; j++) {
      if (i%j === 0) {
        isPrime = false;
        break
      }
      else {
        isPrime = true
      }
    }
    if (isPrime) {
      return i
    }
  }
}

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
