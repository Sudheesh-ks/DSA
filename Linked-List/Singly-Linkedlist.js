// // Creating a Node
// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// // Creating a Linkedlist
// class linkedList {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }


//     // Adding node at first (PREPEND)
//     prepend(value){
//         const node = new Node(value);
//         if(this.size === 0){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }


//     // Adding nodes at the end(APPEND)
//     append(value){
//         const node = new Node(value);
//         if(this.size === 0){
//             this.head = node
//         }else{
//             let prev = this.head;
//             while(prev.next){
//                 prev = prev.next;
//             }
//             prev.next = node;
//         }
//         this.size++;
//     }


//     // Removing node from the beginning(SHIFT)
//     shift(){
//         if(this.size === 0){
//             console.log('The list is empty');
//             return null;
//         }else{
//             this.head = this.head.next;
//         }
//         this.size--;
//     }


//     // Removing node from the end(POP)
//     pop(){
//         if(this.size === 0){
//             console.log('The list is empty');
//             return null;
//         }
//         if(this.size === 1){
//             this.head = null;
//             this.size--;
//         }else{
//             let curr = this.head;
//             while(curr && curr.next.next){
//                 curr = curr.next;
//             }
//             curr.next = null;
//             this.size--;
//         }
//     }


//     // Inserting a linkedlist
//     insert(value,index){
//         if(index < 0 || index > this.size){
//             console.log('This is not a valid index');
//             return null;
//         }
//         if(index === 0){
//             list.prepend(value);
//         }else{
//             const node = new Node(value);
//             let prev = this.head;
//             for(let i = 0; i < index - 1; i++){
//                 prev = prev.next;
//             }
//             node.next = prev.next;
//             prev.next = node;
//         }
//         this.size++
//     }


//     // To remove node by index
//     removeFrom(index){
//         if(index < 0 || index > this.size){
//             console.log('This is not a valid index');
//             return null;
//         }
//         let removedNode;
//         if(index === 0){
//             removedNode = this.head;
//             this.head = this.head.next;
//             this.size--;
//         }else{
//             let prev = this.head;
//             for(let i = 0; i < index - 1; i++){
//                 prev = prev.next;
//             }
//             removedNode = prev.next;
//             prev.next = removedNode.next;
//         }
//         this.size--;
//     }


//     // Remove node by value
//     removeValue(value){
//         if(this.size === 0){
//             console.log('The list is empty');
//             return null 
//         }
//         let removedNode;
//         if(this.head.data === value){
//             removedNode = this.head;
//             this.head = this.head.next;
//             this.size--;
//         }else{
//             let prev = this.head;
//             while(prev.next && prev.next.data !== value){
//                 prev = prev.next;
//             }
//             removedNode = prev.next;
//             prev.next = removedNode.next;
//             this.size--;
//         }
//         return null;
//     }


//     // Reversing a linkedlist
//     reverse(){
//         let prev = null;
//         let curr = this.head;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         this.head = prev;
//     }


//     // Searching on linkedlist
//     search(value){
//         if(this.size === 0){
//             console.log('The list is empty');
//             return null;
//         }
//         let i = 0;
//         let curr = this.head;
//         while(curr){
//             if(curr.data === value){
//                 return i;
//             }
//             curr = curr.next;
//             i++;
//         }
//         return -1;
//     }


//     // Converting array to linkedlist
//     convertArray(arr){
//         for(let nums of arr){
//             this.append(nums);
//         }
//     }


//     // Converting linkedlist to array
//     listToArray(){
//         let curr = this.head;
//         let array = [];
//         while(curr){
//             array.push(curr.data);
//             curr = curr.next;
//         }
//         return array;
//     }


//     // Insert at both sides of a value
//     insertAtBoth(beforeValue,afterValue,data){
//         if(this.size === 0){
//             console.log('The list is empty');
//             return null;
//         }
//         let nodeBefore = new Node(beforeValue);
//         let nodeAfter = new Node(afterValue);

//         if(this.head.data === data){
//             nodeAfter.next = this.head.next;
//             this.head.next = nodeAfter;
//             nodeBefore.next = this.head;
//             this.head = nodeBefore;
//             this.size += 2;
//         }else{
//             let prev = null;
//             let curr = this.head;
//             while(curr && curr.data !== data){
//                 prev = curr;
//                 curr = curr.next;
//             }
//             if(curr.data === data){
//                 nodeAfter.next = curr.next;
//                 curr.next = nodeAfter;
//                 prev.next = nodeBefore;
//                 nodeBefore.next = curr;
//                 this.size += 2;
//             }else{
//                 console.log('the data you entered is not found in the list');
//                 return null;
//             }
//         }
//     }


//     // To remove duplicates from a Sorted linkedlist
//     removeSortedDuplicates(){
//         if(this.size === 0){
//             console.log('The list is empty');
//             return null;
//         }
//         let curr = this.head;
//         if(curr.data === curr.next.data){
//             curr.next = curr.next.next;
//         }else{
//             curr = curr.next;
//         }
//     }


//     // To remove duplicates from an unsorted linkedlist
//     removeDuplicates(){
//         if(this.size === 0){
//             console.log('The list is empty');
//             return null;
//         }
//         let curr = this.head;
//         let visited = new Set();
//         let prev = null;
//         while(curr){
//             if(visited.has(curr.data)){
//                 prev.next = curr.next;
//             }else{
//             visited.add(curr.data);
//             prev = curr;
//         }
//         curr = curr.next;
//         }
//     }


