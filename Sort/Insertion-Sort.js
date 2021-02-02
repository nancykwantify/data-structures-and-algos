/**
 *
 * Builds up the sort by gradually creating
 * a larger left half which is always sorted
 *
 * start by picking the second element in the array
 *
 * now compare second el with one before it and swap if necessary
 *
 * continue to next el and if it is in the incorrect order,
 * iterate thru the sorted portion( the left side) to place the el in correct place
 *
 * repeat until array sorted
 *
 *
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
