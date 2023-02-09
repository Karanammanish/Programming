function odd()
{
    word = document.getElementById("word").value;
    document.getElementById("s").innerHTML = word;
    let x = word.length;
    document.getElementById("l").innerHTML = x;
    console.log(x);
    if(x >= 3)
    {
        if(x%2 === 1)
        {
            console.log(w);
            document.getElementById("o").innerHTML = "Odd";
            var w = " "
            for(i = ((x-1)/2)-1 ; i <= (x+1)/2 ; i++)
            {
                w = w + word[i];
            }    
            document.getElementById("output").innerHTML = w;
        }
        else
        {
            document.getElementById("o").innerHTML = "Even";
            document.getElementById("output").innerHTML = "It is even so no answer"
        }
    }
    else
    {
        document.getElementById("o").innerHTML = "  ";
        document.getElementById("output").innerHTML = "No answer";
    }    
}

/*let word = "Poojakarana";
x = word.length;
console.log(x);
console.log((x-1)/2);
console.log((x+1)/2);
console.log(word[2]);
var w = " "
for(i = ((x-1)/2)-1 ; i <= (x+1)/2 ; i++)
{
    w = w + word[i];
}
console.log(w);*/