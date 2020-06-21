// Naive
function maxWindowSubstring(str){
    let res = 0;
    for(let i = 0; i < str.length; i++){
        let strObj = {}
        let count = 0;
        let j;
        for(j = i; j < str.length;j++){
            if(strObj[str[i+j]]){
                res = Math.max(res, count);
                break;
            }else{
                count++;
                strObj[str[i+j]] = 1;
            }
        }
        if(j === str.length){
            res = Math.max(res, count);
        }
    }
    return res;
};

// function maxWindowSubstring(str){
//    let prevCharPosition = Array(256).fill(-1);
//    let j = 0;
//    let res = 0;
//    for(let i = 0; i < str.length; i++){
//     j = Math.max(prevCharPosition[str.charCodeAt(i)]+1,j);
//     let maxEnd = i - j + 1;
//     res = Math.max(res, maxEnd);
//     prevCharPosition[str.charCodeAt(i)] = i;
//    }

//    return res
// };

console.log(maxWindowSubstring("abcdef"));