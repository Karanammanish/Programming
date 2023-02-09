function birthday(s, d, m)
{
    let n = s.length;
    let sum = 0;
    for (let i =0 ; i< n; i++)
    {
        let a = s[i];
        if (i+m < n)
        {
            for(let j = i+1 ; j < i+m; j++)
            {
                a = a +s[j];
                if(a === d)
                {
                    sum = sum +1;
                }
            }
        }
        else if(m === 1)
        {
            if(a === d)
            {
                sum = sum 1;
            }
        }
    }
    return sum;
}


let s = [2,2,1,3,2]
let d = 4;
m = 2;
let result = birthday(s,d,m);
console.log(result);