function insertionSort1(n, arr) {
    // Write your code here
   let b = arr[n-1];
    for(let i = n-2; i>=0;i--)
        {
            if(arr[i]>b)
                {
                    arr[i+1]=arr[i]
                }
            else
                {
                    arr[i+1] = b;
                }
            console.log(arr.join(" "))
        }
}
let s ="ssadda"
let n = s.length
let str1 = s.split("")
console.log(str1) 