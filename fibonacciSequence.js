// Your code here
// 1 1 2 3 5 8 13 21
// 1 2 3 4 5 6 7 8

function fibonacciSequence(n) {
  const result = []
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      result[i] = 1
    }
    else {
      result[i] = result[i-1] + result[i-2]
    }
  }
  return result
}

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
