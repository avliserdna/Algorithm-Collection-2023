function tripleSequence(start, length) {
    // start represents the starting number
    // length represnts the array length
    // iterate through the array to have each index *3 of the previous index's value

    const sequence = Array(length)
    sequence[0] = start;
    for (let i = 1; i < length; i++) {
        sequence[i] = sequence[i - 1] * 3
    }
    return sequence
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
