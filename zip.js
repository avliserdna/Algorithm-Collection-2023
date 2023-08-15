// Your code here
// Get two arrays, , then get put each index into its own array. Array1[0] + array2[0] into one array, that goes in to the result array

function zip(arr1, arr2) {
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]])
  }
  return result
}

console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
