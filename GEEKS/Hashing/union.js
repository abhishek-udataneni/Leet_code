// function union(a,b){
//      let qumilativeArray = []
//     // [...a, ...b];
//     let res = 0;
//     for(let i=0;i<a.length;i++){
//         qumilativeArray[i] = a[i]
//     };
//     for(let j=0;j<b.length;j++){
//         temp = a.length + j;
//         qumilativeArray[temp] = b[j];
//     };

//     for (let i = 0; i < qumilativeArray.length; i++) {
//         distinct = true;
//         for (let j = 0; j < i; j++) {
//             if(qumilativeArray[i] === qumilativeArray[j]) {
//                 distinct = false;
//                 break;
//             }
//         };
//         if(!distinct) continue;
//         res++;

//     }
//     return res
// }

function union(a,b){
    let set = new Set();
    for (let i = 0; i < a.length; i++) {
        set.add(a[i]);
    }
    for (let j = 0; j < b.length; j++) {
        set.add(b[j])
    }
    return set;
}
let a = [10,15];
let b = [30];
console.log(union(a,b));