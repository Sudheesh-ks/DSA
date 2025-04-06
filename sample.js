// // class Node {
// //     constructor(data){
// //         this.data = data
// //         this.left = null
// //         this.right = null
// //     }
// // }

// // class BinarySearchTree {
// //     constructor(){
// //         this.root = null
// //     }

// //     isEmpty(){
// //         return this.root === null
// //     }


// //     insert(value){
// //         const node = new Node(value)
// //         if(this.isEmpty()){
// //             this.root = node
// //         }else{
// //             this.insertNode(this.root,node)
// //         }
// //     }

// //     insertNode(root,node){
// //         if(node.data < root.data){
// //             if(root.left === null){
// //                 root.left = node
// //             }else{
// //                 this.insertNode(root.left,node)
// //             }
// //         }else{
// //             if(root.right === null){
// //                 root.right = node
// //             }else{
// //                 this.insertNode(root.right,node)
// //             }
// //         }
// //     }


// //     search(root,value){
// //         if(!root){
// //             return false
// //         }
// //         if(root.data === value){
// //             return true
// //         }else if(value < root.data){
// //             return this.search(root.left,value)
// //         }else{
// //             return this.search(root.right,value)
// //         }
// //     }



// //     preOrder(root){
// //         console.log(root.data);
// //         this.preOrder(root.left)
// //         this.preOrder(root.right)
// //     }

// //     inOrder(root){
// //         this.inOrder(root.left)
// //         console.log(root.data);
// //         this.inOrder(root.right);        
// //     }


// //     postOrder(root){
// //         this.postOrder(root.left)
// //         this.postOrder(root.right)
// //         console.log(root.data);
// //     }



// //     levelOrder(){
// //         const queue = []
// //         queue.push(this.root)
// //         while(queue.length){
// //             let curr = queue.shift()
// //             console.log(curr.data);
// //         if(curr.left){
// //             queue.push(curr.left)
// //         }
// //         if(curr.right){
// //             queue.push(curr.right)
// //         }
// //     }
// // }

// //  min(root){
// //     if(!root.left){
// //         return root.data
// //     }else{
// //         return this.min(root.left)
// //     }
// //  }

// //  max(root){
// //     if(!root.right){
// //         return root.data
// //     }else{
// //         return this.max(root.right)
// //     }
// //  }


// //  delete(value){
// //     this.root = this.deleteNode(this.root,value)
// //  }

// //  deleteNode(root,value){
// //     if(!root){
// //         return root
// //     }

// //     if(value < root.data){
// //         root.left = this.deleteNode(root.left,value)
// //     }else if(value > root.data){
// //         root.right = this.deleteNode(root.right,value)
// //     }else{

// //     if(!root.left && !root.right){
// //         return null
// //     }
// //     if(!root.left){
// //         return root.right
// //     }else if(!root.right){
// //         return root.left
// //     }

// //     root.value = this.min(root.right)
// //     root.right = this.deleteNode(root.right,root.data)
// //  }
// //  return root
// // }


// // findLca(root,node1,node2){
// //     if(!root){
// //         return null
// //     }
// //     if(node1 < root.data && node2 < root.data){
// //         return this.findLca(root.left,node1,node2)
// //     }
// //     if(node1 > root.data && node2 > root.data){
// //         return this.findLca(root.right,node1,node2)
// //     }
// //     return root.data
// // }

// // isIdentical(root1,root2){
// //     if(!root1 && !root2){
// //         return true
// //     }

// //     if(!root1 || !root2){
// //         return false
// //     }

// //     return (root1.data === root2.data)&&
// //     this.isIdentical(root1.left,root2.left)&&
// //     this.isIdentical(root1.right,root2.right)
// // }


// //     secondLargest(root){
// //         if(!root || (!root.left && !root.right)){
// //             return "The tree must contain two nodes"
// //         }

// //         let curr = this.root
// //         let parent = null

// //         while(curr.right){
// //             parent = curr
// //             curr = curr.right
// //         }
// //         if(curr.left){
// //             return this.findMax(curr.left)
// //         }
// //         return parent.data
// //     }

// //     findMax(node){
// //         let curr = node
// //         while(curr.right){
// //             curr = curr.right
// //         }
// //         return curr.data
// //     }



// //     findClosest(target){
// //         if(!this.root){
// //             return null
// //         }

