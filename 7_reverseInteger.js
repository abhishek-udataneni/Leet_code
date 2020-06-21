var reverse = function(x) {
    function reverseString(str){
        let negative = false;
        console.log(str > Math.pow(2,31)-1)
        if((str > Math.pow(2,31)-1)  || (str < -1*Math.pow(2,31))){
          
            return 0;
        }
        if(str < 0) {
            negative = true;
            str = str * -1;
        }
        let strArr = str.toString().split("");
        for(let i=0;i<strArr.length/2;i++){
            let temp = strArr[i];
            strArr[i] = strArr[strArr.length-1-i];
            strArr[strArr.length-1-i] = temp;
        }
        return negative ? -1*Number(strArr.join("")) : Number(strArr.join(""));
    }
    return reverseString(x)
};

console.log(reverse(1534236469));