function Remove()
{
    l = document.getElementById("word").value;
    n = document.getElementById("num").value;
    n = Number(n);
    n = n -1;
    document.getElementById("war").innerHTML = l;
    document.getElementById("num1").innerHTML = n;
    console.log(n);
    console.log(l);
    let x = l.length;
    console.log(x);
    if(n < x -1)
    {
        console.log("postion is than total no. of letter");
        rem(l,n,x); //way to function
    }
    else
    {
        console.log("cannot be done");
        document.getElementById("war1").innerHTML = l;
    }
}

function rem(l,n,x)
{
    var j = '';
    var k = '';
    for (let i = 0; i < n; i++)
    {
        j = j + l[i];
    }
    console.log(j)
    for (i = n + 1; i < x; i++)
    {
        k = k + l[i];
    }
    console.log(k);
    var output = j + k;
    console.log("the delete letter is" + '' + l[n]);
    document.getElementById("war1").innerHTML = output;
}

//inner function remember the outer variable