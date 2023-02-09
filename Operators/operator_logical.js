//Logical operator

let x = 7, y = 8, z = 9;
let result = x < y;
console.log(result);

// now what if we need to compare x with both y and z
//so we use logical operator
/*Type of the operator
1. And . ----> &
2. Or +  ----> ||
3. Not ! ----> !
that is what we use in java 
*/
//And work bitwise so we use "&&" 
x = 7, y = 2, z = 5;
result = x < y && x < z;
console.log(result);

result = x < y || x < z;
console.log(result);

result = x < y || x < z;
let n = !result
console.log(n);