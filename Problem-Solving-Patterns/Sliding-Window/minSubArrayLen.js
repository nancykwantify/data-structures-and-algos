


function minSubArrayLen(arr, num) {



}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) //2 bc [4,3] smales subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 bc [5,4] is smallest subarray









// SOLUTION
maxSubArray Solution
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}
minSubArrayLen Solution
