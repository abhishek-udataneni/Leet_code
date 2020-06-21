// Longest subarray with given sum 
function longestSubarray(arr,sum){
let prefix_sum = 0;
let longestSubarray = 0;
let map = new Map();
for (let i = 0; i < arr.length; i++) {
    prefix_sum = prefix_sum + arr[i];
    if(sum === prefix_sum){
        longestSubarray = Math.max(longestSubarray, i+1)
    }else if (map.has(prefix_sum - sum)){
        longestSubarray = Math.max(i - map.get(prefix_sum - sum), longestSubarray) 
    }else {
    if(!map.has(prefix_sum))  map.set(prefix_sum, i)
    }
}
return longestSubarray;
};

let arr = [8, 3, 1, 5, -6, 6, 2, 2]
console.log(longestSubarray(arr,4))