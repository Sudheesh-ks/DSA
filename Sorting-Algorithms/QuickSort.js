// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }

//     const pivot = arr[arr.length - 1]
//     const left =  arr.filter(elem => elem < pivot)
//     const right = arr.filter(elem => elem > pivot)

//     return [...quickSort(left),pivot,...quickSort(right)].flat()
// }


// console.log(quickSort([100,59,220,3,1,6,500]));
