/* What is complex object
it is object in the object 
*/

let alien = {
    name: 'manish',
    tech: 'JS',
    laptop : {
        cpu : 'i7' , 
        ram : 4 ,
        brand : 'Acer',
    }
}    

console.log(alien)
//Note ", operator is must" and always use{''} for the letters

//How to get brand
console.log(alien.laptop.brand)

//string have length of the value
//. operator should be used
console.log(alien.laptop.brand.length)


//if the key is there or not "if you dont know" then use{?"question mark next to that value"}

//delete is used to delete the object

delete alien.laptop.brand //Always give the full path with "dot operator"
console.log(alien.laptop)