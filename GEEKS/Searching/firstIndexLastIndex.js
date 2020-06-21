function firstIndexLastIndex(arr,low,high,element) {
    function firstIndex(arr,low,high,element){
        let mid = Math.floor((low + high)/2);
        if(low > high) return -1;
        if(arr[mid] === element && (mid === 0 || arr[mid] !== arr[mid-1])) return mid;
        if (arr[mid] < element) {
            low = mid + 1;
            return firstIndex(arr, low, high, element);
        } else {
            high = mid - 1;
            return firstIndex(arr, low, high, element)
        }      
    };
    function lastIndex(arr,low,high,element){
        let mid = Math.floor((low + high)/2);
        if(low > high) return -1;
        if(arr[mid] === element && (mid === arr.length - 1  || arr[mid] !== arr[mid+1])) return mid;
        if(element < arr[mid]){
            high = mid - 1;
            return lastIndex(arr,low,high,element);
        }else {
            low = mid + 1;
            return lastIndex(arr,low,high,element);
        }
    }

    return lastIndex(arr,low,high,element) - firstIndex(arr,low,high,element) + 1
}
console.log(firstIndexLastIndex([0,1,2,3,4,5,6,6,6],0,8,6));
