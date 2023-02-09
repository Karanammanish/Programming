var hello = "This is manish I am Pooja's brother and I like all my sisters";
console.log(hello);
x = hello.length;
console.log(x)
let y = hello.slice(20,25);
console.log(y);
//substring() and substr() are both the same as slice(start,end)
hello = hello.replace("_", "I");
console.log(hello);
hello = hello.replace(/ /g , "-"); // replaced all the whitespaces to dash
console.log(hello);
//hello = hello.replaceALL("-" , " "); //Not working here donot know why
hello = hello.replace(/-/g , " ");
console.log(hello);
let u = hello.toUpperCase();
console.log(u);

//Adding two strings without "+" mark
let text1 = "Manish"
let text2 = "and Pooja are brother and sister"
//Use concat to add two strings
let text3 = text1.concat(" ", text2);
console.log(text3);