w = "this is my name is manish";
word = w.split(" ");
console.log(word);
//let make to uppercase and lowercase

//toUpperCase()
word[1] = word[1].toUpperCase();
console.log(word[1]);

//toLowerCase()
word[1] = word[1].toLowerCase();
console.log(word[1]);

x = word.length;
console.log(x)

//for each
word.forEach((n) => {
    console.log(n);    
});

for(let i = 0  ; i < x ; i++)
{
    console.log(word[i]);
    word[i] = word[i][0].toUpperCase() + word[i].substr(1);  //from:number to length:number
}

w = word.join(" ");
console.log(w);