//switch 
/* mon -- 7am
tue - thrus -- 4am
fri -- 9am
sat - sun -- 8am*/
let day = "fri"
if (day === "mon"){
    console.log("7am");
}
else if (day =="tue" || day =="wed" || day =="thur"){
    console.log("4am")
}
else if (day =="sat" || day =="sun"){
    console.log("8am")
}
else{
    console.log("9am")
}

//var =="A" || "B" will always give the ans true so I got the wrong answer.

//switch the variable is 
//Use break always
//default is must
day = "fri"
switch (day){
    case 'mon':
        console.log("7am");
        break;
    case 'tue':
        console.log("4am");
        break;    
    case 'wed':
        console.log("4am");
        break; 
   case 'thur':
        console.log("4am");
        break;
   case 'fri':
        console.log("9am");
    case 'sat':
        console.log("8am");
        break; 
   case 'sun':
        console.log("8am");
        break;      
                       
}