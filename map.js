//Map() also came in ES6

//it is same as array but it will have a key it can be anything

//map is powerfull tool to store data

let map = new Map();

//we are using set instead of add
map.set("Manish","Javascript");
map.set("Pooja","Med");
map.set("Teja","Java");

console.log(map);

//to get the key 
console.log(map.keys());

//using has to see wheather that key is present or not

console.log(map.has("Manish"));

//get the value

console.log(map.get("Pooja"));

//who to get the value of both key and value
for (let [k,v] of map){
    console.log(k,":",v); //set is used to update
}

//do the example where you add new tech to Manish