// //         let curr = this.root
// //         let closest = this.root.data

// //         while(curr){
// //             if(Math.abs(target - curr.data) < Math.abs(target - closest)){
// //                  closest = curr.data
// //             }
// //             curr = target < curr.data ? curr.left : curr.right
// //         }
// //         return closest
// //     }



// //     isValidBST(root,min = -Infinity,max = Infinity){
// //         if(!root){
// //             return true
// //         }

// //         if(root.data <  min || root.data > max){
// //             return false
// //         }

// //         return this.isValidBST(root.left,min,root.data)&&
// //         this.isValidBST(root.right,root.data,max)
// //     }


// //     kthSmallest(root,k){
// //         let count = 0
// //         let result = null
         
// //         function inOrderTraversal(node){
// //             if(!node || result !== null){
// //                 return
// //             }

// //             inOrderTraversal(node.left)
// //             count++
// //             if(count === k){
// //                 result = node.data
// //                 return
// //             }
// //             inOrderTraversal(node.right)
// //         }
// //         inOrderTraversal(root)
// //         return result
// //     }


// //     height(root){
// //         if(!root){
// //             return null
// //         }

// //         let leftHeight = this.height(root.left)
// //         let rightHeight = this.height(root.right)

// //         return Math.max(leftHeight,rightHeight) + 1
// //     }
// // }


// // const bst = new BinarySearchTree()
// // bst.insert(10)
// // bst.insert(5)
// // bst.insert(3)
// // bst.insert(15)
// // // bst.delete(15)
// // bst.levelOrder()
// // console.log(bst.secondLargest(bst.root));
// // console.log(bst.findClosest(2));
// // console.log(bst.kthSmallest(bst.root, 2));
// // console.log(bst.height(bst.root));

// // console.log("LCA of 3 and 15:", bst.findLca(bst.root, 3, 5));
// // console.log(bst.min(bst.root));
// // console.log(bst.max(bst.root));




// // class TrieNode {
// //     constructor(){
// //         this.children = {}
// //         this.isEndOfWord = false
// //     }
// // }

// // class Trie {
// //     constructor(){
// //         this.root = new TrieNode();
// //     }

// //     insert(word){
// //         let node = this.root
// //         for(let char of word){
// //             if(!node.children[char]){
// //                 node.children[char] = new TrieNode()
// //             }
// //             node = node.children[char]
// //         }
// //         node.isEndOfWord = true
// //     }


// //     search(word){
// //         let node = this.root
// //         for(let char of word){
// //             if(!node.children[char]){
// //                 return false
// //             }
// //             node = node.children[char]
// //         }
// //         return node.isEndOfWord;
// //     }

// //     startsWith(prefix){
// //         let node = this.root
// //         for(let char of prefix){
// //             if(!node.children[char]){
// //                 return false
// //             }
// //             node = node.children[char]
// //         }
// //         return true
// //     }


// //     longestCommonPrefix(){
// //         let prefix = ""
// //         let node = this.root
// //         while(Object.keys(node.children).length === 1 && !node.isEndOfWord){
// //             let char = Object.keys(node.children)[0];
// //             prefix += char
// //             node = node.children[char]
// //         }
// //         return prefix
// //     }
// // }




// class MinHeap {
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i) {return Math.floor((i - 1)/2);}
//     getLeftChildIndex(i) {return 2 * i + 1;}
//     getRightChildIndex(i) {return 2 * i + 2;}

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


//     heapifyUp(i){
//         while(i > 0 && this.heap[i].freq < this.heap[this.getParentIndex(i)].freq){
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

//         if(left < this.heap.length && this.heap[left].freq < this.heap[smallest].freq){
//             smallest = left
//         }

        
//         if(right < this.heap.length && this.heap[right].freq < this.heap[smallest].freq){
//             smallest = right
//         }

//         if(smallest !== i){
//             this.swap(i,smallest)
//             this.heapifyDown(smallest)
//         }
//     }


//         remove(value){
//             let index = this.heap.indexOf(value)
//             if(index === -1){
//                 return null
//             }

//             this.swap(index,this.heap.length - 1)
//             this.heap.pop()
//             this.heapifyDown(index)
//             this.heapifyUp(index)
//         }
// }


// // const heap = new MinHeap()
// // heap.insert(10)
// // heap.insert(5)
// // heap.insert(15)
// // heap.insert(18)
// // heap.insert(3)
// // console.log(heap.heap);
// // console.log(heap.peek());
// // console.log(heap.heap[heap.getParentIndex(4)]);




