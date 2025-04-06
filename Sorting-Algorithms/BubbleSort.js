// function bubbleSort(arr){
//     const n = arr.length;
//     for(let i = 0; i < n - 1; i++){
//         for(let j = 0; j < n - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
//             }
//         }
//     }
//     return arr
// }


// console.log(bubbleSort([30,14,6,2,80,99]))



// HOW IT WORKS
// -------------------------

// arr = [5, 3, 8, 4, 2];


// -----------------Pass 1 (i = 0)------------------------

// Compare 5 and 3 → Swap → [3, 5, 8, 4, 2]

// Compare 5 and 8 → No swap → [3, 5, 8, 4, 2]

// Compare 8 and 4 → Swap → [3, 5, 4, 8, 2]

// Compare 8 and 2 → Swap → [3, 5, 4, 2, 8] ✅ (8 is in its correct place)


// -----------------Pass 2 (i = 1)--------------------------

// Compare 3 and 5 → No swap → [3, 5, 4, 2, 8]

// Compare 5 and 4 → Swap → [3, 4, 5, 2, 8]

// Compare 5 and 2 → Swap → [3, 4, 2, 5, 8] ✅ (5 is in its correct place)


// ------------------Pass 3 (i = 2)---------------------------

// Compare 3 and 4 → No swap → [3, 4, 2, 5, 8]

// Compare 4 and 2 → Swap → [3, 2, 4, 5, 8] ✅ (4 is in its correct place)


// --------------------Pass 4 (i = 3)----------------------------

// Compare 3 and 2 → Swap → [2, 3, 4, 5, 8] ✅ (Sorted!)


// Output : [2, 3, 4, 5, 8]
