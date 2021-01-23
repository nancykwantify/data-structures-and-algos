/**
 *
 * given two positive integers, find out if the two numbers ahve the same frequency of digits.
 *
 * ex:
 * sameFrequency(182, 281) // true
 * sameFrequency(34, 14) // false
 *
 *
 *
 * convert num1 & num2 to string
 * declare counter obj1 & obj2
 * iterate num1
 * count value of each and push into counter obj1
 *
 * iterate num2
 * count value of each and push into counter obj2
 *
 * if obj1 === obj2 return true
 *
 * else false
 *
 */

function sameFrequency(num1, num2) {
  let arr1 = String(num1).split("");
  let arr2 = String(num2).split("");
  if (arr1.length !== arr2.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
  }
  for (let j = 0; j < arr2.length; j++) {
    obj2[arr2[j]] = (obj2[arr2[j]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
