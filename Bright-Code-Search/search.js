let obj = {
  valueToSearchFor: 200,
  sortedArr: [10, 50, 200, 230, 400, 530, 720],
  unSortedArr: [1000, 50, 200, 850, 430, 230],
  init: function () {
    //// DO NOT NEED TO EDIT ////
    let keys = Object.keys(this);
    let terminalArgs = process.argv.slice(2);
    let methodNames = keys.slice(keys.indexOf("init") + 1);
    let commands = {};
    methodNames.forEach((methodName) => {
      let capitalLetters = "";
      for (let i = 0; i < methodName.length; i++) {
        let letter = methodName.charAt(i);
        if (letter === letter.toUpperCase()) {
          capitalLetters += letter.toLowerCase();
        }
      }
      commands[methodName[0] + capitalLetters] = methodName;
    });
    let result;
    let methodToRun = commands[terminalArgs[0]];
    if (methodToRun) {
      result = this[methodToRun](
        this.sortedArr,
        terminalArgs[1] ? Number(terminalArgs[1]) : this.valueToSearchFor
      );
    } else {
      let methodCommandList = Object.entries(commands).map(
        (method) => `\n(${method[0]}) - ${method[1]}`
      );
      result =
        `Please provide an abbreviation as a terminal argument:` +
        methodCommandList;
    }
    console.log(result);
    //// DO NOT NEED TO EDIT ////
  },
  binaryRecursive: function () {
    // Find the middle index
    // Check if the start index is greater than the end index
    // Return -1
    // Check value of middle index and see if it's equal to the value we're trying to find
    // Return the middle index
    // If the value we're trying to find is less than the value that is in the position of the middle index
    // Recursive call setting new start index and end index values
    // If the value we're trying to find is greater than the value that is in the position of the middle index
    // Recursive call setting new start index and end index values
    // console.log("Current array elements: ", arr.slice(startIndex, endIndex+1)); // Helpful printing to see what the current array elements are in this method call

    let mid = Math.floor((start + end) / 2); // Find the middle index
    if (start > end) {
      // Check if the start index is greater than the end index
      return -1; // Return -1
    }
    if (valueToFind === arr[mid]) {
      // Check value of middle index and see if it's equal to the value we're trying to find
      return mid; // Return the middle index
    } else if (valueToFind > arr[mid]) {
      // If the value we're trying to find is less than the value that is in the position of the middle index
      return this.binaryRecursive(arr, valueToFind, mid + 1, end); // Recursive call setting new start index and end index values
    } else if (valueToFind < arr[mid]) {
      // If the value we're trying to find is greater than the value that is in the position of the middle index
      return this.binaryRecursive(arr, valueToFind, start, mid - 1); // Recursive call setting new start index and end index values
    }
    // console.log("Current array elements: ", arr.slice(startIndex, endIndex+1)); // Helpful printing to see what the current array elements are in this method call
  },
  binaryIterative: function () {
    // Initially set start value
    // Initially set end value to the last index in the array
    // While the start value is less than or equal to the end value
    // Find the middle index
    // Check value of the middle index and see if it's equal to the value we're trying to find
    // Return the middle index
    // If the value we're trying to find is greater than the value that is in the position of the middle index
    // Set start index to the middle index plus one
    // Otherwise
    // Set end index to the middle index minus one
    // Return -1
  },
  exponentialIterative: function () {
    // If the first value in the array is the value you're looking
    // Return 0

    // Initialize i to one
    // While i less than the length of the array and the element value at
    // position i is less than the value we're looking for
    // Double the value of i

    // Use binary search to find the value
    if (valueToFind == arr[0]) {
      // If the first value in the array is the value you're looking
      return 0; // Return 0
    }
    let i = 1; // Initialize i to one
    // While i less than the length of the array and the element value at
    // position i is less than the value we're looking for
    while (i < arr.length && valueToFind >= arr[i]) {
      i *= 2; // Double the value of i
    }
    return this.binaryRecursive(
      arr,
      valueToFind,
      i / 2,
      Math.min(i, arr.length - 1)
    ); // Use binary search to find the value
  },
  exponentialRecursive: function () {
    // If the first value in the array is the value you're looking (Base Case)
    // Return 0

    // While i less than the length of the array and the element value at
    // position i is less than the value we're looking for
    // Recursive call passing the double of i
    // Use binary search to find the value
    if (valueToFind == arr[0]) {
      // If the first value in the array is the value you're looking
      return 0; // Return 0
    }
    let i = 1; // Initialize i to one
    // While i less than the length of the array and the element value at
    // position i is less than the value we're looking for
    while (i < arr.length && valueToFind >= arr[i]) {
      i *= 2; // Double the value of i
    }
    return this.binaryRecursive(
      arr,
      valueToFind,
      i / 2,
      Math.min(i, arr.length - 1)
    ); // Use binary search to find the value
  },
  linearRecursive: function (arr, valueToFind, start = 0) {
    // Check if the start index is greater then or equal to the final index in the array
    // Return -1
    // If the value of the start index is equal to the value you're looking for
    // Return start index
    // Recursive call setting a new start value
    if (start > arr.length - 1) {
      // Check if the start index is greater then or equal to the final index in the array
      return -1; // Return -1
    }
    if (valueToFind === arr[start]) {
      // If the value of the start index is equal to the value you're looking for
      return start; // Return start index
    } else {
      return this.linearRecursive(arr, valueToFind, start + 1); // Recursive call setting a new start value
    }
  },
  linearIterative: function (arr, valueToFind) {
    // Iterate through the given array
    // Check during each iteration, if the current value is equal to the value you're looking for
    // Return the current index
    // Return -1 if not found

    for (let i = 0; i < arr.length; i++) {
      // Iterate through the given array
      if (valueToFind === arr[i]) {
        // Check during each iteration, if the current value is equal to the value you're looking for
        return i; // Return the current index
      }
    }
    return -1; // Return -1 if not found
  },
  jumpIterative: function () {},
  interpolationIterative: function () {},
  interpolationRecursive: function () {},
};
require.main === module && obj.init();
module.exports = obj;
