function dynamicFizzBuzz(max, num1, num2) {
    // Create result array
    // num1 and num2 are result[0] and result[1] respectively
    // the next numbers are numbers that are divisible by num[0] OR num[1] WHILE being less than Max
    const result = []
    result[0] = num1
    result[1] = num2

    for (let i = 2; i < max; i++) {
        if ((num1 * i) % i === 0 && (num1 * i) < max) {
            if (!result.includes(num1 * i)) {
                result.push(num1 * i)
            }
        }
        if ((num2 * i) % i === 0 && (num2 * i) < max) {
            if (!result.includes(num2 * i)) {
                result.push(num2 * i)
            }
        }
    }
    return result.sort((a, b) => a - b)
}




console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]
