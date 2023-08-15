// your code here
// obtain a string, and split it.
// Check and see if Number, if not number assign to char
// if number, assign to number,
// use number to iterate the char onto the results string

function uncompress(str) {
  const strArr = str.split("")
  let char = "";
  let num = 0;
  let result = "";
    for (el of strArr) {
      Number(el) ? num = el : char = el
    if (char && num) {
      for (let j = 0; j < num; j++) {
        result+= char
      }
      char = ""
      num = 0;
    }
  }
  return result
}




console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
