//How to add function to the object
//Every Object has two things one is data and behaviour

/*In simple words what you know is wrt
variable and what you do is wrt function
*/

//function is a known of method

let laptop = {
    cpu:'i7',
    ram:'8',
    brand:'Acer',

    greet: function()  //How to mention the function
    {
        console.log("Hello World");
    }
}

laptop.greet();  //As it is inside the object