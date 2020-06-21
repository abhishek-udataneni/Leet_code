function rabinKarp(str1,str2) {
    let str1hash = 0;
    let str2hash = 0;
    let n = str1.length;
    let k = str2.length;

    for (let i = 0; i < str2.length; i++) {
        str1hash = str1hash + str1.charCodeAt(i);
        str2hash = str2hash + str2.charCodeAt(i);
    };
    
    for (let i = 0; i < n-k+1; i++) {
        let j;
        if(str1hash === str2hash){
          for (j = 0; j < k; j++) {
            if(str2[j] !== str1[i+j]){
                break;
            }
          }
        }
        if(j === k) console.log(i);
        str1hash = str1hash - str1.charCodeAt(i) + str1.charCodeAt(i+k);  
        // console.log(str1hash)
    }
}

console.log(rabinKarp("sabc", "abc"));