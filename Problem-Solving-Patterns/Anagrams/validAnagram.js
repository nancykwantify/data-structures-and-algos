/*

convert str1 to arr1
convert str2 to arr2
declare empty obj1
declare empty obj2
iterate through array
    check if element is in obj
        if yes, increment
        if no, add to obj

iterate through obj
    check if obj1 !== obj2 // return false

return true

*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  let obj1 = {};
  //   let obj2 = {};
  for (let i = 0; i < arr1.length; i++) {
    if (obj1[arr1[i]]) {
      obj1[arr1[i]]++;
    } else {
      obj1[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!obj1[arr2[i]]) {
      return false;
    } else {
      obj1[arr2[i]] -= 1;
    }
    return true;
    //   console.log(obj1, obj2);
  }
}

// validAnagram("", "");

console.log(validAnagram("aaz", "zzajj"));

//REFACTORED
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
