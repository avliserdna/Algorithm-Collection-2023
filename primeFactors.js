function primeFactors(n) {
    // Take in number
    // Start from i= 2, and divide n by i
    // numbers are PRIME FACTORS if they CAN NOT be broken down
    // check if i can be can be broken down or is prime
    // push i if number IS prime factor
    const results = [];

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            if (checkPrime(i)) {
                results.push(i)
            }
        }
    }
    return results
}

function checkPrime(n) {
    if (n < 0) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(primeFactors(24)); // [2, 3]
console.log(primeFactors(60)); // [2, 3, 5]
