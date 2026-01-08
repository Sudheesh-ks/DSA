// ------------ SEPERATE CHAINING --------------

// class HashTable {
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key){
//         let total = 0;
//         for(let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         // this.table[index] = value;
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 sameKeyItem[1] = value
//             }else{
//                 bucket.push([key,value]);
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         // return this.table[index];
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 return sameKeyItem[1];
//             }
//         }
//     }

//     remove(key){
//         const  index = this.hash(key)
//         // this.table[index] = undefined;
//         const bucket = this.table[index]
//         if(bucket){
//             const  sameKeyItem = bucket.find(item => item[0] === key);
//             if(sameKeyItem){
//                 bucket.splice(bucket.indexOf(sameKeyItem[1]),1);
//             }
//         }
//     }

//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }


// const table = new HashTable(50)

// table.set("name","Bruce");
// table.set("age",38)
// table.display();
// console.log(table.get("name"));

// table.remove("name");
// table.display()


// ------------- OPEN ADDRESSING ----------------------



// === DOUBLE HASHING ===
// class HashTable {
//     constructor(size) {
//         this.table = new Array(size).fill(null);
//         this.size = size;
//     }

//     // Primary hash function (h1)
//     hash1(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     // Secondary hash function (h2) - Ensures step is never zero
//     hash2(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return (total % (this.size - 1)) + 1;
//     }

//     // Insert key-value pair using double hashing
//     set(key, value) {
//         let index = this.hash1(key);
//         let step = this.hash2(key);
//         let i = 0;

//         while (this.table[(index + i * step) % this.size] !== null) {
//             let [existingKey] = this.table[(index + i * step) % this.size];
//             if (existingKey === key) {
//                 // Update existing key
//                 this.table[(index + i * step) % this.size] = [key, value];
//                 return;
//             }
//             i++;
//             if (i >= this.size) return; // Table is full
//         }
//         this.table[(index + i * step) % this.size] = [key, value];
//     }

//     // Retrieve value by key using double hashing
//     get(key) {
//         let index = this.hash1(key);
//         let step = this.hash2(key);
//         let i = 0;

//         while (this.table[(index + i * step) % this.size] !== null) {
//             let [existingKey, value] = this.table[(index + i * step) % this.size];
//             if (existingKey === key) {
//                 return value;
//             }
//             i++;
//             if (i >= this.size) return undefined; // Key not found
//         }
//         return undefined;
//     }

//     // Remove key-value pair using double hashing
//     remove(key) {
//         let index = this.hash1(key);
//         let step = this.hash2(key);
//         let i = 0;

//         while (this.table[(index + i * step) % this.size] !== null) {
//             let [existingKey] = this.table[(index + i * step) % this.size];
//             if (existingKey === key) {
//                 this.table[(index + i * step) % this.size] = null;
//                 return;
//             }
//             i++;
//             if (i >= this.size) return; // Key not found
//         }
//     }

//     // Display hash table
//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i] !== null) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }

// // Example usage
// const table = new HashTable(10);
// table.set("name", "Bruce"); fjff
// table.set("age", 38);
// table.display();
// console.log("Get 'name':", table.get("name"));

// table.remove("name");
// table.display();
// console.log("Get 'name' after removal:", table.get("name"));


 
