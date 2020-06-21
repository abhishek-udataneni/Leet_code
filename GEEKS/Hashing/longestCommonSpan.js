function longestCommonSpan(a,b) {
    let max = 0;
    for (let i = 0; i < a.length, i < b.length; i++) {
            let count = 0;
            let sum1 = 0;
            let sum2 = 0;
            let j = i;
            while(j < a.length && j< b.length){
                sum1 = sum1 + a[i];
                sum2 = sum2 + b[i];
                if(sum1 === sum2){
                    count++
                }
                j++
            }
        max = Math.max(max,count);
    }
    return max;
}

console.log(longestCommonSpan([1,2,3,4],[1,2,3,4]))