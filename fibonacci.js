let prev = 1;
let prevPrev = 0;

for (let i = 2; i < 5; i++) {
currentSum = prev + prevPrev;
prevPrev = prev;
prev = currentSum;
console.log(currentSum);
// return currentSum
}



