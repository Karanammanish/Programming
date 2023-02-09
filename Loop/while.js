//while
// three type of loop {while , do while , for}
//RESULT - donot repeat yourself
/*THree main thing in the loop
1.Initialization
2.Conditional statement
3. increment 
*/


//repeat this statement 5 time
let i = 1; // intialization

while(i<=5)  //conditional statement
{
    console.log("HI");
    i++;  //increment
}
// See no error as the system while hang

console.log(i)

//while loop check for the condition first then only it goes loop
//do whille first go in the loop then check the condition

i = 10;
do{
    console.log("hi",i)
    i++;
}while(i<=5)  //see typing 1 inside of i