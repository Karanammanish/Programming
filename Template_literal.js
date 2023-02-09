/* What is template literal?
We get value from variable to print in the output
*/

//First leats see concatenation method
let num1 = 9;
let num2 = 4;
let result = num1 + num2;

console.log("The addition of " + num1  + " and " + num2 + " is " + result )

//Now template literal we use "{ ` ` }" it is the symbol above tab button
//$ symbol is used for the variable whose value we need

num1 = 9;
num2 = 4;
result = num1 + num2;

console.log(`the addition of ${num1} and ${num2} is
 ${result}`)
 //this way we can write in new line