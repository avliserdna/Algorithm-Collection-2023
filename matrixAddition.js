// Your code here

// all matrixes are gonna be the same length.
// use a for loop to access the matrixes
// add each by the index and place them in an array equal to the current index

function matrixAddition(matrixA, matrixB) {
  const result = []
  let length = matrixA.length > matrixB ? matrixA.length : matrixB.length
  for (let i =0; i < length; i++) {
    if (!matrixA[i]) {
      matrixA[i] = [0,0]
    }

    if (!matrixB[i]) {
      matrixB[i] = [0,0]
    }
    result[i] = ([matrixA[i][0] + matrixB[i][0], matrixA[i][1] + matrixB[i][1]])
  }
  return result
}

let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
console.log(matrixAddition(matrixA, matrixD)) // [ [ 4, 0 ], [ 11, 17 ], [ 0, 1 ] ]
