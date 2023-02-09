function java()
{
    w = document.getElementById("w1").value;
    var x = '';
    n = w.length;
    document.getElementById("ask").innerHTML = w;
    document.getElementById("a").innerHTML = w;
    if(n >= 4)
    {
        for(let i = 0 ; i < 4; i++)
        {
            x = x + w[i];
        }
        console.log(x);    
        if(x === "Java" || x === "java")
        {
            document.getElementById("ans").innerHTML = "true";
            document.getElementById("i").innerHTML = "";  
        }
        else
        {
            document.getElementById("ans").innerHTML = "False";
            document.getElementById("i").innerHTML = "";
        }
    }
    else
    {
        console.log("word given is smaller compare to Java");
        document.getElementById("ans").innerHTML = "False";
        document.getElementById("i").innerHTML = "Word is smaller to compare"
    }
}