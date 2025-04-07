// Factorial of a number
// function factorial(n){
//     if(n === 0 || n === 1){
//         return 1
//     }else{
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(4));


// // Remove duplicates
// // function removeDuplicates(arr,unique = [],index = 0){
// //     if(index === arr.length){
// //         return unique;
// //     }
// //     if(!unique.includes(arr[index])){
// //         unique.push(arr[index]);
// //     }
// //     return removeDuplicates(arr,unique,index + 1);
// // }


// // console.log(removeDuplicates([1,2,1,3,4,5,3,4]));



// // Remove a char from a string
// // function removeChar(str,charToRemove,index = 0,result = ""){
// //     if(index === str.length){
// //         return result;
// //     }
// //     if(str[index] !== charToRemove){
// //         result += str[index];
// //     }
// //     return removeChar(str,charToRemove,index + 1,result);
// // }

// // console.log(removeChar("Hello Recursion","R"));


// // // Print the first 10 elements of fibonacci using recursion
// // function fibonacci(n){
// //     if(n <= 1){
// //         return n;
// //     }else{
// //         return fibonacci(n - 1) + fibonacci(n - 2);
// //     }
// // }


// // for(let i = 0; i < 10; i++){
// //     console.log(fibonacci(i));
// // }


// // Sum of an array using recursion
// // function sum(arr,index = 0){
// //     if(index === arr.length){
// //         return 0;
// //     }
// //     return arr[index] + sum(arr,index + 1);
// // }

// // console.log(sum([1,2,3,4]));


// // // To reverse a string using recursion
// // function reverseStr(str){
// //     if(str === ""){
// //         return str;
// //     }
// //     return reverseStr(str.slice(1)) + str[0];
// // }

// // console.log(reverseStr("hai bro"));



// Reverse each word in a sentence

// function reverseWord(word) {
//   if (word.length <= 1) return word;
//   return reverseWord(word.slice(1)) + word[0];
// }

// function reverseEachWord(sentence) {
//   return sentence
//     .split(' ')
//     .map(word => reverseWord(word))
//     .join(' ');
// }


// const input = "I love programming";
// const output = reverseEachWord(input);
// console.log(output); // Output: "I evol gnimmargorp"



// function rmchar(str,char,index = 0,result = ""){
//     if(index === str.length){
//         return result;
//     }
//     if(str[index] !== char){
//         result += str[index];
//     }
//     return rmchar(str,char,index + 1,result);
// }

// console.log(rmchar("Hello Recursion","R"));



// function reverseWords(str) {
//     let result = ""; // This will store the final result (all words reversed).
//     let word = ""; // This will temporarily store each word as we process it.

//     // Loop through each character in the string, including one extra loop for the last word.
//     for (let i = 0; i <= str.length; i++) {
//         // If we encounter a space or reach the end of the string:
//         if (i === str.length || str[i] === " ") {
//             // Reverse the current word by looping through it backward.
//             for (let j = word.length - 1; j >= 0; j--) {
//                 result += word[j]; // Add each character of the reversed word to the result.
//             }
//             if (i !== str.length) { // If it's not the end of the string:
//                 result += " "; // Add a space after the reversed word.
//             }
//             word = ""; // Reset `word` for the next word.
//         } else {
//             word += str[i]; // If it's not a space, keep building the current word.
//         }
//     }

//     return result; // Return the final string with all reversed words.
// }

// // Example usage
// const input = "hello world example";
// const output = reverseWords(input);
// console.log(output); // "olleh dlrow elpmaxe"



// function removeElement(arr,value){
//     const index = arr.indexOf(value);
//     if(index !== -1){
//         arr.splice(index,1);
//     }
//     return arr;
// }

// console.log(removeElement([1,2,3,4],3));


// function rmvelem(arr,value){
//     return arr.filter(item => item !== value);
// }

// console.log(rmvelem([1,2,3,4],3));



// function subArray(arr){
//     if(arr.length === 0){
//         return [];
//     }
//     let maxArray = []
//     let currentArray = [arr[0]]
//     for(let i = 1; i < arr.length;i++){
//         if(arr[i] > arr[i -1]){
//             currentArray.push(arr[i]);
//         }else{
//             if(currentArray.length > maxArray.length){
//             maxArray = [...currentArray];
//         }
//         currentArray = [arr[i]];
//     }
// }

//          if(currentArray.length > maxArray.length){
//             maxArray = currentArray;
//         }

//         return maxArray
// }


// console.log(subArray([1, 2, 3, 1, 2, 3, 4]))
