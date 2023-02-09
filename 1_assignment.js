//Question - add only positive number
add =(num1,num2) =>
{
    if (num1 < 0 || num2 < 0)
    {
        console.log("number is negitive");
        return 0;
    }
    else
    {
        console.log("numbers are postive");
        return num1 + num2;
    }
}

let result = add(5,-6);
console.log(result);