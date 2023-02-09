// What is the expression ?
// Expression ----> Evaluate -----> Assigned
//JS treat function as object
let add = function(num1,num2)
{
    return num1+num2;
}

//now the function doesnot have a name so we give the name as add
let result = add(5,6);

console.log(result);
console.log(typeof(result));