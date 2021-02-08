/**
 * store the first el as smallest value you've seen so far
 *
 * compare this item to the next item in the array until you find a smaller number
 *
 * if smaller num is found, designate that smaller num to be the new "minimum" and continue until end of the array.
 *
 * if the "minimum" is not the value (index) you initially began with, swap the two values
 *
 * repeat this with the next el until array is sorted
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i; //set first el to lowest
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j); //check comparison
      if (arr[j] < arr[lowest]) {
        lowest = j; //set new lowest
      }
    }
    let temp = arr[i];
    arr[i] = arr[j + 1];
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));

// solution with helper
function selectionSort(arr) {
  let startIdx = 0;
  while (startIdx < arr.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < arr.length; i++) {
      if (arr[smallestIdx] > arr[i]) smallestIdx = i;
    }
    swap(startIdx, smallestIdx, array);
    startIdx++;
  }
  return arr;
}

function swap(i, j, arr) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
