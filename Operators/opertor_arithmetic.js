let num1 = 4
let num2 = 2

let result = 0

//Sum
result = num1 + num2
console.log(result)

//Difference
result = num1 - num2
console.log(result)

//Multipication
result = num1 * num2
console.log(result)

//Division
result = num1 / num2
console.log(result)

//Remainder
result = 5 % 2
console.log(result)

//To find the value of true and false which are boolean
num1 = true
num2 = true
result = num1 + num2
console.log(result)
num2 = false
result = num1 + num2
console.log(result)
//False = "0" True = "1"

//num = num + 2
let num = 5
num +=2
console.log(num)

//Increment
++num
console.log(num)

//Decrement
--num
console.log(num)

/* num++ "POST INCREMENT"
++num "pre increment"
So what is the difference
Post increment means first it will fetch the value then increment it
Pre increment means it will increment then assign
*/
let x = num++
console.log(x,num)

x = ++num
console.log(x,num)

//Power of the number
x = Math.pow(num,3)
// here num is the number which we want to power with 3
console.log(x,num)
x = x ** (3)
console.log(x,num)