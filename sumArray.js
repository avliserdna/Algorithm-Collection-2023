// function sumArray(array) {
//   let res = 0;
//   for (let i = 0; i < array.length; i++) {
//     res += array[i]
//   }
//   return res
// }

// let sumArray = (array) => array.reduce((a,b) => a + b)

function sumArray(array, res = 0) {
  if (!array.length) {
    return res
  }
  res += array.pop()
  return sumArray(array, res)
}

// let sumArray = (array, res) => !array.length ? res : sumArray(array.slice(1), res += array[0])
console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
