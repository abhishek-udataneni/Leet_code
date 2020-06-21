var plusOne = function(digits) {
    if(digits[digits.length -1] === 9){
        
        let digitArray = (digits[digits.length -1]+1).toString().split("");
        let digitNumberArray = [Number(digitArray[0]),Number(digitArray[1])];
        digits.pop();
        return [...digits, ...digitNumberArray]
    }else {
         digits[digits.length -1] =  digits[digits.length -1] + 1;
         return digits;
    }

};

console.log(plusOne([9,9]))