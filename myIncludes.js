// let myIncludes = (arr, char) => arr.filter((el) => el === char).length === 1

function myIncludes(arr, char) {
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] === char) {
      return true
    }
  }
  return false
}





console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false
