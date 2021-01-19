/*
 A function accepts sorted array and counts the unique values in the array. There can be negative numbers in the array, but will always be sorted.
*/

function countUniqueValues(arr) {
  let i = 0; //index
  for (let j = 1; j < arr.length; j++) {
    // j increments automatically because of loop
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 2, 2, 3]));

/*

           i
[1, 3, 4, 5, 5, 5]         //should return 4
                j
*/

// let first = arr[0]; // i
// let second = arr[first + 1]; // j
// let counter = 1;
// while (first !== second) {
//   second++;
//   console.log(counter);
// } else {
//   counter++;
// }
// return counter;
