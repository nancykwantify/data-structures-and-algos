/*
- Accepts variable number of arguments
- Checks whether there are any duplicates among arguments passed in

set an obj = {}
save arg in obj
iterate thru obj
    check if arg is already in obj
    if not, add arg to obj
        if arg already there return true

return false
        
*/

// function areThereDuplicates(args) {
//   let arr = [...args];
//   let count = {};
//   //   console.log(count);

//   for (let i = 0; i < arr.length; i++) {
//     if (count[arr[i]]) {
//       count[arr[i]] += 1;
//     } else {
//       count[arr[i]] = arr[i];
//     }
//   }
//   for (let key in count) {
//     if (count[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

// TEST
// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

// FREQUENCY COUNTER
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }

  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
