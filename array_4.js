//for-of loop

let nums = [];
nums[0] = 0;
nums[99] = 12;

//How make big array
//What we want is for loop to fetch the value of the each element in the array


for (let n of nums) //n stores one data a type
{
    console.log(n);
}

//Here we can use for in also but only it will give index value; 