function breakingRecords(scores) {
    // Write your code here
    let max =0;
    let min = 0;
    let maxValue = scores[0];
    let minValue = scores[0];
    let n = scores.length;
    let ar = [];
    for(let i = 1; i<n;i++)
        {
            if(scores[i]>maxValue)
                {
                    maxValue = scores[i];
                    max = max +1;
                }
            else if(scores[i]<minValue)
                {
                    minValue = scores[i];
                    min = min+1;
                }
        }
    ar.push(max);
    ar.push(min);
    return ar;