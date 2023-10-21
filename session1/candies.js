// /**
//  * @param {number} totalCandies
//  * @param {number[]} candies
//  * @param {number} i
//  * @return {boolean}
//  */
// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     // make an assumption; that the totalCandies is greater than all the other kids candies
//     let assumption = true;

//     // traverse the candies array except the index i <- index
//     for(let index=0; index<candies.length; index++){
//         // check if the totalCandies is smaller than any of the candies[index]
//         if(totalCandies < candies[index]){
//             // if true => update the assumption
//             assumption = false;
//         }
//     }
    
//     // return the assumption
//     return assumption;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// // time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // initialize an empty boolean array <- result
//     let result = [];

//     // traverse the array candies <- i
//     for(let i=0; i<candies.length; i++){
//         // for every candy, candies[i], find the totalCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is greater than all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push the result true to the result variable
//             result.push(true);
//         } else {
//             // else => push false
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

/*
    Problem Understanding

    n kids with candies

    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]
        
    extraCandies = 3

    result = [T, T, T, F, T] of length n
           i [0][1][2][3][4]
    
    Validation

    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]
        
    extraCandies = 3

    result[0] = true
    i = 0,
        totalCandies = candies[i] + extracandies = 2 + 3 = 5
        totalCandies > [2, 3, 5, 1, 3]
        5 >=[3, 5, 1, 3]
             T  T  T  T => true


*/


// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//             }
//         }
//     }
//     return assumption;
// }

// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             assumption = false;
//         }
//     }
//     return assumption;
// }

// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             assumption = false;
//             break;
//         }
//     }
//     return assumption;
// }

// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

// // time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     for(let index in candies){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

// time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     for(let index in candies){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }


// // time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(isGreater(totalCandies, candies, i)){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies); // O(N)
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies); // O(N)
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies); // O(N)
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies); // O(N)
//     candies.forEach(candy => {
//         result.push(candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies); // O(N)
//     result = candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies); // O(N)
//     return candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies); // O(N)
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// time complexity: O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};