//function can be called multiply times

//now how we can return and pass the value in the function
//Multiple return function doesnot work

function greet()
{
    return "hello world";
}

let str = greet();
console.log(str)

//Now we need to pass the user with the name 
//Example user name is manish
//so we answer  is the "hello manish"

function geet(user)
{
    //return "hello user";
    //it is giving user instead of the name
    return `hello ${user}`//use this way
}
let user = "manish";
str = geet(user);
console.log(str);