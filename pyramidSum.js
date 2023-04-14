function pyramidSum(base) {
    // Create a new Array to have results
    // the BASE will always be at the end of the array
    // the array length is DIRECTLY EQUAL to the base.length
    // every piece of the array will always be a sum of the previous step of the array
    // DON'T UNSHIFT, do a reverse index iteration

    const pyramid = new Array(base.length)

    pyramid[base.length - 1] = base
    for (let i = pyramid.length - 2; i > -1; i--) {
        let previousFloor = pyramid[i + 1]
        pyramid[i] = pyramidCalculator(previousFloor)
    }
    return pyramid
}

function pyramidCalculator(previous) {
    const copyArr = [...previous]
    for (let i = 0; i < copyArr.length - 1; i++) {
        copyArr[i] = copyArr[i] + copyArr[i + 1]
    }
    copyArr.pop()
    return copyArr
}
console.log(pyramidSum([1, 4, 6])); // [[15], [5, 10], [1, 4, 6]]
console.log(pyramidSum([3, 7, 2, 11])); // [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
