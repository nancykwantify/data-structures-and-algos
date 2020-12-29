// Given a sorted array of integers, write a function called search, that accepts a value and returns
// the index where the value passed to the function is located, if the value is not found, return -1.

// FIRST APPROACH
function search(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let current = arr[middle];

    if (arr[middle] < val) left = middle + 1;
    else if (arr[middle] > val) right = middle - 1;
    else return middle;
  }
  return -1;
}

// TEST
let array = [1, 2, 3, 4, 5];
console.log(search(array, 3));
console.log(search(array, 9));

// SECOND APPROACH 0(n)
function search(arr, searchNum) {
  for (let i = 0; i < arr.length; i++) {
    if (searchNum === arr[i]) return i;
  }
  return -1;
}
