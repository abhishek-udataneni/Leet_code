// function checkRotation(str1,str2) {
//     let n = str1.length;
//     let k = str2.length;
//     for (let i = 0; i < n; i++) {
//         let rotatedArray = true
//         let j;
//         for (j = 0; j < k; j++) {
//             if(str1[(i+j)%n] !== str2[j]){
//                 rotatedArray = false;
//                 break;
//             }
//         }
//         if(rotatedArray) return true
//     }
//     return false;
// }

function checkRotation(str1, str2) {
    let s1 = str1 + str1;
    return s1.indexOf(str2) !== -1 ? true : false;
}
console.log(checkRotation("cuhfgnajab", "abc"));