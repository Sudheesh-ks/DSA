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

// // minimum from rotated sorted array using binary search
// function findMin(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] > arr[right]) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//     return arr[right];
// }

// console.log(findMin([4,5,6,7,0,1,2]));


// Linear search in a nested array
// function nestedBinarySearch(matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return -1;
// }

// let array = [
//     [1,2,3],
//     [5,6,9],
//     [10,23,34]
// ];

// let target = 9;

// console.log(nestedBinarySearch(array, target)); 
// // Output: [1, 2]


// Binary search in 2D Array
// function nestedBinarySearch(matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         let left = 0;
//         let right = matrix[i].length - 1;

//         while (left <= right) {
//             let mid = Math.floor((left + right) / 2);

//             if (matrix[i][mid] === target) return [i, mid];
//             else if (matrix[i][mid] < target) left = mid + 1;
//             else right = mid - 1;
//         }
//     }
//     return -1;
// }


// let array = [
//     [1,2,3],
//     [5,6,9],
//     [10,23,34]
// ];

// let target = 9;

// console.log(nestedBinarySearch(array, target)); 
