/**
 * Takes two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 *
 * In other words, the function should check whether the characters int eh first string appear somewhere in the second string, WITHOUT THEIR ORDER CHANGING.
 *
 * isSubsequence('hello", "hello world") // true
 * isSubsequence("sing", "sting") // true
 * isSubsequence("abc", 'acb') // false
 *
 *
 * set leftIdx pointer
 * set rightIdx pointer
 * iterate thru str2
 *   while iteration is less than str2 length
 *      if str2[rightIdx] === str1[leftIdx] increment
 *      if (leftIdx === str1.length) return true
 *
 * otherwise, return false
 *
 */

function isSubsequence(str1, str2) {
  let left = 0;
  let right = 0;
  if (!str1) return true;
  while (right < str2.length) {
    if (str2[right] === str1[left]) left++;
    if (left === str1.length) return true;
    right++;
  }
  return false;
}

// TEST
// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "acb")); // false
