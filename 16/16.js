function check()
{
    n1 = document.getElementById("num1").value;
    n1 = Number(n1);
    n2 = document.getElementById("num2").value;
    n2 = Number(n2);
    n3 = document.getElementById("num3").value;
    n3 = Number(n3);
    if(n1 === n2 || n1 === n3)
    {
        console.log(1)
        if(n1 === n2 && n1 === n3)
        {
            document.getElementById("ans").innerHTML = 30;
            console.log("All the numbers are same");
        }
        else
        {
            document.getElementById("ans").innerHTML = 40;
            console.log("Two numbers are same");
        }    
    }
    else if(n2 === n3)
    {
        document.getElementById("ans").innerHTML = 40;
        console.log("Two numbers are same");  
    }
    else
    {
        document.getElementById("ans").innerHTML = 20;
        console.log("No numbers are same");
    }
}