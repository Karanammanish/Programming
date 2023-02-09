//Data type in arrays

let names = ['Manish','Navin','Kiran']; //string 
names[3] = 'Pooja'  //Just need to add index number where you want to add
names.push('Munni') 

console.log(names)

let data = ['Navin', 5 , {tech:'JS'},function(){console.log("Hello World");}];
data[3](); //Way to call function (go the index number and call function)