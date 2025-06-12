/*

Problem Description:
Given a sorted array of integers `nums` and an integer `target`, 
find the indices of the two numbers such that they add up to the target.

Example:
Input:  nums = [1, 2, 4, 5, 9, 9], target = 9
Output: [2, 3]  // Because nums[2] + nums[3] = 4 + 5 = 9

Constraints:
- Array is sorted in increasing order
- Exactly one valid solution exists
- Indices are zero-based

Requirements:
- Use two-pointer approach
- Time complexity must be O(n)
- Space complexity must be O(1)

*/


function twoSumSorted(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++; // Move left pointer to the right to increase sum
        } else {
            right--; // Move right pointer to the left to decrease sum
        }
    }

    // If no solution is found (though problem guarantees one), return [-1, -1]
    return [-1, -1];
}



// Example usage
console.log(twoSumSorted([1, 2, 4, 5, 9, 9], 9)); // Output: [2, 3]

