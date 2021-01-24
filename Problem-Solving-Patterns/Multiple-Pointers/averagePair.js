/**
 * Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 *
 * averagePair([1,2,3], 2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19], 8) // true
 * averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
 * averagePair([], 4) // false
 *
 * left pointer at index 0
 * right pointer at end of array
 * if avg left + right === num return true
 *
 * if avg of left + right > num
 * right --
 * if avg left + right < num
 * left ++
 *
 * return false
 *
 */

function averagePair(arr, num) {
  let leftIdx = arr[0];
  let rightIdx = arr[arr.length - 1];

  //   console.log(leftIdx, rightIdx);
  while (leftIdx < rightIdx) {
    if ((leftIdx + rightIdx) / 2 === num) return true;
    else if ((leftIdx + rightIdx) / 2 > num) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }
  return false;
}

// TEST
console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// MULTIPLE POINTER
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
