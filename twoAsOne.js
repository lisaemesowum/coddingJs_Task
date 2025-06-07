// Logic-1 -- twoAsOne
// Given three ints, a b c, return true if it is possible to add two of the ints
//  to get the third.

// Examples

// twoAsOne(1, 2, 3) → true
// twoAsOne(3, 1, 2) → true
// twoAsOne(3, 2, 2) → false

function twoAsOne(a, b, c){
  if(a + b===c || a + c===b || b+c===a){
     return true;
     }else if(a + b > c){
       return false;
     }
}