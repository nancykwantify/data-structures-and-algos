/**
 * Write a fn which accepts an array and val,
 * and returns the index at which the value exists
 * if not exist, return -1
 *
 * linearSearch([10,15,20,25,30], 15)
 *
 */

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// console.log(linearSearch([100], 100)); // 0

console.log("hi");
