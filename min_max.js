function max(arr)
{
    let n = arr.length;
    let minValue = arr[0];
    let maxValue = arr[0];
    for ( let i = 1 ; i < n ; i++)
    {
        if (arr[i] < minValue)
        {
            //console.log(arr[i])
            minValue = arr[i];
        }
        else
        {
            maxValue = arr[i];
        }
    }
    let max = 0;
    let min = 0;
    //console.log(minValue,maxValue)
    for(let i = 0 ; i < n ; i++)
    {
        if(arr[i] < maxValue)
        {
            min = min + arr[i];
            //console.log(max);
        }
    }
    //console.log(min)
    let a = [];
    a.push(min);
    for(let i = 0 ; i < n ; i++)
    {
        if(arr[i] > minValue)
        {
            max = max + arr[i];
            //console.log(max);
        }
    }
    //console.log(max)
    a.push(max);
    //console.log(a);
    console.log(min,max)
}

let a = [1,4,2,5,5]
 max(a);