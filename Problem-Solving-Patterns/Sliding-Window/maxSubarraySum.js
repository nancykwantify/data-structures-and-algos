/**
 * Given an array of integers and a number, white a fn which finds maximum sum of a subarray with the length of the number passed to the function.
 * Note a subarray must consist of consecutive elements from the original array in the first
 *
 * console.log(maxSubarraySum([100,200,300,400], 2)) // 700
 *
 *  L
 * [100,200,300,400]
 *       R
 */

function maxSubarraySum(arr, num) {}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5

// SLIDING WINDOW
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}
