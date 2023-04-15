function doubleSequence(num, seq) {
    // take in a num
    // seq represents the amount of times the num's multiples will show
    // create an array bases on seq length
    // place multiples of num in array, and convert it through i+1

    const result = new Array(seq)

    if (seq === 0) {
        return result
    }
    result[0] = num
    for (let i = 1; i < seq; i++) {
        result[i] = result[i - 1] * 2
    }
    return result
}



console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]
