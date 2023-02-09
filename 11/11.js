function inclusive()
{
    n1 = document.getElementById("num1").value;
    n1 = Number(n1);
    n2 = document.getElementById("num2").value;
    n2 = Number(n2);
    n3 = document.getElementById("num3").value;
    n3 = Number(n3);
    console.log("checking")

    if((n1 > 49 && n1 <100)||(n2 > 49 && n2 <100)||(n3 > 49 && n3 <100))
    {
        document.getElementById("true").innerHTML = "True";
    }
    else
    {
        document.getElementById("true").innerHTML = "False";
    }
}