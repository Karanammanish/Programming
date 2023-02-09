//what is recursion?
/* Last in first out stack
Can we call fuction from the its self
It is problem of stack 
It will have max limit*/
/*For example
function show(){
    console.log("Hi")
    show()
}*/
//this is called recursion which is fuction calling its self

//Factorial
//3! = 3*2*1
//recerion is used for factorial

function fact(n)
{
    
    if (n === 0)
        return 1;
    else    
        return n * fact(n-1)
}

let num = 5;
let result = fact(num);

console.log(result);
