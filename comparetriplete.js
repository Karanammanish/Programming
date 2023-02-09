function compare(a,b)
{
    let x = 0;//points to alice
    let y = 0;//points to bob
    let ar = [];
    for(let i = 0 ; i<3;i++)
    {
        if(a[i]>b[i])
        {
            x = x+1;
        }
        else if(a[i]<b[i])
        {
            y = y+1;
        }

    }
    ar.push(x);
    ar.push(y);
    return ar;
}


let a =[5,6,7];
let b = [3,6,10];
let hi = compare(a,b);
console.log(hi);