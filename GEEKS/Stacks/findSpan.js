function findSpan(array){
    let stack = [[0,array[0]]];
    let spanArr = [1]
    for (let i = 1; i < array.length; i++) {
        while(stack.length && array[i] > stack[stack.length - 1][1] ){
            stack.pop()
        }
        spanArr[i] = stack.length === 0 ? i+1 : i - stack[stack.length - 1][0];
        stack.push([i, array[i]])
    }
    return spanArr;
};

console.log(findSpan([3,2,1,4]))