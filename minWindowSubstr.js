function minWindowSubstr(s,t){
    let left = 0;
    let right= 0;
    let lengthOfString = s.length;
    let tMap = makeTmap(t,0);
    let windowMap = {};
    let charsIntMap = tMap.map;
    let numCharsToMatch = tMap.count;
    let numOfMatchedCharsInCurrentWindow = 0;
    let minSubstrRangeAndValue = [0,lengthOfString-1,Infinity];
    function makeTmap(t,charCount){
        let map = {}
        for(let char of t){
            if(!map[char]){
                map[char] = 1;
                charCount++
            }else {
                map[char]++
            }
        }
        return {map,count: charCount }
    }
    if(t.length > lengthOfString){return ""}
    while(right < lengthOfString){
        let rightChar = s.charAt(right);
        if(!windowMap[rightChar]){
            windowMap[rightChar] = 1
        }else{
            windowMap[rightChar]++
        }
        if(charsIntMap[rightChar] && charsIntMap[rightChar] === windowMap[rightChar]){
            numOfMatchedCharsInCurrentWindow++
        }
        while(numOfMatchedCharsInCurrentWindow === numCharsToMatch && left <= right){
            let leftChar = s.charAt(left);
            if(right-left+1 < minSubstrRangeAndValue[2]){
                minSubstrRangeAndValue = [left,right,right-left+1];
            }
            windowMap[leftChar]--;
            if(charsIntMap[leftChar] && windowMap[leftChar] < charsIntMap[leftChar]){
                numOfMatchedCharsInCurrentWindow--
            }
            left++
        }
        right++
    }
    return s.substring(minSubstrRangeAndValue[0], minSubstrRangeAndValue[1]+1)
}



////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://leetcode.com/problems/minimum-window-substring/discuss/483259/JavaScript-Heavily-Commented-and-Explicit-Variable-Names-to-Help-Comprehension
