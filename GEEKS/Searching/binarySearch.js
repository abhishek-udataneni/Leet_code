function binarySearch(arr,low,high,element){
    let mid = Math.floor((low + high)/2);
    if(low > high) return -1;
    if(arr[mid] === element) return mid;
    if(arr[mid] >= element){
        high = mid - 1;
        return binarySearch(arr,low,high,element);
    };
    if(arr[mid] < element){
        low = mid + 1;
        return binarySearch(arr,low,high,element);
    };
};

function binarySearchIterative(arr,ele){
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;
    while(high >= low){
         mid = Math.floor((low + high)/2);
        if(arr[mid] === ele) { 
            return mid 
        } else if(arr[mid] > ele) {
            high = mid - 1;
        }else {
           low = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearchIterative([0,1,2,3,4,5,6],0,5));