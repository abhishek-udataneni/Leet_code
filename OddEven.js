function OddEven(arr){
    let i = 0;
    let n = arr.length;
    function isEven(a){
        return a%2 === 0 ;
    }
    max = 0;
    count = 1;
    while(i < n-1){
        if(isEven(arr[i]) === !isEven(arr[i+1])){
            count++;
        }else{
            max = Math.max(count,max);
            count = 1;
        }
        i++;
    }
    max = Math.max(count,max);
    // max = Math.max(count,max);
    return max;
};
console.log(OddEven([1,2,3,4]))