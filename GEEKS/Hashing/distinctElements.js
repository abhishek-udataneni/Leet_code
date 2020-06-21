function distinctElements(arr) {
    // let set = new Set();
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        let distinct = true;
        for (j = i-1; j >= 0; j--) {
            if (arr[i] === arr[j]) {
                distinct = false;
                break;
            }
        }
        if(distinct) count++;
    };
    return count;
}
// let arr = [15,12,13,12,13,18,19];
let arr = [10,20,30];
// console.log(distinctElements(arr)); 

function distinctElementsHashSet() {
    let set = new Set();
    for(let i=0;i< arr.length;i++){
        // if(!set.has(arr[i])){
            set.add(arr[i])
        // }
    }
    return set.size;
}


console.log(distinctElementsHashSet(arr)); 

