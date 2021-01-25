/**
 * Given an array of integers and a number, white a fn which finds maximum sum of a subarray with the length of the number passed to the function.
 * Note a subarray must consist of consecutive elements from the original array in the first
 *
 * console.log(maxSubarraySum([100,200,300,400], 2)) // 700
 *
 *  L
 * [100,200,300,400] find largest sum
 *            R
 * left pointer at 0
 * right pointer at 0 + num
 *
 * let largestSum = 0
 * iterate thru arr (window)
 *  newSum = largestSum += arr[i]
 * if newSum > largestSum then
 * largest sum = newSum
 *
 *
 * increment Right
 * increment Left
 *
 * return largestSum
 *
 *
 *
 *
 */

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let newSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    newSum += arr[i] - arr[i - num];
    maxSum = Math.max(newSum, maxSum);
  }
  return maxSum;
}

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5

// SLIDING WINDOW
// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i = 0; i < num; i++) {
//     total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//     currentTotal += arr[i] - arr[i - num];
//     total = Math.max(total, currentTotal);
//   }
//   return total;
// }
