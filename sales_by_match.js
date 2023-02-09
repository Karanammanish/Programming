
let ar = [1,2,3,4,2,5,2,1,6,5];
let n =ar.length;

function sortAndCount(n, ar) {

let sorted = ar.sort((a,b) => a - b);
console.log(ar);

let pair = 0;

for(let i = 0; i < n-1; i++ ) {
//console.log(i)
if(sorted[i] === sorted[i + 1]) {
pair ++;
i += 1;
}
}
return pair;
}


let pair = sortAndCount(n, ar)
console.log(pair)
