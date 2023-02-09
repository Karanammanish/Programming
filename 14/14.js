function rev()
{
    word = document.getElementById("word").value;
    let l = word.length;
    console.log(l);
    var a = '';
    for(i = l-1; i >= 0 ; i-- )
    {
        a = a + word[i];
    }
    console.log(a)
    document.getElementById("w").innerHTML = word;
    document.getElementById("a").innerHTML = a;
}