//     // To check if linkedlist is palindrome or not
//     isPalindrome(){
//           if(this.size === 0 || this.size === 1){
//             return true;
//           }
//           let arr = [];
//           let curr = this.head;
//           while(curr){
//             arr.push(curr.data);
//             curr = curr.next;
//           }
//           let left = 0;
//           let right = arr.length - 1;
//           while(left < right){
//             if(arr[left] !== arr[right]){
//                 return false;
//             }
//             left++;
//             right--;
//           }
//           return true;
//     }


//     // To find the middle node
//     findMiddle(){
//         if(this.size === 0){
//             console.log('The list is empty');
//             return null;
//         }
//         let slow = this.head;
//         let fast = this.head;
//         while(fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow.data;
//     }


//     // To delete the middle element
//     removeMiddle(){
//         if(this.size === 0){
//             console.log('The list is empty');
//             return null;
//         }
//         let slow = this.head;
//         let fast = this.head;
//         let prev = null;
//         while(fast.next){
//             prev = slow;
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         prev.next = slow.next;
//     }


//     // Finding the nth node from the end
//     findNthFromEnd(n){
//         let first = this.head;
//         let second = this.head;

//         for(let i = 0; i < n; i++){
//             if(first === null){
//                 console.log('This list is shorter than n');
//                 return null;
//             }
//             first = first.next;
//         }
//         while(first !== null){
//             first = first.next;
//             second = second.next;
//         }
//         return second.data;
//     }


//     removeNthFromEnd(n){
//         let first = this.head;
//         let second = this.head;

//         for(let i = 0; i < n; i++){
//             if(first === null){
//                 console.log('This list is shorter than n');
//                 return null;
//             }
//             first = first.next;
//         }
//         if(!first){
//             this.head = this.head.next;
//             return;
//         }
//         while(first.next){
//             first = first.next;
//             second = second.next;
//         }
//          second.next = second.next.next;
//     }


//     // Remove odd numbers
//     removeOdd(){
//         if(this.size === 0){
//             return null;
//         }
//         if(this.head.data % 2 !== 0){
//             this.head = this.head.next;
//         }
//         let curr = this.head;
//         while(curr && curr.next){
//             if(curr.next.data % 2 !== 0){
//                 curr.next = curr.next.next;
//             }
//             curr = curr.next;
//         }
//     }


//     // Sorting a linkedlist in ascending order
//     sortAscending(){
//         const arr = this.listToArray();
//         arr.sort((a,b) => a - b);
//         this.convertArray(arr);
//     }


//     // Sort a linkedlist in discending order
//     sortDescending(){
//         const arr = this.listToArray();
//         arr.sort((a,b) => b - a);
//         this.convertArray(arr);
//     }


//     // Merge two linkedlist
//     merge(listToMerge){
//         const arr1 = this.listToArray();
//         const arr2 = listToMerge.listToArray();
//         let mergedArray = arr1.concat(arr2);
//         this.convertArray(mergedArray);
//     }


//     // To find if a cycle exists or not
//     hasCycle(){
//         if(this.size === 0){
//             return false;
//         }
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         if(slow === fast){
//             return true;
//         }
//         return false;
//     }


//     createLoop(position){
//         if(this.size === 0){
//             return
//         }
//         let loopNode = null
//         let curr = this.head
//         let index = 0

//         while(curr.next){
//             if(index === position){
//                 loopNode = curr;
//             }
//             curr = curr.next
//             index++
//         }
//         curr.next = loopNode
//     }

//     removeLoop(loopNode){
//         let ptr1 = this.head;
//         let ptr2 = loopNode;
//         while(ptr1 !== ptr2){
//             ptr1 = ptr1.next
//             ptr2 = ptr2.next
//         }
//         ptr2.next = null;
//     }


//     mergeSortedList(list1,list2){
//         let mergeSort = []
//         let curr1 = list1.head;
//         let curr2 = list2.head;
//         while(curr1 && curr2){
//             if(curr1.data < curr2.data){
//                 mergeSort.push(curr1.data);
//                 curr1 = curr1.next;
//             }else{
//                 mergeSort.push(curr2.data);
//                 curr2 = curr2.next;
//             }
//         }
    
//         while(curr1){
//             mergeSort.push(curr1.data);
//             curr1 = curr1.next;
//         }
    
//         while(curr2){
//             mergeSort.push(curr2.data);
//             curr2 = curr2.next;
//         }
//         return mergeSort;
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


// const list = new linkedList;
// list.prepend(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(3)
// // list.shift();
// // list.pop();
// // list.removeFrom(2)
// list.insert(25,2);
// list.insert(35,4);
// list.append(10)
// list.removeValue(35);
// list.convertArray([50,60,70]);
// // list.reverse();
// // console.log(list.search(25));
// // console.log(list.listToArray());
// list.insertAtBoth(0,0,25);
// // list.removeSortedDuplicates();
// // list.removeDuplicates();
// // console.log(list.isPalindrome());
// // console.log(list.findMiddle());
// // list.removeMiddle()
// // console.log(list.findNthFromEnd(4));
// // list.removeNthFromEnd(4);
// // list.sortAscending();


// // const list2Merge = new linkedList;
// // list.append(90);
// // list.append(80);
// // list.merge(list2Merge);
// // console.log(list.hasCycle())
// // list.removeOdd();
// // console.log(list.mergeSortedList(list,list2Merge));
// list.print()