function adjacentSum(numArray) {
    // your code here
    // iterate through numArray, NEVER CHECK end of the array and out of bounds of array
    // check first and next bit of array
    // Get the sum and put that into a NEW array
    // At the end of the operation, take out the last bit of the array

    for (let i = 0; i < numArray.length - 1; i++) {
        numArray[i] = numArray[i] + numArray[i + 1]
    }
    numArray.pop()
    return numArray

}

console.log(adjacentSum([3, 7, 2, 11])); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
console.log(adjacentSum([2, 5, 1, 9, 2, 4])); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]
