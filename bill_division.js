function bonAppetit(bill, k, b) 
{
    // Write your code here
    let n = bill.length;
    let sum = 0;
    for(let i =0 ; i < n ; i++) 
    {
        if(bill[i] != bill[k])
         sum = sum + bill[i]; 
         console.log(sum); 
    }
    sum = sum / 2;
    console.log(sum);
    if (sum != b)
    console.log(b - sum);
    else
    console.log("Bon Appetit")
}


bill = [3,10,2,9];
k = 1;
b = 12;
bonAppetit(bill,k,b)

