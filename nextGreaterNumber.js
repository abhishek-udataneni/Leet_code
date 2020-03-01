function nextGreatestNumber(n){
    let digitArray = n.toString().split('');
    let pivotIndex = null
    for(let i=digitArray.length -1;i>-1;i--){
        if(digitArray[i-1] < digitArray[i]){
            pivotIndex = i-1;
            break;
        }
    }
    // let rightArray = digitArray.splice(pivotIndex+1);
    
    let smallestNumberIndex = pivotIndex+1;
    for (let i = pivotIndex+1; i < digitArray.length; i++) {
        if(digitArray[pivotIndex] < digitArray[i]){
            if(digitArray[i] < digitArray[smallestNumberIndex]){
                smallestNumberIndex = i
            }
        }
    }

    let temp = digitArray[pivotIndex];
    digitArray[pivotIndex] = digitArray[smallestNumberIndex];
    digitArray[smallestNumberIndex] = temp
    let rightArray = digitArray.slice(pivotIndex+1).sort((a,b) => (a-b));
    let leftArray = digitArray.slice(0,pivotIndex+1)
    return [...leftArray,...rightArray].join("");
}

console.log(nextGreatestNumber(122));