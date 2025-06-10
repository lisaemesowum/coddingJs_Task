// array 2 -- more14
// given an array of ints return true if the number of 1s is greater than the number of 4s
// examples 
// more =14([1,4,1])--true
// more14([1,4,1,4])-false
// more14([1,1]) true
function more14(nums){
     let count1 = 0;
    let count4 = 0;
    for( let i=0; i<nums.length;i++){
        if(nums[i]===1){
           count1 ++
        }else if(nums[i]===4){
          count4 ++
      }
    }return count1>count4;
}