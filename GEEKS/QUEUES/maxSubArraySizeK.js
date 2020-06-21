function maxSubArraySizeK(arr, k) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }
  max = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    max = Math.max(sum, max);
  }

  return max;
}

console.log(maxSubArraySizeK([1, 2, 3, 4], 3));
