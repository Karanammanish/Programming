function even()
{
    w = document.getElementById("enter").value;
    document.getElementById("w").innerHTML = w;
    let x = w.length;
    console.log(x , w);
    document.getElementById("l").innerHTML = x;
    if(x%2 === 0)
    {
        document.getElementById("e").innerHTML = "even";
        let word = w.substr(0,x/2);
        console.log(word);
        document.getElementById("output").innerHTML = word;
    }
    else
    {
        document.getElementById("e").innerHTML = "odd";
        document.getElementById("output").innerHTML = "No need to do as it is odd"
    }
}

//main mistake here is i didnot gave which string to substr