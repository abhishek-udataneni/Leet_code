function propheous(arr,start = 0,k){
    let n = arr.length;
    if(arr.length === 1){
        return arr[0]
    };
    arr.splice((start + k-1)%n,1);
    start = (start + k-1)%n
    return propheous(arr,start,k)
};

console.log(propheous([1,2,3,4,5],0,3))