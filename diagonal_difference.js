const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
 ];
 console.log(arr.length);
 const rotateArray = (arr = []) => {
    for (let rowIndex = 0; rowIndex < arr.length; rowIndex += 1) {
       for (let columnIndex = rowIndex + 1; columnIndex < arr.length;
       columnIndex += 1) {
          [
             arr[columnIndex][rowIndex],
             arr[rowIndex][columnIndex],
          ] = [
             arr[rowIndex][columnIndex],
             arr[columnIndex][rowIndex],
          ];
       }
    }
    for (let rowIndex = 0; rowIndex < arr.length; rowIndex += 1) {
       for (let columnIndex = 0; columnIndex < arr.length / 2;
       columnIndex += 1) {
          [
             arr[rowIndex][arr.length - columnIndex - 1],
             arr[rowIndex][columnIndex],
          ] = [
             arr[rowIndex][columnIndex],
             arr[rowIndex][arr.length - columnIndex - 1],
          ];
       }
    }
 };
 rotateArray(arr);
 console.log(arr);
 diagonalDifference(arr)
 function diagonalDifference(arr) {
    // Write your code here
    let n =arr.length;
    let s1 = 0; //let it be left diagonal sum
    let s2 = 0;
    for(let i = 0 ; i < n ; i++)
        {
            for(let j = 0 ; j < n ; j++)
                {
                    if (i === j)
                        {
                            s1 = s1 + arr[i][j];
                        }
                    else if (i + j === n -1)
                        {
                            s2 = s2 + arr[i][j];
                        }
                }
        }   
    if (s1 >= s2)
        {
            return s1 - s2;
        }
    else
        {
            return s2 - s1;
        }

}
let result = 
