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
//         return total % this.size;
//     }

//     set(key,value){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKeyIndex = bucket.find(item => item[0] === key);
//             if(sameKeyIndex){
//                 sameKeyIndex[1] = value;
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(bucket){
//             let sameKeyIndex = bucket.find(item => item[0] === key);
//             if(sameKeyIndex){
//                 return sameKeyIndex[1];
//             }
//         }
//     }

//     remove(key){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(bucket){
//             let sameKeyIndex = bucket.findIndex(item => item[0] === key);
//             if(sameKeyIndex !== -1){
//                 bucket.splice(sameKeyIndex,1)
//             }
//         }
//     }

//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }


// const table = new HashTable(50);
// table.set("name","sudhi");
// table.set("age",22)
// table.set("mane",21)
// console.log(table.get("mane"));
// table.remove("mane")
// table.display()


// ------------- OPEN ADDRESSING ----------------------

// === LINEAR PROBING ===
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
//         return total % this.size;
//     }

//     set(key,value){
//         let index = this.hash(key);
//         while(this.table[index] && this.table[index][0] !== key){
//             index = (index + 1) % this.size;
//         }
//         this.table[index] = [key,value];
//     }

//     get(key){
//         let index = this.hash(key);
//         while (this.table[index]) {
//             if(this.table[index][0] === key){
//                 return this.table[index][1];
//             }
//             index = (index + 1) % this.size;
//         }
//     }

//     remove(key){
//         let index = this.hash(key);
//         let deleted;
//         while (this.table[index]) {
//             if(this.table[index] !== deleted && this.table[index][0] === key){
//                 this.table[index] = deleted;
//                 return
//             }
//             index = (index + 1) % this.size;
//         }
//     }

//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }


// const table = new HashTable(50);
// table.set("name","sudhi");
// table.set("age",22)
// table.set("mane",21)
// console.log(table.get("mane"));
// table.remove("mane")
// table.display()



// ===QUADRATIC PROBING ===
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
//         return total % this.size;
//     }

//     set(key,value){
//         let index = this.hash(key);
//         let i = 1;
//         while(this.table[index] && this.table[index][0] !== key){
//             i++;
//             index = (this.hash(key) + i * i) % this.size;
//         }
//         this.table[index] = [key,value];
//     }

//     get(key){
//         let index = this.hash(key);
//         let i = 1;
//         while (this.table[index]) {
//             if(this.table[index][0] === key){
//                 return this.table[index][1];
//             }
//             i++;
//             index = (this.hash(key) + i * i) % this.size;
//         }
//     }

//     remove(key){
//         let index = this.hash(key);
//         let deleted;
//         let i = 1;
//         while (this.table[index]) {
//             if(this.table[index] !== deleted && this.table[index][0] === key){
//                 this.table[index] = deleted;
//                 return
//             }
//             i++;
//             index = (this.hash(key) + i * i) % this.size;
//         }
//     }

//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }


// const table = new HashTable(50);
// table.set("name","sudhi");
// table.set("age",22)
// table.set("mane",21)
// table.set("amen", 3);
// console.log(table.get("mane"));
// table.remove("mane")
// table.display()




// === DOUBLE HASHING ===
// class HashTable {
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash1(key){
//         let total = 0;
//         for(let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size;
//     }

//     hash2(key){
//         let total = 0;
//         for(let i= 0; i < key.length; i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key,value){
//         let index = this.hash1(key);
//         let step = this.hash2(key);
//         let i = 1;
//         while(this.table[index] && this.table[index][0] !== key){
//             index = (this.hash1(key) + i * step) % this.size;
//             i++;
//         }
//         this.table[index] = [key,value];
//     }

//     get(key){
//        let index = this.hash1(key);
//         let step = this.hash2(key);
//         let i = 1;
//         while (this.table[index]) {
//             if(this.table[index][0] === key){
//                 return this.table[index][1];
//             }
//             index = (this.hash1(key) + i * step) % this.size;
//             i++
//         }
//     }

//     remove(key){
//        let index = this.hash1(key);
//         let step = this.hash2(key);
//         let deleted;
//         let i = 1;
//         while (this.table[index]) {
//             if(this.table[index] !== deleted && this.table[index][0] === key){
//                 this.table[index] = deleted;
//                 return
//             }
//             index = (this.hash1(key) + i * step) % this.size;
//             i++
//         }
//     }

//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }


// const table = new HashTable(50);
// table.set("name","sudhi");
// table.set("age",22)
// table.set("mane",21)
// table.set("amen", 3);
// console.log(table.get("mane"));
// table.remove("mane")
// table.display()
// console.log("Get 'name' after removal:", table.get("name"));


 
