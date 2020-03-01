function isPalindrome(x){
    let length = Math.floor(x.length/2)
    for(i=0;i<length;i++){
        if(x[i] !== x[x.length-i-1]){
            return false
        }
    }
    return true;
}

console.log(isPalindrome("4554"));
function add(str,times,numToAdd){
    for(i=0;i<times;i++){
        str = str + numToAdd;
    }
    return str
};
// leastInteger = () =>{
//     debugger
//     let x = 2;
//     let y = 2;
//     let initial = "4455"
//     while(!isPalindrome(initial)){
//         if(initial[initial.length -1] === "5"){
//             x=x+2;
//             initial = add(initial,x,"4");
//         }
//         if(initial[initial.length -1] === "4"){
//             y=y+2;
//             initial = add(initial,y,"5");
//         }
//     }
//     return initial;
// }
// console.log(leastInteger())