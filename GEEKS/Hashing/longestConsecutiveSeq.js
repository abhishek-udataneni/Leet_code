// function longestConsecutiveSeq(arr) {
//     let max = 0;
//      arr = arr.sort((a,b) => a-b);
//     for (let i = 0; i < arr.length; i++) {
//         let count = 1;
//         for (let j = i; j < arr.length; j++) {
//             if(arr[j]+1 === arr[j+1]) {
//                 count++
//             }else {
//                 break;
//             }
//         }
//         max = Math.max(max,count);
//     }
//     return max
// }

// function longestConsecutiveSeq(arr) {
//     let count = 1
//     let max = 0;
//     arr = arr.sort((a,b) => a-b);
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] + 1 ===  arr[i+1]) {
//             count++
//             max = Math.max(count,max)
//         }else {
//             count = 1
//         }
//     }
//     return max;
// }

function longestConsecutiveSeq(arr){
    let set = new Set(arr);
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let curr = arr[i];
        if(!set.has(arr[i]-1)){
            while(set.has(curr)){
                count++;
                curr = curr + 1
            }
        }
        max = Math.max(count, max);
    }
    return max
}
console.log(longestConsecutiveSeq([3,8,4,5,6,7]))