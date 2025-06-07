// Logic-1 -- lessBy10
// Given three ints, a b c, return true if one of them is 10 or more less
//  than one of the others.

// Examples

// lessBy10(1, 7, 11) → true
// lessBy10(1, 7, 10) → false
// lessBy10(11, 1, 7) → true

function lessBy10(a, b, c){
 return Math.abs(a - b) >= 10 || Math.abs(a - c) >= 10 || Math.abs(b - c) >= 10; //returns the absolute value of a number — that is, it removes any negative sign
}