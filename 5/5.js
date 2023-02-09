function fun()
{
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    console.log(typeof (n1));
    //why the number is coming as string
    n1 = Number(n1);
    n2 = Number(n2);
    let sum = n1 + n2;
    console.log(sum);
    if (n1 === 50 || n2 === 50 || sum ===50)
    {
        document.getElementById("ans").innerHTML = "TRUE";
    }
    else
    {
        document.getElementById("ans").innerHTML = "FALSE"
    }
}