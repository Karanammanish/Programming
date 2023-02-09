// Different way of creating the object.
//creating multiple object of same type for in case of laptop example laptop1 laptop2 etc
//so we create constructor a function


function Alien(name,tech) //Always give a capital letter to construct function
{
    this.name = name;
    this.tech = tech; //this keyword is used to add the value to the key
}


let alien1 = new Alien('Navin' , 'JS'); //everytime we create a new object (so we need to type{new})

console.log(alien1);