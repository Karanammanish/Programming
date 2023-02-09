const s = "abbaa";
result = superReducedString(s);
function superReducedString(s)
{
    let n = s.length;
    console.log(n);
    let a = ''
    let ar =[];
    for (let i = 0; i < n ; i++)
    {
        a = s[i];
        //console.log(a);
        if (a != s[i+1])
        {
            ar.push(a);
            
        }
    }
    console.log(ar);
}