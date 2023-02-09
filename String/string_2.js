function Indexof()
{
    l = document.getElementById("search").innerHTML; //use innerHTML here
    console.log(l + "Hello");
    let a = l.indexOf("locate")//It will locate the word from the start
    console.log(a);
    a = l.lastIndexOf("locate") //it will start from the last of the string
    console.log(a);
}

function Search()
{
    l = document.getElementById("search").innerText;
    let a = l.search("locate");
    console.log(a);
    document.getElementById("demo").innerHTML = a;
}

//Similary we have matchoff() startwith() etc