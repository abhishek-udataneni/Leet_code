let inputArr = [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
];

let minPathSum = (arr) => {
    let minSum = Infinity;
    function helper(arr,row,col,currSum){
        currSum = currSum + arr[row][col];

        if(row === arr.length - 1){
            minSum = Math.min(minSum, currSum);
            return;
        }

        helper(arr,row+1,col,currSum);
        helper(arr,row+1, col+1, currSum)
    }
    helper(arr,0,0,0);
    return minSum;
}

console.log(minPathSum(inputArr));