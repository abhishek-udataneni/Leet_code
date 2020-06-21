// function twoSum(array,sum) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if(array[i] + array[j] === sum){
//                 return [i,j]
//             }
//         }
//     }
//     return false;
// }

function twoSum(array,sum){
    let set = new Set();
    for(let i = 0; i < array.length; i++){
        if(set.has(sum-array[i])){
            return true;
        }else {
            set.add(array[i]);
        }
    }
    return false;
}
console.log(twoSum([1,2,3],3))