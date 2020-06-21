// function maxHistogramArea(arr) {
//     let maxArea = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let area = arr[i];
//         let count = 1;
//         let min = arr[i];
//         maxArea = Math.max(area, maxArea);
//         for (let j = i+1; j < arr.length; j++) {
//             count = count + 1;
//             min = Math.min(min,arr[j]);
//             maxArea = Math.max(maxArea, min * count);
//         }
//     }
//     return maxArea;
// }
////////////////////////////////////////////////////////////////////////
// function maxHistogramArea(arr) {
//     let maxArea = 0;
//     function findLeastToRight(arr,index){
//         let i;
//         for (i = index + 1; i < arr.length; i++) {
//             if(arr[i] < arr[index]){
//                 return i
//             }
//         }
//         return i;
//     };
//     function findLeastToLeft(arr,index){
//         let i;
//         for(i = index-1; i >= 0; i--){
//             if(arr[i] < arr[index]){
//                 return i;
//             }
//         }
//         return i;
//     };
//     for(let i = 0; i < arr.length; i++) {
//         let rightLeastIndex = findLeastToRight(arr,i);
//         let leftLeastIndex = findLeastToLeft(arr,i);
//         let area = arr[i] + arr[i] * ( i - leftLeastIndex - 1) + arr[i] * (rightLeastIndex - i - 1);
//         maxArea = Math.max(maxArea, area);
//     }
//     return maxArea
// }

////////////////////////////////////////////////////////////////////
// function maxHistogramArea(arr) {
//     let maxArea = 0;
//     function findLeastToRight(arr,index){
//         let i;
//         for (i = index + 1; i < arr.length; i++) {
//             if(arr[i] < arr[index]){
//                 return i
//             }
//         }
//         return i;
//     };
//     function findLeastToLeft(arr,index){
//         let i;
//         for(i = index-1; i >= 0; i--){
//             if(arr[i] < arr[index]){
//                 return i;
//             }
//         }
//         return i;
//     };
//     for(let i = 0; i < arr.length; i++) {
//         let rightLeastIndex = findLeastToRight(arr,i);
//         let leftLeastIndex = findLeastToLeft(arr,i);
//         let area = arr[i] + arr[i] * ( i - leftLeastIndex - 1) + arr[i] * (rightLeastIndex - i - 1);
//         maxArea = Math.max(maxArea, area);
//     }
//     return maxArea
// }
    



/////////////////////////////////////////////////////////////////////////////

// function maxHistogramArea(hist) {
//     let leftArr = [-1];
//     let rightArr = [];
//     let maxArea = 0;
//     function makeleftArr() {
//         let stack = [0];
//         for(let i = 1; i < hist.length; i++){
//             while(stack.length && hist[stack[stack.length - 1]] > hist[i]){
//                 stack.pop();
//             }
//             if(stack.length){
//                 leftArr.push(stack[stack.length - 1])
//             }else {
//                 leftArr.push(-1);
//             }
//             stack.push(i);
//         }
//     };

//     function makerightArr() {
//         rightArr[hist.length -1] = hist.length;
//         let stack = [hist.length -1];
//         for(let i = hist.length - 2; i >= 0; i--){
//             while(stack.length && hist[stack[stack.length - 1]] > hist[i]) {
//                 stack.pop();
//             };
//             if(stack.length){
//                 rightArr[i] = stack[stack.length - 1];
//             }else {
//                 rightArr[i] = hist.length;
//             }
//             stack.push(i);
//         }
//     };
//     makeleftArr();
//     makerightArr();
//     console.log(leftArr,
//         rightArr)
//     for(let i = 0; i < hist.length; i++){
//         let area = hist[i] * (rightArr[i] - leftArr[i] - 1);
//         // hist[i] + hist[i] * (i - leftArr[i] - 1) + hist[i] * (rightArr[i] - i - 1);
//         maxArea = Math.max(maxArea, area);
//     };

//     return maxArea;
// }

////////////////////////////////////////////////////////////////////////////////////////////////
function maxHistogramArea(hist) {
let stack = [];
let maxArea = 0;
for(let i = 0; i < hist.length; i++){
    // let top = stack[stack.length- 1]
    while(stack.length && hist[i] <= hist[stack[stack.length- 1]]){
        let poppedEl = stack.pop();
        let currArea = hist[poppedEl] * (stack.length ? (i - stack[stack.length - 1] - 1) : i);
        maxArea = Math.max(maxArea,currArea);
    }
    stack.push(i);
};
while(stack.length){
    let popppedEl = stack.pop();
    let currArea = hist[popppedEl] * (stack.length ? (hist.length - stack[stack.length-1] - 1) : hist[popppedEl]);
    maxArea = Math.max(maxArea,currArea);
};

    return maxArea;
}

console.log(maxHistogramArea([6,2,5,4,1,5,6]))