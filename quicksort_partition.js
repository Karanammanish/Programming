function quickSort(arr)
{
    let n = arr.length;
    let p =arr[0];
    let a = [p];
    for(let i = 1; i < n ;i++)
    {
        if(arr[i] >= p)
        {
            a.push(arr[i]);
        }
        else
        {
            a.unshift(arr[i]);
        }
    }
    return(a);
}

let arr = [4,5,3,7,2];
let hi = quickSort(arr);
console.log(hi);