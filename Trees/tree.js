// class Node {
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
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
//             this.insertNode(this.root,node);
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


// // DFS
//     preOrder(root){
//         if(root){
//             console.log(root.data);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
            
//         }
//     }


//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.data);
//             this.inOrder(root.right);
//         }
//     }


//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right);
//             console.log(root.data);
//         }
//     }

// // BFS
//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.data);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }


//     min(root){
//         if(!root.left){
//             return root.data
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.data
//         }else{
//             return this.max(root.right)
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

//         if(!root1 ||  !root2){
//             return false
//         }

//         return (root1.data === root2.data)&&
//         this.isIdentical(root1.left,root2.left)&&
//         this.isIdentical(root1.right,root2.right)
//     }


//     secondLargest(root){
//         if(!root || (!root.left && !root.right)){
//             return "The tree must contain atleast two nodes"
//         }

//         let curr = root
//         let parent =  null

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


//     findClosest(target){

//         if (!this.root) return null;

//         let curr = this.root
//         let closest = this.root.data

//         while(curr){
//             if(Math.abs(target - curr.data) < Math.abs(target - closest)){
//                 closest = curr.data
//             }
//             curr = target < curr.data ? curr.left : curr.right
//         }
//         return closest
//     }


//     isValidbst(root,min = -Infinity,max = Infinity){
//         if(!root){
//             return true
//         }

//         if(root.data < min || root.data > max){
//             return false
//         }

//         return this.isValidbst(root.left,min,root.data)&&
//                this.isValidbst(root.right,root.data,max)
//     }
    
// }


// const bst = new BinarySearchTree()
// // console.log(bst.isEmpty());
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// console.log("LCA of 3 and 15:", bst.findLCA(bst.root, 3, 15));
// console.log("Second Largest : ",bst.secondLargest(bst.root));
// console.log(bst.findClosest(9));
// console.log(bst.isValidbst(this.root));


// // bst.insert(7)
// // console.log(bst.search(bst.root,15));
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // bst.postOrder(bst.root)
// // bst.levelOrder()
// // console.log(bst.min(bst.root));
// // console.log(bst.max(bst.root));
// // bst.delete(10)
// bst.levelOrder()



