function pickPrimes(array) {
    // get array
    // find primes in array
    // run prime checker, push into a new results array
    // return result array
    const result = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (prime(num)) {
            result.push(num)
        }

    }
    return result
}

function prime(num) {
    if (num < 0) {
        return false
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
