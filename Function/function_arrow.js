//Arrow function "=>" It is used for removing key words

greet = () =>   //Here we reduce the function code
{
    console.log("Hello world");
    return 1;
}

console.log(greet());

// => function tells the compiler about general key words

let add = (num1,num2) => num1 + num2;

let result = add(5,6);

console.log(result); 

/* in arrow function
1. one line no need of {}
2. no need of return key word
*/