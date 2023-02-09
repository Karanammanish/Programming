function Py()
{
    l = document.getElementById("word").value;
    document.getElementById("hi").innerHTML = l;
    console.log(l)
    var a = '';
    let x = l.length;
    console.log(x);
    for(let i = 0; i < 2; i++)
    {
        a = a + l[i];
    }
    console.log(a);
    if(a === "Py")
    {
        document.getElementById("hello").innerHTML = l;
    }
    else
    {
        l = l + "Py";
        document.getElementById("hello").innerHTML = l;
    }
}

//Note - head should be closed before body starts.