// Your code here
// same as Zip, but if one array is longer, use the longer array as the iterator's length.
// check if i+1 is GREATER than smaller array, and if it is assign null on longer the place where shorter array is


function zanyZip(arr1, arr2) {
  let result = []

  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (!arr1[i]) {
      arr1[i] = null
    }

    if (!arr2[i]) {
      arr2[i] = null
    }

    result[i]= [arr1[i], arr2[i]]
  }
  return result
}
// function zanyZip(arr1, arr2) {
//   let longer = 0;
//   let shorter = 0;
//   let result = []

//   if (arr1.length > arr2.length) {
//     longer = arr1.length
//     shorter = arr2.length
//   }
//   else if (arr1.length < arr2.length){
//     longer = arr2.length
//     shorter = arr1.length
//   }
//   else {
//     // Both are the same length
//     longer = arr1.length
//     shorter = arr1.length
//   }
//   for (let i = 0; i < longer; i++) {
//     if ((i+1) > shorter) {
//        arr1.length < arr2.length ? result.push([null, arr2[i]]) : result.push([arr1[i], null])
//     }
//     else {
//       result.push([arr1[i], arr2[i]])
//     }


//   }
//   return result
// }



console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
