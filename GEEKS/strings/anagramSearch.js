// naive ((n-m+1 )* m)
// function anagramSearch(str1,str2) {
//   let n = str1.length;
//   let k = str2.length;

//   function isAnagram(s1,s2){
//     const tempArr = Array(256).fill(0)
//     for (let i = 0; i < s1.length; i++) {
//         const charCode = s1.charCodeAt(i);
//         tempArr[charCode]++
//     }
//     for (let i = 0; i < s2.length; i++) {
//         const charCode = s2.charCodeAt(i);
//         tempArr[charCode]--
//     }
//     for (let i = 0; i < tempArr.length; i++) {
//         if(tempArr[i] !== 0){
//             return false
//         }
//     }
//     return true;
//     }

//     for (let i = 0; i < n-k+1; i++) {
//         let currString = str1.substring(i,i+k);
//         if(isAnagram(currString,str2)){
//             return currString
//         }
//     }
//     return false;
// }
function anagramSearch(str1,str2) {
    function compareArr(arr1,arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true;
    }
    let str1CharCodeArr = Array(256).fill(0);
    let str2CharCodeArr = Array(256).fill(0);
    let n = str1.length;
    let k = str2.length;
    for (let i = 0; i < str2.length; i++) {
        str1CharCodeArr[str1.charCodeAt(i)]++
        str2CharCodeArr[str2.charCodeAt(i)]++
    }

    for(let i = k; i < n+1; i++){
        if(compareArr(str1CharCodeArr,str2CharCodeArr)){
            return true;
        }else {
            str1CharCodeArr[str1.charCodeAt(i-k)]--
            str1CharCodeArr[str1.charCodeAt(i)]++
        }
    }
    return false
}
console.log(anagramSearch("geeksforgeabc","abc"));