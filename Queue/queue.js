// // Queue using Array

// class Queue {
//     constructor(){
//       this.queue = [];  
//     }

//     enqueue(element){
//         this.queue.push(element);
//     }


//     dequeue(){
//         if(this.isEmpty()){
//             return "Queue is empty"
//         }
//         return this.queue.shift();
//     }


//     front(){
//         if(this.isEmpty()){
//             return "Queue is empty"
//         }
//         return this.queue[0];
//     }


//     reverse(){
//         const stack = [];

//         while(!this.isEmpty()){
//             stack.push(this.dequeue());
//         }

//         while(stack.length > 0){
//             this.enqueue(stack.pop())
//         }
//     }


//     isEmpty(){
//         return this.queue.length === 0;
//     }


//     print(){
//         if(this.isEmpty()){
//             return "Queue is empty"
//         }
//         return this.queue.join(',')
//     }
// }
  

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.dequeue()
// queue.reverse()
// console.log(queue.front())
// console.log(queue.print())


// Queue using Linked List

// class Node {
//     constructor(data) {
//         this.data = data 
//         this.next = null
//     }
// }

// class Queue {
//     constructor(){
//         this.front = null
//         this.rear = null
//         this.size = 0
//     }

//     enqueue(value){
//         const node = new Node(value)
//         if(this.size === 0){
//             this.front = this.rear = node
//         }else{
//             this.rear.next = node
//             this.rear = node
//         }
//         this.size++
//     }


//     dequeue(){
//         if(this.size === 0){
//             return null
//         }
//         if(this.size === 1){
//           this.front = this.rear = null;
//         }
//         this.front = this.front.next
//         this.size--
//     }


//     peek(){
//         if(this.size === 0){
//             return null
//         }
//         return this.front.data
//     }

//     print(){
//         if(this.size === 0){
//             return null
//         }
//         let curr = this.front
//         let values = ""
//         while(curr){
//             values += `${curr.data} `
//             curr = curr.next
//         }
//         console.log(values)
//     }
// }


// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.dequeue()
// console.log(queue.peek());

// queue.print()



// Circular Queue
// class Node {
//     constructor(data) {
//         this.data = data 
//         this.next = null
//     }
// }

// class Queue {
//     constructor(){
//         this.front = null
//         this.rear = null
//         this.size = 0
//     }

//     enqueue(value){
//         const node = new Node(value)
//         if(this.size === 0){
//             this.front = this.rear = node
//             node.next = node;
//         }else{
//             node.next = this.front;
//             this.rear.next = node
//             this.rear = node
//         }
//         this.size++
//     }


//     dequeue(){
//       if(this.size === 0) return null

//       if(this.size === 1){
//         this.front = this.rear = null
//       } else {
//         this.front = this.front.next
//         this.rear.next = this.front   
//     }

//     this.size--
//   }


//     peek(){
//         if(this.size === 0){
//             return null
//         }
//         return this.front.data
//     }

//     print(){
//         if(this.size === 0){
//             return null
//         }
//         let curr = this.front
//         let values = ""
//         while(curr){
//             values += `${curr.data} `
//             curr = curr.next
//         }
//         console.log(values)
//     }
// }


// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.dequeue()
// console.log(queue.peek());

// queue.print()



