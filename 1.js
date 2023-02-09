function mutiply()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 * num2;
    console.log(num1 * num2)
}
function divide()
{
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 / num2;
    console.log(num1 / num2) 
}

/* Their were two problem which I faced in this program
1.In in html I used "text" in input instead of "number"
2.path given is (../desktop/js/1.js)
*/