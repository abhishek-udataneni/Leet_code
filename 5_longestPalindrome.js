var longestPalindrome = function(s) {
    let requiredStr = '';
    function checkPalindrome(str){
        return (str === str.split("").reverse().join());
    }
    for (let i = 0; i < s.length; i++) {
      for (let j=i+1; j < s.length; j++) {
          if(checkPalindrome(s.substring(i,j+1))){
            if(s.substring(i,j+1).length > requiredStr.length){
                requiredStr = s.substring(i,j+1);
            }
          }
      }     
    }
    console.log(requiredStr)
    return requiredStr;
};

console.log(longestPalindrome("abcaba"))