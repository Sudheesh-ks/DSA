// function insertionSort(arr){
//     const n = arr.length
//     for(let i = 1; i < n; i++){
//         let key = arr[i]
//         let j = i - 1
//         while(j >= 0 && arr[j] > key){
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = key
//     }
//     return arr
// }


// console.log(insertionSort([1,2,8,50,6,26,4]));



// HOW IT WORKS


// arr = [5, 3, 8, 4, 2];


// ---------------------Pass 1 (i = 1, key = 3):---------------------------

// Initial Array: [5, 3, 8, 4, 2]

// Compare 3 with 5 → Shift 5 right
// Insert 3 in the correct place.

// Array after pass: [3, 5, 8, 4, 2] ✅


// -------------------------------Pass 2 (i = 2, key = 8):----------------------------

// Unsorted Section: [5, 8]
// 8 is already in the correct place, no swaps needed.

// Array remains: [3, 5, 8, 4, 2] ✅


//------------------------------------ Pass 3 (i = 3, key = 4):---------------------------

// Unsorted Section: [8, 4]

// Compare 4 with 8 → Shift 8 right
// Compare 4 with 5 → Shift 5 right
// Insert 4 in the correct place.

// Array after pass: [3, 4, 5, 8, 2] ✅


// ----------------------------------------Pass 4 (i = 4, key = 2):-------------------------

// Unsorted Section: [8, 2]

// Compare 2 with 8 → Shift 8 right
// Compare 2 with 5 → Shift 5 right
// Compare 2 with 4 → Shift 4 right
// Compare 2 with 3 → Shift 3 right
// Insert 2 in the correct place.

// Array after pass: [2, 3, 4, 5, 8] ✅



// Final Sorted Array: [2, 3, 4, 5, 8]