function mul()
{
    num = document.getElementById("num").value;
    num = Number(num);
    if (num % 3 === 0 || num % 7 === 0)
    {
        document.getElementById("ans").innerHTML = "MULTIPLY"
    }
    else
    {
        document.getElementById("ans").innerHTML = "NOT MULTIPLE"
    }
}

function reset()
{
    document.getElementById("ans").innerHTML = ""
}