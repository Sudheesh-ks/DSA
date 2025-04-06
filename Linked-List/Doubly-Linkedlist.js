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

//     removeFromEnd(){
//         if(this.size === 0){
//             return null
//         }
//         const value = this.tail.value
//         if(this.size === 1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             let prev = this.head;
//             while(prev.next !== this.tail){
//                 prev = prev.next;
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//     }


//     removeFromFront(){
//         if(this.size === 0){
//             return null
//         }
//         this.head = this.head.next
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
//             curr.prev.next = curr.next
//             curr.next.prev = curr.prev
//         }
//         this.size--
//     }
    
    
//     reverse(){
//         if(this.size === 0){
//             return null
//         }
//         let curr = this.head
//         let temp = null
//         while(curr){
//             temp = curr.prev
//             curr.prev = curr.next
//             curr.next = temp
            
//             curr = curr.prev
//         }
        
//         temp = this.head
//         this.head = this.tail
//         this.tail = temp
//     }

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
