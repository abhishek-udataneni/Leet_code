let removeElement = (arr,val) => {
    let i = 0;
    for(let j=0;j<arr.length;j++){
        if(arr[j] !== val){
            arr[i] = arr[j];
            i++
        }
    }
    return i;
}

console.log(removeElement([1,1,1,2,3,4,4,4],4))