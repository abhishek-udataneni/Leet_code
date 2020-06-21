function generateFirstKDigits(digits) {
  let queue = [...digits];
  let count = 0;
  while (queue.length && count < 10) {
    let poppedValue = queue.shift();
    console.log(poppedValue);
    count++;
    for (let i = 0; i < digits.length; i++) {
      queue.push(poppedValue + digits[i]);
    }
  }
}

generateFirstKDigits(['5', '6']);
