// function intersection(a,b){
//     let res = [];
//     for(let i=0; i<a.length; i++){
//         let alreadyChecked = false
//         for(j=0; j<=i-1;j++){
//             if(a[j] === a[i]){ 
//                 alreadyChecked = true;
//                 break;
//             }
//         };
//         if(alreadyChecked) continue; 

//         for(let j=0; j<b.length; j++){
//             if(a[i] === b[j]){
//                 res.push(a[i]);
//                 break;
//             }
//         }
//     }
//     return res.length
// };

// let a = [10,15,20,15,30,30,5];
// let b = [30,5,30,80];
// console.log(intersection(a,b))

function intersection(a,b) {
    let set = new Set();
    let res = 0;
    for(let i=0; i<a.length;i++){
        set.add(a[i]);
    };
    for(let i=0; i<b.length; i++){
        if(set.has(b[i])){
            set.delete(b[i]); // consider duplicates in the second array once checked remove from the set.
            res++;
        }
    }
    return res;
}

let a = [10,15,20,15,30,30,5];
let b = [30,5,30,80];
console.log(intersection(a,b))