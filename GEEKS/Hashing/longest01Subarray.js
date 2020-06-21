function longestSubarray(arr){
    let maxNumber = 0
    for (let i = 0; i < arr.length; i++) {
        let zeros = 0;
        let ones = 0;
        for (let j = i; j < arr.length; j++) {
            if(arr[j] === 1){
                ones = ones + 1;
            }else {
                zeros = zeros + 1;
            }
            if(zeros === ones){
                maxNumber = Math.max(2*zeros,maxNumber);
            }
        }
    }

    return maxNumber;
}

let arr = [1,1,1,1,1,0,0,0]
console.log(longestSubarray(arr))