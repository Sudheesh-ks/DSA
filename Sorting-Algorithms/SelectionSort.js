// function selectionSort(arr){
//     const n = arr.length;
//     for(let i = 0; i < n - 1; i++){
//         let minIndex = i;
//         for(let j = i + 1; j < n; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
//     }
//     return arr;
// }

// console.log(selectionSort([14,30,90,50,4,15,1,6]))




// HOW IT WORKS
// -----------------------------


// arr = [5, 3, 8, 4, 2];


// -----------------------Pass 1 (i = 0):----------------------------------

// Initial Array: [5, 3, 8, 4, 2]

// Find the minimum value in [5, 3, 8, 4, 2] → 2 at index 4
// Swap 2 with 5

// Array after swapping: [2, 3, 8, 4, 5] ✅ (2 is in its correct position)


//------------------------ Pass 2 (i = 1):-------------------------------------

// Unsorted Section: [3, 8, 4, 5]

// Find the minimum value in [3, 8, 4, 5] → 3 at index 1
// 3 is already in place, no swap needed

// Array remains: [2, 3, 8, 4, 5] ✅


//------------------------ Pass 3 (i = 2):----------------------------------------

// Unsorted Section: [8, 4, 5]

// Find the minimum value in [8, 4, 5] → 4 at index 3
// Swap 4 with 8

// Array after swapping: [2, 3, 4, 8, 5] ✅


//--------------------------- Pass 4 (i = 3):------------------------------------------

// Unsorted Section: [8, 5]

// Find the minimum value in [8, 5] → 5 at index 4
// Swap 5 with 8
// Array after swapping: [2, 3, 4, 5, 8] ✅



// Final Sorted Array:  [2, 3, 4, 5, 8]