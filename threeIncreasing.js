// Your code here
// Take in an array
// Iterate through the array by - 4, then add the current index by +1 and +2, then compare to the indexes that proceed it.
// return true if numbers are +0 +1 +2 from each other
// return false if there are no combinations where this is true.

function threeIncreasing(arr) {
  for (let i = 0; i <= arr.length-3; i++ ) {
    let curr = arr[i]
    if (arr[i+1] === (curr+1) && arr[i+2] === (curr+2)) {
      return true
    }
  }
  return false
}
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
