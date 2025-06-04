// Logic-1 -- cigarParty
// When squirrels get together for a party, they like to have cigars. A squirrel
// party is successful when the number of cigars is between 40 and 60,
// inclusive. Unless it is the weekend, in which case there is
// no upper bound on the number of cigars. Return true if the party with the given values is 
// successful, or false otherwise.

// Examples

// cigarParty(30, false) → false
// cigarParty(50, false) → true
// cigarParty(70, true) → true
function cigarParty(cigars,isweekend){
 if(cigarParty>=40 && cigarParty <60 && !isweekend){
   return true
 }else if(cigarParty>=40 && isweekend){
    return true
 }
 return false
}