// // class MaxHeap {
// //     constructor(){
// //         this.heap = []
// //     }


// //     getParentIndex(i) {return Math.floor((i - 1)/2);}
// //     getLeftChildIndex(i) {return 2 * i + 1}
// //     getRightChildIndex(i) {return 2 * i + 2}

// //     swap(i,j){
// //         [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
// //     }

// //     peek(){
// //         return this.heap.length ? this.heap[0] : null
// //     }


// //     insert(value){
// //         this.heap.push(value)
// //         this.heapifyUp(this.heap.length - 1)
// //     }

// //     heapifyUp(i){
// //         while(i > 0 && this.heap[i] > this.heap[this.getParentIndex(i)]){
// //             this.swap(i,this.getParentIndex(i))
// //             i = this.getParentIndex(i)
// //         }
// //     }


// //     extractMax(){
// //         if(!this.heap.length){
// //             return null
// //         }

// //         if(this.heap.length === 1){
// //             return this.heap.pop()
// //         }

// //         const max = this.heap[0]
// //         this.heap[0] = this.heap.pop()
// //         this.heapifyDown(0)
// //         return max
// //     }


// //     heapifyDown(i){
// //         let largest = i
// //         let left = this.getLeftChildIndex(i)
// //         let right = this.getRightChildIndex(i)

// //         if(left < this.heap.length && this.heap[left] > this.heap[largest]){
// //             largest = left
// //         }

// //         if(right < this.heap.length && this.heap[right] > this.heap[largest]){
// //             largest = right
// //         }


// //         if(largest !== i){
// //             this.swap(i,largest)
// //             this.heapifyDown(largest)
// //         }
// //     }


// //     remove(value){
// //         let index = this.heap.indexOf(value)
// //         if(index === -1){
// //             return null
// //         }

// //         this.swap(index,this.heap.length - 1)
// //         this.heap.pop()
// //         this.heapifyDown(index)
// //         this.heapifyUp(index)
// //     }

// // }


// // const heap1 = new MaxHeap()
// // heap1.insert(10)
// // heap1.insert(5)
// // heap1.insert(15)
// // heap1.insert(18)
// // heap1.insert(3)
// // console.log(heap1.heap);
// // console.log(heap1.peek());
// // console.log(heap1.heap[heap1.getParentIndex(4)]);


// // function heapSort(arr){
// //     for(let i = Math.floor((arr.length/2)-1); i >= 0; i--){
// //         heapify(arr,arr.length,i)
// //     }

// //     for(let i = arr.length - 1; i > 0; i--){
// //         [arr[0],arr[i]] = [arr[i],arr[0]]
// //         heapify(arr,i,0)
// //     }

// //     return arr
// // }

// // function heapify(arr,n,i){
// //     let largest = i
// //     let left = 2 * i + 1
// //     let right = 2 * i + 2

// //     if(left < n && arr[left] > arr[largest]){
// //         largest = left
// //     }

// //     if(right < n && arr[right] > arr[largest]){
// //         largest = right
// //     }

// //     if(largest !== i){
// //         [arr[i],arr[largest]] = [arr[largest],arr[i]]
// //         heapify(arr,largest,n)
// //     }
// // }


// // console.log(heapSort([4,5,3,8,10,1]));

// // function topKFreq(nums,k){
// //     let freqMap = new Map()

// //     for(let num of nums){
// //         freqMap.set(num,(freqMap.get(num) || 0) + 1)
// //     }

// //     let minHeap = new MinHeap()

// //     for(let [num,freq] of freqMap){
// //         minHeap.insert({num,freq})

// //         if(minHeap.heap.length > k){
// //             minHeap.extractMin()
// //         }
// //     }

   

// //     return minHeap.heap.map(entry => entry.num)
// // }

// // console.log(topKFreq([1, 1, 1, 2, 2, 3, 4, 4, 4, 4], 2)); // Output: [1, 4]


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set();
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }

//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }


//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return 
//         }

//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }


//    shortestPath(start,end){
//     let queue = [[start]]
//     let visited = new Set([start])


//     while(queue.length > 0){
//         let path = queue.shift()
//         let node = path[path.length - 1]

//         if(node === end){
//             return path
//         }

