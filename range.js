// function range(min, max) {
//   let result = []
//   for (let i = 0; min <= max; i++) {
//     if ((min+i) > max) {
//       break
//     }
//     result[i] = min+i
//   }
//   return result
// }
function range (min, max) {
  const result = new Array();
  let i = 0;
  while ((min+i) <= max) {

    result[i] = min + i;
    i++
  }
  return result
}






console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []
