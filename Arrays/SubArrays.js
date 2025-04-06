// function printAllsubArray(arr){
//     for(let i = 0; i < arr.length; i++){
//         let subArray = []
//         for(let j = i;j < arr.length; j++){
//             subArray.push(arr[j]);
//             console.log(subArray);
//         }
//     }
// }

// console.log(printAllsubArray([1,2,3]))


// function maxSubarraySum(arr) {
//     let maxSoFar = -Infinity;
//     let maxEndingHere = 0;

//     for (let num of arr) {
//         maxEndingHere += num;
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//         if (maxEndingHere < 0) {
//             maxEndingHere = 0;
//         }
//     }

//     return maxSoFar;
// }

// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6



// function countSubarraysWithSum(arr, target) {
//     let count = 0;
//     let prefixSum = 0;
//     let sumMap = { 0: 1 }; 

//     for (let num of arr) {
//         prefixSum += num;
//         if (sumMap[prefixSum - target]) {
//             count += sumMap[prefixSum - target];
//         }
//         sumMap[prefixSum] = (sumMap[prefixSum] || 0) + 1;
//     }

//     return count;
// }


// console.log(countSubarraysWithSum([1, 1, 1], 2)); 



// function longestSubarrayWithSum(arr, target) {
//     let maxLength = 0;
//     let prefixSum = 0;
//     let sumIndexMap = {};

//     for (let i = 0; i < arr.length; i++) {
//         prefixSum += arr[i];

//         if (prefixSum === target) {
//             maxLength = i + 1;
//         }

//         if (sumIndexMap[prefixSum - target] !== undefined) {
//             maxLength = Math.max(maxLength, i - sumIndexMap[prefixSum - target]);
//         }

//         if (sumIndexMap[prefixSum] === undefined) {
//             sumIndexMap[prefixSum] = i;
//         }
//     }

//     return maxLength;
// }


// console.log(longestSubarrayWithSum([1, 2, 3, 7, 5], 12)); // Output: 2 ([3, 7, 5])



// function subarraysWithProductLessThanK(arr, k) {
//     if (k <= 1) return 0;

//     let count = 0;
//     let product = 1;
//     let left = 0;

//     for (let right = 0; right < arr.length; right++) {
//         product *= arr[right];

//         while (product >= k) {
//             product /= arr[left];
//             left++;
//         }

//         count += right - left + 1;
//     }

//     return count;
// }


// console.log(subarraysWithProductLessThanK([10, 5, 2, 6], 100)); // Output: 8
