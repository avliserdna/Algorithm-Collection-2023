// Your code here
function unique(array) {
  const result = []
  for (el of array) {
    if (!result.includes(el)) result.push(el)
  }
return result
}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
