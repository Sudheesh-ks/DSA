// class TrieNode {
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode()
//             }
//             node = node.children[char]
//         }
//         node.isEndOfWord = true
//     }

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEndOfWord
//     }


//     startsWith(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return true
//     }


//     longestCommonPrefix(){
//         let prefix = ""
//         let node = this.root
//         while(Object.keys(node.children).length === 1 && !node.isEndOfWord){
//             let char = Object.keys(node.children)[0];
//             prefix += char
//             node = node.children[char]
//         }
//         return prefix
//     }


//     autoComplete(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return []
//             }
//             node = node.children[char]
//         }
//         return this.getWords(node,prefix)
//     }

//     getWords(node,prefix){
//         let result = []
//         if(node.isEndOfWord){
//             result.push(prefix)
//         }

//         for(let char in node.children){
//             result.push(...this.getWords(node.children[char],prefix + char))
//         }
//         return result
//     }
// }



// const tree = new Trie()
// tree.insert('apple')
// tree.insert('app')
// tree.insert('apply')
// console.log(tree.search('apple'));
// console.log(tree.startsWith('app'));
// console.log(tree.longestCommonPrefix());
// console.log(tree.autoComplete('app'));



