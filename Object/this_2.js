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

//laptop.getConfig();

let laptop1 = {
    cpu:'i9',  //cpu here is property of the object not a simple variable
    ram:'8',
    brand:'HP',

    getConfig: function()  
    {
        //console.log(cpu);  {not getting printed (cpu)
        console.log(laptop1.cpu)  //way to represent but there is the problem
    }
}

//laptop1.getConfig();



if (laptop.cpu > laptop1.cpu)
{
    console.log(laptop);
}
else
{
    console.log(laptop1);
}