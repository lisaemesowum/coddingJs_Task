// Logic-1 -- fizzString
// Given a string str, if the string starts with "f" return "Fizz". If the string
//  ends with "b" return "Buzz". If both the "f" and "b" conditions are true,
//   return "FizzBuzz". In all other cases, return the string unchanged.


// Examples

// fizzString('fig') → Fizz
// fizzString('dib') → Buzz
// fizzString('fib') → FizzBuzz

function fizzString(str){
    let= first;
    let= end;

    if(first === "f" && end ==="b"){
        return "FizzBuzz"
    }
     else if (first === "f"){
        return "Fizz"
    }else if(end === "b"){
        return "Buzz"
    }else{
        return str
    }
}