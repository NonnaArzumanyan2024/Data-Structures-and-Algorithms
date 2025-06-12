/*

Problem Description:
Given a circular array `nums`, return an array where each element at index `i`
contains the next greater number after `nums[i]`. If no such number exists, return -1.

Example:
Input:  [1, 2, 3, 8, 5]
Output: [2, 3, 8, -1, 8]

Constraints:
- The input array is circular, meaning after the last index, it continues from the start.
- Time complexity must be O(n)
- Space complexity must be O(n)

Requirements:
- Use a Monotonic Stack

*/



function nextGreaterElements(nums) {
    const result = new Array(nums.length).fill(-1); // Start with -1s (default when no greater found)
    const stack = []; // Stack will hold indices, not values

    for (let i = 0; i < 2 * nums.length; ++i) {
        let num = nums[i % nums.length]; // Circular access using modulo

        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            const index = stack.pop();
            result[index] = num; // Found next greater for index 
        }

        if (i < nums.length) {
            stack.push(i); // Only push indices from the first pass
        }
    }

    return result;
}



// Example usage:
console.log(nextGreaterElements([1, 2, 3, 8, 5])); // Output: [2, 3, 8, -1, 8]

