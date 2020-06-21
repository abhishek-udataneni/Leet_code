// if non repeating string
function patternSearching(str1, str2) {
    let n = str1.length;
    let k = str2.length;
    for (let i = 0; i < n-k+1;) {
        let j;
        for (j = 0; j < k; j++) {
            if(str1[i+j] !== str2[j]){
                break;
            }
        }
        if(j === k){
            console.log(i)
        }
        if(j === 0){
            i++
        }else{
            i = i + j;
        }
    }
}

console.log(patternSearching("abuhfgnajabc", "abc"));