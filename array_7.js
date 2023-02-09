let nums = [45,56,43,12,67,09];

let result = nums.filter(n => n%2 ===0 ) //Both the n are different 
    .map( n => n* 2)
    .reduce((a,b) => a+b)// if using reducing dont use foreach
    console.log(result);
    /*.forEach((n) =>{
        console.log(n);  
    });*/

//now we only need even number then we filter before hand only
//Filter() will only return the value if it is true
//NOTE dont use ; after .filter

//map(): It will take the value and give the value
//reduce(): will reduce o=to one single value