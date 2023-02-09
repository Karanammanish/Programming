function plusMinus(arr)
{
    let n = arr.length;
    let p = 0;//postive 
    let neg = 0;//negative
    let z = 0;//zero
    for(let i = 0; i < n; i++)
    {
        if(arr[i] != 0)
        {
            if(arr[i]>0)
            {
                p = p + 1;
            }
            else
            {
                neg = neg +1;
            }
        }
        else
        {
            z = z+1
        }
    }
    p = (p/n).toFixed(6) //To fix till six decimal
    neg = (neg/n).toFixed(6)
    z = (z/n).toFixed(6)
    console.log(p);
    console.log(neg);
    console.log(z);
}

let arr = [-4,3,-9,0,4,1]
plusMinus(arr);