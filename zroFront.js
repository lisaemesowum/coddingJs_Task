// Array-2 -- zeroFront
// Return an array that contains the exact same numbers as the given array,
//  but rearranged so that all the zeros are grouped at the start of the array. 
//  The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. 
//  You may modify and return the given array or make a new array.

// Examples

// zeroFront([1, 0, 0, 1]) → 0,0,1,1
// zeroFront([0, 1, 1, 0, 1]) → 0,0,1,1,1
// zeroFront([1, 0]) → 0,1

function zeroFront(nums){
let newarr=[]                //This will store the rearranged elements.
// using a for loop
for(let i = 0; i<nums.length; i++){             //First loop: Collect all zeros   //Iterates through each element in nums.
    // using if statement
    if(nums[i]==0){
        newarr.push(0);          //If an element is 0, it gets pushed into newArr.
    }
    //After this loop, newArr contains all the zeros from nums in their original order.
} 


  //Second loop: Collect all non-zero elements
    for(let i =0; i<nums.length; i++){             //Iterates through nums again.
        if(nums[i]!==0){                           //If an element is not [!] 0, it gets pushed into newArr.
            newarr.push(nums[i]) 
        }                                         //After this loop, newArr has all the zeros first, followed by the non-zero elements in their original order.
    }return newarr          //The final array is returned with zeros at the front.
}
console.log(zeroFront([1, 0, 0, 1]))



