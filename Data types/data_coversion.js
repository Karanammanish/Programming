/*Type conversion and Coercion 
What is coercion?
If you have string and a number it convert into another format
*/
let num = 6

console.log(num, typeof num);

/*let num1 = string(6)
got error dont know why
It is because of String capital S
We can use "Number" to convert to number
To convert into boolean "Boolean"*/
let num1 = String(6)

console.log(num1, typeof num1);

let x
console.log(x, typeof x);

x =8 
console.log(x, typeof x);

x = x + " "
console.log(x, typeof x);

x = x -2
console.log(x, typeof x);

//"!" means in boolean is not gate
x = !x 
//"0" it will give true in not gate
console.log(x, typeof x);

// in "+" number and string it convert into string
//in "-" numbe and string it convert into number

// Now we will see one thing
let z = 6
let y = 6
y = y + " "
y = y + 2
console.log(y)

z = z + " "
z = +z + 2
console.log(z)
// As you can see the diffrence "+z" convert string into number

//parseInt convert the string into number
x = "123 Navin"
console.log(x)
x = parseInt(x)
console.log(x)

y = parseInt("number 123")
console.log(y)

//So we can see it only convert if number is at the start of the program