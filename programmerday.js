function program(year)
{
    if(year > 1918 && year<= 2700)
    {
        if(year%400 === 0 || (year%4 === 0 && year%100 != 0))
        {
            console.log(year,1);
            return('12.09.'+ String(year));
        }    
        else
        {
            console.log(year,2)
            return('13.09.' + String(year));
        }    
    }
    if(year >= 1700 && year < 1918)
        {
            console.log(year)
            if(year%4 === 0)
            {
                console.log(year);
                return('12.09.' + String(year));
            }   
            else
            {
                console.log(year);
                return('13.09.'+ String(year));
            }    
        }
    if(year === 1918)
    {
        return('26.09.' + String(year));
    }
}

let year = 1800;
result = program(year);
console.log(result);