//         for(let neighbour of this.adjacencyList[node]){
//             if(!visited.has(neighbour)){
//                 visited.add(neighbour)
//                 queue.push([...path,neighbour])
//             }
//         }
//     }
//     return null
//    }


//    clone(){

//     let newGraph = new Graph()

//     for(let vertex of Object.keys(this.adjacencyList)){
//         newGraph.addVertex(vertex)
//     }

//     for(let vertex of Object.keys(this.adjacencyList)){
//         for(let neighbour of this.adjacencyList[vertex]){
//             newGraph.addEdge(vertex,neighbour)
//         }
//     }
//     return newGraph
//    }

//     display(){
//         for(let vertex of Object.keys(this.adjacencyList)){
//             console.log(vertex + '->' + [...this.adjacencyList[vertex]]);
            
//         }
        
//     }
// }



// const graph = new Graph()
// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);
// graph.addVertex(4);
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(3, 4);
// graph.display()
// console.log(graph.adjacencyList);
// console.log(graph.shortestPath(1, 4)); // Output: [1, 2, 3, 4]
// console.log(graph.shortestPath(1, 5)); // Output: null (5 doesn’t exist)
// console.log(graph.shortestPath(1, 1));

// console.log(graph.clone());



// class Node{
//     constructor(data){
//         this.data = data
//         this.left = null
//         this.right = null
//     }
// }


// class Tree {
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.data < root.data){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }


//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.data === value){
//                 return true
//             }else if(value < root.data){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }


//     preOrder(root){
//         if(root){
//             console.log(root.data);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.data
//         }else{
//            return this.min(root.left)
//         }
//     }


//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.data)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }



//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root === null){
//             return root
//         }
//         if(value < root.data){
//             root.left = this.deleteNode(root.left,value)
//         }else if(value > root.data){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.data = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.data)
//         }
//         return root
//     }


//     findLCA(root,node1,node2){
//         if(!root){
//             return null
//         }
//         if(node1 < root.data && node2 < root.data){
//             return this.findLCA(root.left,node1,node2)
//         }

//         if(node1 > root.data && node2 > root.data){
//             return this.findLCA(root.right,node1,node2)
//         }
//         return root.data
//     }


//     isIdentical(root1,root2){
//         if(!root1 && !root2){
//             return true
//         }

//         if(!root1 || !root2){
//             return false
//         }

//         return (root1.data ===  root2.data)&&
//         this.isIdentical(root1.left,root2.left)&&
//         this.isIdentical(root1.right,root2.right)
//     }


//     secondLargest(root){
//         if(!root || (!root.left && !root.right)){
//             return "the tree must contain 2"
//         }

//         let curr = this.root
//         let parent = null

//         while(curr.right){
//             parent = curr
//             curr = curr.right
//         }

//         if(curr.left){
//             return this.findMax(curr.left)
//         }
//         return parent.data
//     }

//     findMax(node){
//         let curr = node
//         while(curr.right){
//             curr = curr.right
//         }
//         return curr.data
//     }


//     isBalanced(root){
//         if(!root){
//             return true
//         }

//         function height(node){
//             if(!node){
//                 return 0
//             }

//             let left = height(node.left)
//             let right = height(node.right)

//             if(left === -1 || right === -1 || Math.abs(left - right) > 1){
//                 return -1
//             }

//             return Math.max(left,right) + 1
//         }
//         return height(root) !== -1
//     }


//     kthSmallest(root,k){
        
//         let count = 0
//         let result = null

//         function inOrderTraversal(node){
//             if(!node || result !== null){
//                 return
//             }

//             inOrderTraversal(node.left)
//             count++
//             if(count === k){
//                 result = node.data
//                 return 
//             }

//             inOrderTraversal(node.right)
//         }
//         inOrderTraversal(root)
//         return result
//     }


//     find3rdLargest(root){
//         let count = 0;
//         let result = null

//         function reverseInOrder(node){
//             if(!node){
//                 return
//             }


//             reverseInOrder(node.right)

//             count++
//             if(count === 3){
//                 result = node.data
//                 return
//             }


//             reverseInOrder(node.left)
//         }
//         reverseInOrder(root)
//         return result
//     }
// }


// const tree = new Tree
// tree.insert(10)
// tree.insert(15)
// tree.insert(5)
// tree.insert(3)
// tree.delete(15)
// tree.levelOrder()