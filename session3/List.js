/**
 * Arrays Vs Strings Vs LinkedList
 * 
 * Arrays
 *     - Built in Datastructures
 *     - Used to store multiple elements in a contiguous memory
 *     - Random Indexing
 *     - Mutable
 *     - Methods: push, pop, shift, unshift, slice, splice, map, reduce, filter, find, sort, ....
 *     - time complexity: insert or delete an element at the beginning of the array or end of the array => O(n)
 */

// let numbers = [1, 2, 3, 4, 5, 6];

// // numbers[5] = 7;

// // insert an element to the end of the array
// numbers.push(8);

// numbers.push(9, 10, 11);

// // remove an element from the end of the array
// numbers.pop();
// numbers.pop();numbers.pop();

// // insert an element at the beginning of the array
// numbers.unshift(0);

// numbers.unshift(-3, -2, -1);

// // remove an element fron the beginning of the array
// numbers.shift();
// numbers.shift();numbers.shift();

// insert an element at any given index of the array
// numbers.splice(9, 0, 7);

// delete an element at any given index
// numbers.splice(4, 1);
// numbers.splice(4, 1);numbers.splice(4, 1);

// // numbers.forEach((value, index, array) => {
// //     console.log(value, index, array);
// // });

// console.log(numbers.map((value, index, array) => {
//     return value ** 2;
// }));

/**
 * Strings are collection characters
 *  - characters could be numbers, alphabets, or symbols
 *  - strings also support indexing
 *  - strings are immutable
 */

// let word = 'apple';
// let word = "apple is a fruit";
// let word = `The basket has ${4} apples which costs ${45 * 4}`; // template literals

// console.log(word);

// let word = 'apple';

// // console.log(word[0]);

// word[1] = 'm';

// console.log(word);

// array and string traversals
// let word = 'apple';

// for loop
// for (let index = 0; index < word.length; index++){
//     console.log(word[index]);
// }

// while loop
// let index = 0;
// while ( index < word.length){
//     console.log(word[index]);
//     index++;
// }

// let index = 0;
// for ( ; index < word.length;){
//     console.log(word[index]);
//     index++;
// }

// do...while loop
// let index = 0;
// do {
//     console.log(word[index]);
//     index++;
// } while (index < word.length);

// for...in loop
// for (let index in word){
//     console.log(word[index]);
// }

// for...of loop
// for (let char of word){
//     console.log(char);
// }

// Linked Lists
/**
 * Linked Lists
 *  - List of nodes/objects linked or chained together
 *  - address of each node should not be continuous
 *  - no indexing system like arrays & strings
 *  - Linear access
 *  - abstract data type - we need to define its behaviour and methods
 *  - time complexity: insertAtHead, insertAtTail, deleteAtTail, deleteAtHead => O(1)
 *  - searching => slower than the array
 */