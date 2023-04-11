function summationSequence(start, length) {
    // have a sequence array be made based off length
    // make the first number in array the start value
    // every other index in sequencce will be based off of  the summation of the PREVIOUS index i-1

    const sequence = Array(length)
    sequence[0] = start
    for (let i = 1; i < sequence.length; i++) {
        sequence[i] = summation(sequence[i - 1])
    }
    return sequence
}

function summation(num) {
    let summation = 0;
    for (let i = 0; i <= num; i++) {
        summation += i
    }
    return summation
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
