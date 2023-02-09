//Relational operator
console.log(7 > 6);
//console.log will give output in console of F12
 let data = 6 >= 6;
console.log(data);
let x = 8;
let y = 6;
data = x <= y;
console.log(data)

//Now let see what happens if we use strings to compare
x = "Pen";
y = "Book"
data = x > y;
console.log(data);
//How is it comparing
//It compare with respect to ASCII

//let compare btn string and number
x = "2";
y = 1
data = x > y;
console.log(data);
//It convert the string to number

//Equal to compare "=="
x = "3"
y = 3
data = x == y;
console.log(data)
//In most other language it compare even data type. But in Java it is losely typed

//Triply equal to"==="
x = "3"
y = 3
data = x === y;
console.log(data)
//Always use this in JAVA and JS
