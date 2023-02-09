//Method to use in array

//First one "PUSH"

let data = [5,7,6,1];
console.log(data.push(2)); //It will give length of the array

//Second one "POP"
//Need to learn stack
//It remove the last element in the Array{push all the element to right}

console.log(data.pop()); //it will give the print of which is removed

//THird one "SHIFT"
//Shift remove the data from the start{push all the element to left }

console.log(data.shift());

//UNSHIFT
//it adds the element

console.log(data.unshift(0));//2 will add at start
//only problem is that it it will change the index number
//So we should use {Push and Pop}

//SPLICE
//it will breakdown the array from that index number

data.push(8);
data.push(2);

console.log(data.splice(3));

//what if you want to remove just one element
data.push(8);
data.push(2);
data.push(6);
console.log(data);
console.log("Before the remove")
console.log(data.splice(3,1));//"," after that u can specify how element you want to remove
console.log("After the remove")
console.log(data);

//splice(3,1) => specify index and number of element to delete
//splice(3,1,11,15) => 11 and 15 will be add in the place where the before one are deleted

//See documentation