// // Logic-2 -- loneSum
// Given 3 int values, a b c, return their sum. However, if one of the values is
//  the same as another of the values, it does not count towards the sum.

// Examples

// loneSum(1, 2, 3) → 6
// loneSum(3, 2, 3) → 2
// loneSum(3, 3, 3) → 0

function loneSum(a, b, c){
  sum=0;
  if(a!==b &&a!==c){
    sum +=a;}
  if(b!==a &&b!==c){
    sum +=b;}
  if(c!==a&& c!==b){
    sum +=c}
  return sum
}