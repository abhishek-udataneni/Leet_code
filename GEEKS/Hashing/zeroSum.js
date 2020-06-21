// function zeroSum(arr,req) {
//     for(let i = 0; i < arr.length; i++){
//         let sum = 0;
//         for (let j = i; j < arr.length; j++) {
//             sum = sum + arr[j];
//             if(sum === req ) return true;
//         }
//     }
//     return false;
// }

function zeroSum(arr,sum) {
let prefix_array = [];
let set = new Set();
prefix_array[0] = arr[0];
let max = 0;
for (let i = 1; i < arr.length; i++) {
    prefix_array[i] = prefix_array[i-1] + arr[i]; 
}
for (let i = 0; i < prefix_array.length; i++) {
    if(sum === prefix_array[i]){
        max = Math.max(max, i+1);
    }
    else if(set.has(prefix_array[i] - sum)){
        console.log(prefix_array[i])
        return true;
    } else {
        set.add(prefix_array[i])
    }
}
return false;
}
console.log(zeroSum([1,2,3,-3],5));