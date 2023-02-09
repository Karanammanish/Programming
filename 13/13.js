function check()
{
    n1 = document.getElementById("num1").value;
    n1 = Number(n1);
    n2 = document.getElementById("num2").value;
    n2 = Number(n2);
    if((n1%7 === 0 ||n1%11 === 0) && (n2%11 ===0 || n2%7 === 0))
    {
        document.getElementById("seven").innerHTML = " ";
        document.getElementById("eleven").innerHTML = " ";
        document.getElementById("ans").innerHTML = "Both are ";
    }
    else if (n1%7 === 0||n1%11 === 0)
    {
        document.getElementById("seven").innerHTML = "True"; 
        document.getElementById("eleven").innerHTML = "False";
        document.getElementById("ans").innerHTML = " ";
    }
    else if (n2%7 === 0 || n2%11 === 0)
    {
        document.getElementById("seven").innerHTML = "False";
        document.getElementById("eleven").innerHTML = "True";
        document.getElementById("ans").innerHTML = " ";
    }
    else
    {
        document.getElementById("seven").innerHTML = "False";
        document.getElementById("eleven").innerHTML = "False";
        document.getElementById("ans").innerHTML = "not a multiple at-all";
    }
}

function clear()
{
    document.getElementById("seven").innerHTML = " ";
    document.getElementById("eleven").innerHTML = " ";
    document.getElementById("ans").innerHTML = " ";
}