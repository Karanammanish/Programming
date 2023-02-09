function sum()
{
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    //console.log(typeof (n1))
    n1 = Number(n1);
    //console.log(typeof (n1));
    n2 = Number(n2);
    let ans = n1 + n2 ;
    if (n1 === n2)
    {
        document.getElementById("ans").innerHTML = 3 * ans;
    }
    else
    {
        document.getElementById("ans").innerHTML =ans;
    }
    console.log(ans);
}
//Whenever you the function is not defined it is due to not added script tag