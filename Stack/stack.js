// Stack using Array

// class Stack {
//     constructor(){
//         this.stack = []
//     }

//     push(element){
//         this.stack.push(element);
//     }


//     pop(){
//         if(this.isEmpty()){
//             return "The stack is empty"
//         }
//         return this.stack.pop();
//     }

//     peek(){
//         if(this.isEmpty()){
//             return "The stack is empty"
//         }
//         return this.stack[this.stack.length - 1];
//     }


// getMax(){
//     if(this.isEmpty()){
//     return null
//     }
//     let max = this.stack[0]
//     for(let i = 0; i < this.stack.length; i++){
//         if(this.stack[i] > max){
//             max = this.stack[i]
//         }
//     }
//     return max
// }


//     isEmpty(){
//         return this.stack.length === 0
//     }

//     print(){
//         if(this.isEmpty()){
//             return "Stack is empty";
//         }
//         return this.stack.join(',')
//     }
// }


// const stack = new Stack();
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.pop()
// console.log(stack.peek())
// console.log(stack.isEmpty())
// console.log(stack.print());




// Stack using Linked List


// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null
//         this.size = 0
//     }

//     push(value){
//         const node = new Node(value)
//         if(this.top === null){
//             this.top = node
//         }else{
//             node.next = this.top
//             this.top = node
//         }
//         this.size++
//     }

//     pop(){
//         if(this.size === 0){
//             return null
//         }
//         this.top = this.top.next
//         this.size--
//     }


//     // To find the highest element

//     getMax(){
//         if(this.size === 0){
//             return null
//         }else{
//             let curr = this.top
//             let max = curr.data
//             while(curr){
//                 if(curr.data > max){
//                     max = curr.data
//                 }else{
//                     curr = curr.next;
//                 }
//             }
//             return max
//         }
//     }


//     peek(){
//         if(this.size === 0){
//             return null
//         }
//         return this.top.data
//     }

//     print(){
//         if(this.size === 0){
//             return null
//         }
//         let curr = this.top
//         let values = ""
//         while(curr){
//             values += `${curr.data} `
//             curr = curr.next
//         }
//         console.log(values)
//     }
// }


// const stack = new Stack
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.pop()
// console.log(stack.peek())
// console.log(stack.getMax());
// stack.print()



// class stackQueue {
//     constructor(){
//         this.stack = []
//     }

//     enqueue(value){
//         this.stack.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         this.stack.shift()
//     }

//     isEmpty(){
//         return this.stack.length === 0
//     }


//     print(){
//               if(this.isEmpty()){
//                  return "Stack is empty";
//                 }
//                return this.stack.join(',')
//             }
// }


// const queue = new stackQueue;
// queue.enqueue(10)
// console.log(queue.print())



// To check palindrome or not  

// function isPalindrome(s){
//     const stack = []

//     for(let char of s){
//         stack.push(char);
//     }

//     for(let char of s){
//         if(char !== stack.pop()){
//             return false
//         }
//     }
//     return true;
// }


// console.log(isPalindrome("racecar")); 
// console.log(isPalindrome("hello"));



// Reversing a string 

// function reverseString(str){
//     const stack = []

//     for(let i = 0; i < str.length; i++){
//         stack.push(str[i]);
//     }

//     let reversedStr = "";

//     while(stack.length > 0){
//         reversedStr += stack.pop();
//     }
//     return reversedStr;
// }


// console.log(reverseString("hello"));



// Reversing words of a sentence

// function reverseWords(str){
//     const stack = []
//     let words = str.split(' ');

//     for(let i = 0; i < words.length; i++){
//         stack.push(words[i])
//     }

//     let reversedWords = "";

//     while(stack.length > 0){
//         reversedWords += stack.pop() + ' ';
//     }
//     return reversedWords;
// }


// console.log(reverseWords("Hello world from JavaScript"));



// Sorting a stack

// function sortStack(stack) {
//     const tempStack = [];
  
//     while (stack.length > 0) {
//       const temp = stack.pop(); 
  
//       while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
//         stack.push(tempStack.pop());
//       }
  
//       tempStack.push(temp);
//     }
  
//     while (tempStack.length > 0) {
//       stack.push(tempStack.pop());
//     }
  
//     return stack;
//   }
  
//   // Example usage
//   const stack = [34, 3, 31, 98, 92, 23];
//   console.log(sortStack(stack));


// Sort string using stack

// function sort(str){
//     let stack = [];
//     let temp = [];
    
//     for(let char of str){
//         while(stack.length && stack[stack.length - 1] < char){
//             temp.push(stack.pop())
//         }
        
//         stack.push(char);
        
//         while(temp.length){
//             stack.push(temp.pop());
//         }
//     }
//     let result = "";
//     while(stack.length){
//         result += stack.pop();
//     }
    
//     return result;
// }


// console.log(sort("hello"))
