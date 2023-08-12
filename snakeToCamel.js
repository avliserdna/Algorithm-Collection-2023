// Your code here
// Get a string, all strings have a camel case in between each word.
// Split each string by the character "_", and traverse through the array to capitalize the first worst of each index
// at the end of iteration, return through join, to make it one string.

function snakeToCamel(string) {
  const stringArr =  string.split("_")
  for (let i = 0; i < stringArr.length; i++) {
    let word = stringArr[i].toLowerCase()
    stringArr[i] = word[0].toUpperCase() + word.slice(1)
  }
  return stringArr.join("")
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
