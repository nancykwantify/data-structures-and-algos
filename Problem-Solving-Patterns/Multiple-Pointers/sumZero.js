function sumZero(sortedArr) {
  let first = 0;
  let last = sortedArr.length - 1;

  while (first < last) {
    let sum = sortedArr[first] + sortedArr[last];
    if (sum === 0) {
      return [sortedArr[first], sortedArr[last]];
    } else if (sum > 0) {
      last--;
    } else {
      first++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 3, 5])); // [-3, 3]
