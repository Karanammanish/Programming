function capital()
{
    w = document.getElementById("word").value;
    console.log(w);
    word = w.split(" ");
    console.log(word)
    word.forEach((l) => {
        console.log(l);
    });
    for(i = 0 , x = word.length; i < x; i++)
    {
        word[i] = word[i][0].toUpperCase() + word[i].substr(1);
        console.log(word[i]);
    }
    document.getElementById("w").innerHTML = w;
    l = word.join(" ");
    console.log("Output"+ " " + l)
    document.getElementById("v").innerHTML = l;
}


/*let word = ["manish","name"];
console.log(word[1]);
word[0] = word[0][0].toUpperCase();
console.log(word[0]);


let text = "Hello world!";
let result = text.substr(2);//it delete whatever is before it
*/