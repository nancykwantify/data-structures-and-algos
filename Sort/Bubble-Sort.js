/**
 *  largest value bubbles to the top
 *
 */

//  // ES5
//  function swap(arr, idx1, idx2) {
//      let temp = arr[idx1]
//      arr[idx1] = arr[idx2]
//      arr[idx2] = temp;
//  }

//  //ES2015
//  const swap = (arr, idx1, idx2) => {
//      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//  }

function bubbleSort(arr) {
  let noSwaps; // 0(n) linear (best case)
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));

// 0(n^2) 2 loops without noSwap

function bubbleSort(arr) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr);
        isSorted = false;
      }
    }
    counter++;
  }
  return arr;
}

function swap(i, j, arr) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
