/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  // candies = an array of numbers
  // extra candies is an integer
  // first things first: get the MAX number from the candies array
  // after, create a results array
  // check if candies[i] + extra candies is GREATER than >maxCandies
  // push boolean result into result array

  const greatestCandy = Math.max(...candies)
  const result = []

  for (let i = 0; i < candies.length; i++) {
      let addedCandy = extraCandies + candies[i]
      addedCandy >= greatestCandy ? result[i] = true : result[i] = false
  }
  return result
};
