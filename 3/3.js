/*let word = "Manish";
let l = word.length;  {way to write the length of the word}
console.log(l)
var hero = '' 
console.log(word[0])
for(let i = 5 ; i >= 0; i--)
{
    hero = hero + word[i];    
}
console.log(hero)

That how we reverse the name
*/

function greet()
{
    var letter = document.getElementById("word").value; //var should be used
    console.log(letter);
    let j = letter.length;
    console.log(j);
    var word = '';
    for (let i = j -1 ; i>=0 ; i--)
    {
        word = word + letter[i];
    }
    console.log(word);
    document.getElementById("help").innerHTML = word
}