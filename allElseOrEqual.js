function allElseEqual(arr) {
    // Get the sum of all of the elements in the array, and divide it by half
    // Check and see if ANY OF THE elements in the array are equal to that number
    const validator = arr.reduce((x, y) => x + y) / 2

    return arr.filter(num => num === validator)[0] || null
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
