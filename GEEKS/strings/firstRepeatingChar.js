function firstRepeatingChar(str) {
    let fiArr = Array(256).fill(-1);
    let res = Infinity;
    for(let i = 0; i < str.length; i++) {
        let chCode = str.charCodeAt(i);
        if(fiArr[chCode] === -1){
            fiArr[chCode] = i;
        }else {
            res = Math.min(res,fiArr[chCode]);
        }
    }

    return res;
}

console.log(firstRepeatingChar("abcabc"))