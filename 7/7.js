function check()
{
    num1 = document.getElementById("num1").value;
    num1 = Number(num1);
    num2 = document.getElementById("num2").value;
    num2 = Number(num2);
    console.log("Checking")
    if ( num1 < 0 && num2 > 0)
    {
        console.log("hi")
        console.log("yes");
        document.getElementById("ans").innerHTML = "yes"
    }
    else if (num2 < 0 && num1 > 0)
    {
        console.log("hello")
        console.log("yes");
        document.getElementById("ans").innerHTML = "yes";
    } else 
    {
        console.log("no");
        document.getElementById("ans").innerHTML = "no";    
    }

}

function clear()
{
    document.getElementById("ans").innerHTML = '';
    console.log("Clearing");
}