// // Min Heap


// class minHeap {
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i) {return Math.floor((i - 1)/2);}
//     getLeftChildIndex(i) {return 2 * i + 1}
//     getRightChildIndex(i) {return 2 * i + 2}


//     swap(i,j){
//         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
//     }

//     peek(){
//         return this.heap.length ? this.heap[0] : null
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length - 1)
//     }

//     heapifyUp(){
//         let i = this.heap.length - 1
//         while(i > 0 && this.heap[i] < this.heap[this.getParentIndex(i)]){
//             this.swap(i,this.getParentIndex(i))
//             i = this.getParentIndex(i)
//         }
//     }


//     extractMin(){
//         if(!this.heap.length){
//             return null
//         }

//         if(this.heap.length === 1){
//             return this.heap.pop()
//         }

//         const min = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }


//     heapifyDown(i){
//         let smallest = i
//         let left = this.getLeftChildIndex(i)
//         let right = this.getRightChildIndex(i)

//         if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
//             smallest = left
//         }

//         if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
//             smallest = right
//         }

//         if(smallest !== i){
//             this.swap(i,smallest)
//             this.heapifyDown(smallest)
//         }
//     }


//     remove(value){
//         let index = this.heap.indexOf(value)

//         if(index === -1){
//             return 
//         }

//         this.swap(index,this.heap.length - 1)
//         this.heap.pop()
//         this.heapifyDown(index)
//         this.heapifyUp(index)
//     }
// }


// const heap = new minHeap()
// heap.insert(3);
// heap.insert(1);
// heap.insert(6);
// heap.insert(5);
// heap.insert(2);
// heap.insert(4);


// console.log(heap.extractMin());
// console.log(heap.peek());
// // heap.remove(5)
// console.log(heap.heap);   




// // Heap Sort

// function heapSort(arr) {
//     // Build Min Heap
//     for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
//         heapify(arr, arr.length, i);
//     }

//     // Extract elements one by one
//     for (let i = arr.length - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root with last element
//         heapify(arr, i, 0); // Heapify the reduced heap
//     }

//     return arr
// }


// function heapify(arr, n, i) {
//     let smallest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && arr[left] > arr[smallest]) smallest = left;
//     if (right < n && arr[right] > arr[smallest]) smallest = right;

//     if (smallest !== i) {
//         [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; // Swap
//         heapify(arr, n, smallest); // Recursive heapify
//     }
// }



// console.log(heapSort([2,4,8,1,3,0]));
