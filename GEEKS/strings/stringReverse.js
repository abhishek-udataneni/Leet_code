function stringReverse(str){
    let left = 0;
    let right = str.length - 1;
    let strArr = str.split("")
    while(left < right){
        
        let temp =  strArr[left];

        strArr[left] = strArr[right];
        strArr[right] = temp;
        left++;
        right--;
    }
    return strArr.join("");
}


console.log(stringReverse("abc"));