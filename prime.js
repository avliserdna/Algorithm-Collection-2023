function prime(num) {
    // 1 and 2 ARE ALWAYS Prime
    // Check all numbers less than number and divide by num
    // If there's no WHOLE number after complete iteration, then return true
    // if there's 1 whole number, return true.
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

console.log(prime(2))  // true
console.log(prime(5))  // true
console.log(prime(11)) // true
console.log(prime(4))  // false
console.log(prime(9))  // false
console.log(prime(-5)) // false
