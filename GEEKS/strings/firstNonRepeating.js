function firstNonRepeating(str){
    let arr = Array(256).fill(-1);
    let res = Infinity;
    for(let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if(arr[charCode] === -1){
            arr[charCode] = i;
        } else if (arr[charCode] > -1){
            arr[charCode] = -2;
        }
    };
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > -1) {
            res = Math.min(res, arr[i])
        }
    };
    return res;
};

console.log(firstNonRepeating("abca"))