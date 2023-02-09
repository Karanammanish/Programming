function c()
{
    //f ---> c
    f = document.getElementById("temp").value;
    let t = f - 32 ;
    console.log(t)
    let x = t / 9;
    console.log(5 * x);
    document.getElementById("fer").innerHTML = f;
    document.getElementById("cel").innerHTML = 5 * x;
}

function f()
{
    f = document.getElementById("temp").value;
    let t = f * 9 / 5;
    console.log(t)
    x = t + 32;
    console.log(x);
    document.getElementById("cel").innerHTML = f;
    document.getElementById("fer").innerHTML = x
}
/* Mistakes
1. Forgot to write ".value" so the value was not taking
2. Forgot to use double quote in getElementById
3. document.getElementById("").innerHTML{as it is in inner html} = 
*/