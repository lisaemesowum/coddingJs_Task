// Given an array of ints, return a new array length 2
//  containing the first and last elements from the original array.
//  The original array will be length 1 or more.

function makeEnds(nums){
  return[nums[0], nums[nums.length - 1]]
}