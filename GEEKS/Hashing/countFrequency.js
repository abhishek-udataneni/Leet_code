// function countFrequency(arr) {
//     let map = new Map();
//     for(let i=0; i<arr.length; i++){
//         if(map.has(arr[i])){
//             map.set(arr[i],map.get(arr[i])+1)
//         }else{
//             map.set(arr[i],1)
//         }
//     }
//     return map
// };
// let arr = [15,12,13,12,13,18,19];
// console.log(countFrequency(arr));

// naive
function countFrequency(arr) {
    let obj = {};
    for(let i=0; i<arr.length; i++){
        let alreadyCounted = false;
        for(let j=i-1; j>0; j--){
            if(arr[j] === arr[i]){
                alreadyCounted = true
                break;
            }
        };
        if(alreadyCounted) continue;
        count = 1;
        for(let j=i+1; j<arr.length-1; j++){
            if(arr[i] === arr[j]){
                count++
            }
        }
        obj[arr[i]] = count;
    }
    return obj
};
let arr = [15,12,13,12,13,18,19];
console.log(countFrequency(arr));