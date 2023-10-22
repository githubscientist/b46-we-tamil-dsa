/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity = O(N^2)
// var twoSum = function(nums, target) {
//     // find all the pairs of the nums array
//     for(let i=0; i<nums.length-1; i++){
//         for(let j=i+1; j<nums.length; j++){
//             // for every pair, check if the sum equals target
//             if(nums[i] + nums[j] == target){
//                 // if true >> return the indices of the nums
//                 return [i, j];
//             }
//         }
//     }
// };

// Time Complexity = O(N)
var twoSum = function(nums, target) {
    // prepare a 2d array with nums and its indices
    let numsWithIndices = nums.map((num, index) => [index, num]); // O(N)

    // sort the given array
    numsWithIndices.sort((a, b) => a[1] - b[1]); // O(N)

    let first = 0;
    let last = nums.length - 1;

    // O(N-1)
    while(first < last){
        let sum = numsWithIndices[first][1] + numsWithIndices[last][1];
        if(sum == target){
            return [numsWithIndices[first][0], numsWithIndices[last][0]];
        } else if(sum < target){
            first++;
        } else if(sum > target){
            last--;
        }
    }
};

/*
    T(N) = N + N + 2 + N-1
         = 3N + 1
         = 3N
         = O(N)
*/

/*
Test Case 1:

After storing their indices
    [[0, 2], [1, 7], [2, 11], [3, 15]]

After Sorting
    [[0, 2], [1, 7], [2, 11], [3, 15]]

two pointers
    first = 0
    last = 3

    2 + 15 => 
        17 == 9 x
        17 < 9 x
        17 > 9 true last--
    
    2 + 11 => 
        13 == 9 x
        13 < 9 x
        13 > 9 true last--

    2 + 7 => 
        9 == 9 true return the indices


    Test Case 2:

    [[0, 3], [1, 2], [2, 4]]

    [[1, 2], [0, 3], [2, 4]]

    Test Case 3:
    
    [[0, 3], [1, 3]]

    [[0, 3], [1, 3]]
*/  