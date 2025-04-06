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
//         return recursiveBinary(arr,target,middleIndex - 1,right);
//     }
// }

// console.log(recursiveBinary([1,2,3,4,5,6,7],4));
