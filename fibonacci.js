function fibonacci(length) {
    // if length is 0, return an empty array
    // if length is 1, return an array with 1
    // if length is 2 or greater, make each next index the previous 2 indexes added to each other then return array
    const fibonacci = Array(length)

    if (length === 0) {
        return fibonacci
    }

    fibonacci[0] = 1

    if (length === 1) {
        return fibonacci
    }

    fibonacci[1] = 1;
    for (let i = 2; i < length; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    return fibonacci
}


console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
