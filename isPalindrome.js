/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // given a number, return true if palindrom where it's read the same left to right
  // a bruteforce solution is if you get x, convert x to str and concatenate in reverse and see if they're equal

  let strX = String(x).split("").reverse()

  if (x === Number(strX.join(""))){
      return true
  }
  else {
      return false
  }
};
