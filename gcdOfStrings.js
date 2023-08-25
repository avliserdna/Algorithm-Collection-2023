/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  // str1/str2
  // solution CAN be smaller
  // compare if str2 has chars in str1
  // if str2 chars IN str1, return str2
  // IF part of str2 in str1, return partofstr2
  // if NOthing in str2 is in str1, return blank

  // EDGE CASES: Check by CHAR, and not by word. It's possible to have a part of Str2 in Str1, but not all of it

  // if str2[0] is in str[1], add to res.
  // check to see if str2[0] +str[1] is IN then next.
  // If it's in, return str2[0] +str2[1] at the end of loop
  // RESULTS need to be DRY
  // results are ALWAYS prefixes, so str2 SHOULD HAVE content in str1
  // BUT if str1 does not HAVE prefix that matches str2, then DO NOT have a GCD
  // ALL of this is based off of true prefixes


// Prefixes: Checking for the proper prefix
// To do so, we need to start with the smaller string.
// Check if the smaller string has MULTIPLE instances of the prefix.
// Best way I can think of is do .split(base)
// check if ALL split values are base
// IF they are ALL base, try with one more character
// return prefix GCD

// use base GCD to check other STR

let base = str1.length <= str2.length ? str1 : str2

let multiplesOfBase = function (str1 ,str2,base) {
  let str1Arr = str1.split(base)
  let str2Arr = str2.split(base)
  let multipleCheck = true
  if (!base) return ""
  for (let i = 0; i < str1Arr.length || i < str2Arr.length; i++) {
      if (str1Arr[i] || str2Arr[i]){
          multipleCheck = false
      }
  }

  return multipleCheck ? base : multiplesOfBase(str1,str2, base.slice(0,-1))
}

let gcd = multiplesOfBase(str1, str2, base)

return gcd
};
// var gcdOfStrings = function(str1, str2) {
//   if (str1 + str2 != str2 + str1) return ''
//   let m = str1.length
//   let n = str2.length

//   let gcd = function (x, y) {
//       if (!y) return x
//       return gcd(y, x % y)
//   }

//   let div = gcd (m, n)
//   return str1.slice(0, div)
// };
