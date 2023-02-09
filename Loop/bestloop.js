//No best loop but every loop has its advantages
/*FOR LOOP
--> If we now starting point and ending point go for it
*/

// write all the number which are divisible by "3"

let j = 0
for( let i = 1 ; i<=100;i++)
{
    if(i % 3 === 0)
    {
        //console.log(i)
        //j++
    }
}
//console.log(j)

/*WHILE LOOP
no need to know start point and end point
Sometimes no need of the increment 
Only condition is know
*/

//print the single digit from 123987

let num = 123;
let num2 =0;
while(num>0)
{
    j = num%10;
    console.log(j);
    num = parseInt(num/10); // this will remove all the floating number
    num2 = num2 * 10;
    num2 = num2 + j;
}
console.log(num2)