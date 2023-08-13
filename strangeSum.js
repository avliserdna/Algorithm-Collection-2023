// your code here
// Iterate through array,
// get each index as .abs, and store it in a comparison array.
// If comparisonArray includes target index.abs(), then incremenet counter.

function strangeSums(array) {
  let ctr = 0;
  if (array.length === 1) {
    return ctr
  }
  const compare = []
  for (num of array) {
    if (compare.includes(Math.abs(num))) {
      ctr++
    }
    else {
      compare.push(Math.abs(num))
    }
  }
  return ctr
}

console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0
