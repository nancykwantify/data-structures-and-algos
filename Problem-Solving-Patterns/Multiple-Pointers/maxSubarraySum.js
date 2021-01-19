/*
Takes array of integers and a number called n. The function should calculate maximum sum of n consecutive elements in the array.
*/
/*
make max sum variable
make temp sum variable
check arr length if longer than num // return null
iterate thru num
    max sum + arr[i]

temp sum = max sum
iterate thru arr (starting i at num)
    add one to right
    minus one from left
    find max and return

 */

function maxSubarraySum(arr, n) {
  let sum = 0;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17

/* add one, subtract one
L  R
 [1, 2, 5, 2, 8, 1, 5] -----> 10

  L        R
 [1, 2, 5, 2, 8, 1, 5] -----> 17

*/
