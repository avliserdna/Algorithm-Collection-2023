function greatestFactorArray(array) {
    // Take in Array of Numbers
    // Look through array's numbers, and check if divisible by 0
    // If Divisible by 0, run helper function to look for greatest factor
    // In helper, iterate through all numbers to check for divisible by index that's NOT prime and the current index
    // Return number, and push number to array
    // IF number at Index of Array is PRIME, push into new array

    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        if (num % 2 === 0) {
            array[i] = greatestFactor(num)
        }
    }
    return array
}

function greatestFactor(num) {
    let greatFactor = 0;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            if (i > greatFactor) {
                greatFactor = i;
            }
        }
    }
    return greatFactor
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
