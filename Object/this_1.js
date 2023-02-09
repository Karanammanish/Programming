//This keyword
//Variable inside the function it fetches but not the variable outside the function in the "OBJECT"


let laptop = {
    cpu:'i7',  //cpu here is property of the object not a simple variable
    ram:'8',
    brand:'Acer',

    getConfig: function()  
    {
        //console.log(cpu);  {not getting printed (cpu)
        console.log(laptop.cpu)  //way to represent but there is the problem
    }
}

laptop.getConfig();

//Problem is that there may be many laptop so we use "THIS keyword"
let laptop1 = {
    cpu:'i9',  //cpu here is property of the object not a simple variable
    ram:'8',
    brand:'Acer',

    getConfig: function()  
    {
        //console.log(cpu);  {not getting printed (cpu)
        console.log(this.cpu)  //way to represent but there is the problem
    }
}

laptop1.getConfig();
//This is always refer with the current object.