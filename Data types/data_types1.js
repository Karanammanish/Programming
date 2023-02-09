console.log("most important part is data")
console.log("so we need to know type of data")
console.log("// 'it is used for comment'")
let num = 8    // number
let data = "manish"  //string
// so these are data type 
/*In JS there are two tpye of data tpyes
1. Primitive{number,string,boolean,null,undefined,symbol}
2. Object{not the above it is object}*/
// decimal number is floating point so by default all the number have floating number.
//Lets learn of type of {it says about the data type of the variable}
console.log(typeof num)
console.log(typeof data) 
//we can use base number too like hexadecimal etc.
// to use hexa we need to use '0x'then the number
num = 0xff
console.log(num)
// 'e' is used to expercise the floating point number
num = 1.5e11
console.log(num)
//to make the number better readable we use '_'eg 100_00_000
//it work like comma in real world
num = 5/0
console.log(num)
console.log(typeof num)
let num1 = 101001011001010101010101010101010101101010203020202010202n
console.log(num1)
console.log(num1 + 2n)
//BigInt and other type cant we combined