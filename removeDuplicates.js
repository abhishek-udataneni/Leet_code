// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] != nums[i]) 
//             nums[++i] = nums[j];
//     }
//     console.log(nums.splice(0,i+1))
//     return ++i;
// };

 function removeDuplicates(arr) {
    //  tempArr = [arr[0]]
     let j = 1;
     for(let i = 1;i < arr.length; i++){
        if(arr[i-1] != arr[i]){
            arr[j] = arr[i];
            j = j + 1;
        }
     }
     return arr;
 };

 console.log(removeDuplicates([1,1,1,2,3,4,4,4]));

