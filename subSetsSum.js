
function subsetRequiredSum (arr,requiredSum){
let count = 0;
function subsetsSum(arr,curr = [], index = 0) {
    if(index === arr.length) {
        let sum = curr.reduce((acc, next) => {
            acc = acc + next
            return acc
        },0);
        if(sum === requiredSum) count++
        return};
    subsetsSum(arr,curr,index + 1);
    subsetsSum(arr, [...curr,arr[index]],index + 1);
}
subsetsSum(arr,[],0);
return count;
}

console.log(subsetRequiredSum([10,20,15],0))