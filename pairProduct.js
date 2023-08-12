// your code here
// obtain a list, and a target number
// if list[i] multiplied by list[n] = target, then true else false
// brute force method = two nested for loops and look left to right
// there's also the both ends approach to make it o(n)

function pairProduct(list, target) {
  let curr = 0;
  for (let i = 0; i < list.length; i++) {
    curr = list[i]
    for (let j = 0; j < list.length; j++) {
      if (curr !== list[j] && (curr * list[j] === target)) {
        return true
      }
    }
  }
  return false
}



console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false
