//data structure = SET
//array allow doblicate values
//set was introduce in ECMA Script 6{ES6}
/*set is the data where value is unique
It is un-order list */

let nums = new Set(); //we have ten char but it saves only 6?

console.log(nums) //Set doesnot have repeated value

//How to add to set

nums.add(3);
nums.add(4);
nums.add(3);
nums.add("manish");
nums.add("nikhil");
nums.add("pooja");
console.log(nums)

for (const n of nums) {
    console.log(n);
}

nums.forEach((value , value1 , nums) => {
    console.log(value,value1,nums) //as you can see value and value1 are same
})

//has() pass the value to search it will say true or false
console.log(nums.has(2));
console.log(nums.has("manish"));