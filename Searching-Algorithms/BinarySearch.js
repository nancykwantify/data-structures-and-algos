/**
 * Write a function which accepts a sorted arr and value and returns the index at which the value exists.
 *
 * Otherwise, return -1
 *
 * iterate array
 * find el which equals val
 * return index
 *
 *
 * find middle of array
 * check if > or < or ===  val
 * if > isolate right half
 * check if middle is >,<,=== to val
 * if < isolate left half
 * check if middle is >,<,=== to val
 *
 * keep going until can't find val and return -1
 * if === return idx
 *
 *
 *
 */

// function binarySearch(arr, val) {
//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;
//   let midIdx = Math.floor(leftIdx + rightIdx / 2);
//   if (val === arr[midIdx]) return midIdx;

//   while (leftIdx <= rightIdx) {
//     if (arr[midIdx] === val) return midIdx;
//     else if (arr[midIdx] < val) {
//       leftIdx = midIdx++; //forgot to increment midIdx NOT leftIdx++
//     } else {
//       rightIdx = midIdx--;
//     }
//     return -1;
//   }
// }

// TEST
console.log("hi");
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1,2,3,4,5],3)) // 2
// console.log(binarySearch([1,2,3,4,5],5)) // 4
// console.log(binarySearch([1,2,3,4,5],6)) //

// Solution

// [2,5,6,9,13,15,28]
//  S     M        E

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
