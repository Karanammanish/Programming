let alien = {
    name: 'manish',
    tech: 'JS',
    laptop : {
        cpu : 'i7' , 
        ram : 4 ,
        brand : 'Acer',
    }
} 

//Special type of FOR LOOP which is "For in loop"

for (let key in alien)  //Here we use in to see in the object
{
    //console.log(key , alien.key); so we get all the key
    //Got the wrong answer because the dot operator is path function
    //console.log(key , alien[key]);
    console.log(key)
    //Whereas [] bracket is used for key
    let y = key

    if (y === "laptop")
    {
        console.log(y)
        for (key in alien.laptop) //Tried many way but this was the best out of it
        {
            console.log(key)
        }
    }
}
