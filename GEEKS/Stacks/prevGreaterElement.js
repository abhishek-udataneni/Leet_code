function prevGreaterElement(array){
    let stack = [array[0]];
    let result = [-1];
    for (let i = 1; i < array.length; i++) {
        while(stack.length && array[i] > stack[stack.length - 1]){
            stack.pop();
        }
        result[i] = stack.length === 0 ? -1 : stack[stack.length - 1]; 
        stack.push(array[i]);
    }
    return result;
}

console.log(prevGreaterElement([3,2,1,4]))