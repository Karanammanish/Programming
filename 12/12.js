/*let n = 12;
n = Math.abs(n);
console.log(n);
To convert neg to pos*/

function near()
{
    n1 = document.getElementById("num1").value;
    n1 = Number(n1);
    n2 = document.getElementById("num2").value;
    n2 = Number(n2);
    let x1 = 100 - n1;
    x1 = Math.abs(x1);
    console.log(x1);
    x2 = 100 - n2;
    x2 = Math.abs(x2);
    console.log(x2);
    if (x1 === x2)
    {
        document.getElementById("big").innerHTML = "None";
        document.getElementById("small").innerHTML = "other";
        document.getElementById("hi").innerHTML = "Both are equally distance from 100";
    }
    else if (x1 < x2)
    {
        document.getElementById("big").innerHTML = n1;
        document.getElementById("small").innerHTML = n2;
        document.getElementById("hi").innerHTML = " ";
    }
    else
    {
        document.getElementById("big").innerHTML = n2;
        document.getElementById("small").innerHTML = n1;
        document.getElementById("hi").innerHTML = " ";
    }
}