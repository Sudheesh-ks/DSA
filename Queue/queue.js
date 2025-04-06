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
//         this.front = this.front.next
//         this.size--
//         if(this.size === 0){
//             this.rear = null
//         }
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



// class CircularQueue {
//     constructor(size) {
//         this.queue = new Array(size);
//         this.size = size;
//         this.front = -1;
//         this.rear = -1;
//     }

//     isFull() {
//         return (this.rear + 1) % this.size === this.front;
//     }

//     isEmpty() {
//         return this.front === -1;
//     }

//     enqueue(element) {
//         if (this.isFull()) {
//             return "Queue is full";
//         }
//         if (this.front === -1) {
//             this.front = 0; // Initialize front if empty
//         }
//         this.rear = (this.rear + 1) % this.size;
//         this.queue[this.rear] = element;
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return "Queue is empty";
//         }
//         let removedElement = this.queue[this.front];
//         if (this.front === this.rear) {
//             this.front = this.rear = -1; // Reset queue if last element removed
//         } else {
//             this.front = (this.front + 1) % this.size; // Move front forward
//         }
//         return removedElement;
//     }

//     frontElement() {
//         if (this.isEmpty()) return "Queue is empty";
//         return this.queue[this.front];
//     }

//     rearElement() {
//         if (this.isEmpty()) return "Queue is empty";
//         return this.queue[this.rear];
//     }

//     print() {
//         if (this.isEmpty()) return "Queue is empty";
//         let result = [];
//         let i = this.front;
//         while (true) {
//             result.push(this.queue[i]);
//             if (i === this.rear) break;
//             i = (i + 1) % this.size;
//         }
//         return result.join(",");
//     }
// }

// // **Example Usage**
// const queue = new CircularQueue(3);
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.enqueue(40)); // Queue is full 

// console.log(queue.print()); // 10,20,30 

// queue.dequeue(); // Removes 10
// queue.enqueue(40); // Wraps around

// console.log(queue.print()); // 20,30,40 
// console.log(queue.frontElement()); // 20 
// console.log(queue.rearElement()); // 40 



