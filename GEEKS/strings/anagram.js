function anagram(str1,str2) {
    let tempArr = new Array(256);
    tempArr.fill(0);
    console.log(tempArr);
    if(str1.length !== str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        let charCode = str1.charCodeAt(i)
        tempArr[`${charCode}`]++
    }
    console.log(tempArr)
    for (let i = 0; i < str2.length; i++) {
        let charCode = str2.charCodeAt(i);
        tempArr[`${charCode}`]--
    }
  
    for (let i = 0; i < tempArr.length; i++) {
       if(tempArr[i] !== 0) { return false}
    }
    console.log(tempArr)
    return true
};

console.log(anagram("abcqwertyuiopasdfghjklzxcvbnm,.","cbaqwertyuiopasdfghjklzxcbnm,."))