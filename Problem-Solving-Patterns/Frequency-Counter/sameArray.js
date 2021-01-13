// Write a function called same, which acepts two arrays.
// The function should return try if every value in
// the array has it's corresponding value squared in the second array
// The frequency of values must be the same.

function same(arr1, arr2) {
  // if arr1.length !== arr2.length , return FALSE
  // loop over arr1
  // let squaredNum = square each arr1[i]
  //
  // loop over arr2
  // arr2.includes squaredNum, return TRUE
  // else FALSE

  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      // index not found
      return false;
    }
    // console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 1], [4, 4, 1]));
