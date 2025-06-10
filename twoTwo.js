// // Array-2 -- twoTwo
// Given an array of ints, return true if every 2 that 
// appears in the array is next to another 2.

// Examples

// twoTwo([4, 2, 2, 3]) → true
// twoTwo([2, 2, 4]) → true
// twoTwo([2, 2, 4, 2]) → false

function twoTwo(nums){
  for(let i =0; i <nums.length; i++){
   if(nums[i]==2){
      if(nums[i - 1] !== 2 && nums[i + 1] !== 2){
       return false;
      }
   }
  }return true;
}
console.log(twoTwo([2, 2, 4]))