function balancedParanthesis(str){
    let stack = []
    let checkObj = {
        "(" : ")",
        "[" : "]",
        "{" : "}",
    };
    let set = new Set([ "(", "[", "{" ]);
    for (let i = 0; i < str.length; i++) {
        if(set.has(str[i])){
            stack.push(str[i]);
        }else {
            if(checkObj[stack[stack.length-1]] !== str[i]){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log(balancedParanthesis("{([[])}"));