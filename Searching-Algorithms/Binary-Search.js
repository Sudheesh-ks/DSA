// // Binary Search
// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2);
//         if(arr[middleIndex] === target){
//             return middleIndex;
//         }
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1;
//         }else{
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return -1
// }

// console.log(binarySearch([1,2,3,4,5,6,7],4));


// // Recursive Binary Search
// function recursiveBinary(arr,target,left = 0,right = arr.length - 1){
//     if(left > right){
//         return -1;
//     }
//     const middleIndex = Math.floor((left + right)/2);
//     if(arr[middleIndex] === target){
//         return middleIndex;
//     }
//     if(target < arr[middleIndex]){
//         return recursiveBinary(arr,target,left,middleIndex - 1);
//     }else{
//         return recursiveBinary(arr,target,middleIndex + 1,right);
//     }
// }

// console.log(recursiveBinary([1,2,3,4,5,6,7],4));

// minimum from rotated sorted array using binary search
// function findMin(nums) {
//     let low = 0;
//     let high = nums.length - 1;

//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);

//         // If mid > high element, min is in right
//         if (nums[mid] > nums[high]) {
//             low = mid + 1;
//         } 
//         // Otherwise, min is in left including mid
//         else {
//             high = mid;
//         }
//     }

//     return nums[low];
// }

// console.log(findMin([4,5,6,7,0,1,2]));
