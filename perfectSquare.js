function perfectSquare(num) {
    // take in a number
    // check start from the index of 1, up to num/2
    // If the any index * itself = num, return true
    // If no results, return false
    // We search num/2 because realistically, perfect squares don't have numbers above it's halfway digit to form the perfect square
    // Doing that, reduces the number of indexes we search
    for (let i = 0; i < num / 2; i++) {
        if (i * i === num) {
            return true
        }
    }
    return false
}

console.log(perfectSquare(5));   // false
console.log(perfectSquare(12));  // false
console.log(perfectSquare(30));  // false
console.log(perfectSquare(961));   // true
console.log(perfectSquare(8281));  // true
console.log(perfectSquare(1000000))// true
