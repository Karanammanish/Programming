function greet(u)
//is this "user and down "user same
//of course not
//one created instead the greet function and another outside 
{
    let num = 5; //local variable
    console.log(num);
    return `Hello ${u}`;
}

/*console.log(num);
We will get the error that the num is not defined*/
let user = "Manish";
let str = greet(user);
console.log(str);

//now the 'u' which is created inside the function so it is called local user

//whereas the "user" which we created is called the global variable

/*So we can conlude that the global variable can be used anywhere.
Whereas the local variable can be used only in the function*/

function add(num1,num2,num3 = 10)//these are parameters
{
    //console.log(num1);
    //console.log(num2);
    //console.log(num3);
    return num1 + num2 + num3;
}

let result = add(12,12,6); //these are argument
console.log(result);

//now let see what will happen if i pass only two argument

result = add(5,6); // so we can give the defualt value to num3(eg 10)
console.log(result); //we got NaN