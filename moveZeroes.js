/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // get array of nums
  // check if current index is 0
  // if index is 0, swap index IF next index is NOT 0
  // if both indexes are 0, look for the next index and see if its 0
  // do all swaps until all 0s are at the end

  for (let i = 0; i < nums.length-1; i++) {
      if (!nums[i]) {
        j=i+1
             while (!nums[j] && j < nums.length-1) {
                  j+=1
              }
              nums[i] = nums[j]
              nums[j] = 0
      }

  }
      return nums
};

console.log(moveZeroes([0,1,0,3,12]))
console.log([0])
