a = [22 , 23 , 34 , 33 , 21];
console.log(a[1]);
x = a.length;
console.log(x);

//lets check

if(a[0] < a[x-1])
{
    let v = a[x-1];
    for (i = 0 ; i < x ; i++)
    {
        a.pop();
    }
    console.log(a);
    for (i = 0 ; i < x ; i++)
    {
        a.push(v);   
    }    
    console.log(a);
}
else
{
    v = a[0];
    for (i = 0 ; i < x ; i++)
    {
        a.pop();
    }
    console.log(a);
    for (i = 0 ; i < x ; i++)
    {
        a.push(v);   
    }    
    console.log(a);
}