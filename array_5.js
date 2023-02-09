//Destructure Array

let nums = [5,7,1,4];
console.log(nums);

let [a,b,,d] = nums;//This way we can arrange the element

console.log(d);

//What if you can to not save c then just keep it empty like above.

//swaping the number in JS is every easy compare to other language

let x = 4;
let y = 99;
console.log(y);
[x,y] = [y,x]; //So we can swap like that
console.log(y);

//Split Function in array

let names = "My name is Manish Reddy";
console.log(names);//what to do if we want in array method

names = "My name is Manish Reddy".split(' ');//So split on base of charcter
console.log(names);

let [q,w,,...t] = names; //...t will save the words known as rest of the words(...)
console.log(t);