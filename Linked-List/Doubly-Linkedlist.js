// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class doublyLinkedlist {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }


//     prepend(value){
//         const node = new Node(value);
//         if(this.size === 0){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++;
//     }

//     append(value){
//         const node = new Node(value);
//         if(this.size === 0){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//         this.size++
//     }

//     removeTail(){
//         if(this.size === 0){
//           return "list is empty"
//         }
    
//         if(this.size === 1){
//           this.head = null;
//           this.tail = null;
//         }else{
//           this.tail = this.tail.prev;
//           this.tail.next = null;
//        }
//         this.size--;
//      }


//     removeFromFront(){
//         if(this.size === 0){
//             return null
//         }
//         this.head = this.head.next
//         this.head.prev = null;
//         this.size--
//     }

//     removeValue(value){
//         if(this.size === 0){
//             return null
//         }
//         if(this.head.data === value){
//             this.head = this.head.next;
//             this.head.prev = null;
//         }else{
//             let curr = this.head
//             while(curr && curr.data !== value){
//                 curr = curr.next
//             }
//             let prev = curr.prev
//             prev.next = curr.next
//         }
//         this.size--;
//     }
    
    
//     removeByIndex(index){
//         if(index < 0 || index > this.size){
//             return null
//         }
//         if(index === 0){
//             this.head = this.head.next;
//             this.head.prev = null
//         }else{
//             let curr = this.head
//             let currIndex = 0;
//             while(currIndex !== index){
//                 curr = curr.next 
//                 currIndex++;
//             }
//             let prev = curr.prev;
//             prev.next = curr.next;
//         }
//         this.size--
//     }


// Remove from middle
 // removeMiddle(){
 //        if(!this.head) return null;
//        let slow = this.head;
 //        let fast = this.head;
 //        while(fast && fast.next){
 //            slow = slow.next;
 //            fast = fast.next.next;
 //        }
 //        let mid = slow;
 //        if(mid.prev) mid.prev.next = mid.next;
 //        if(mid.next) mid.next.prev = mid.prev;

//        if(mid === this.head) this.head = mid.next;
 //        if(mid === this.tail) this.tail = mid.prev;

 //        return mid.data; 
 //    }
    
    
// reverse(){
//     let curr = this.head;
//     let temp = null;

//     while(curr){
//         temp = curr.prev;
//         curr.prev = curr.next;
//         curr.next = temp;

//         curr = curr.prev;
//     }

//     if(temp){
//         this.head = temp.prev;
//     }
// }


//     // Printing the linkedlist
//     print(){
//         if(this.size === 0){
//             console.log('The linked list is empty');
//         }else{
//             let curr = this.head;
//             let values = "";
//             while(curr){
//                 values += `${curr.data} `;
//                 curr = curr.next;
//             }
//             console.log(values);
//         }
//     }
// }


// const list = new doublyLinkedlist;
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.print()
