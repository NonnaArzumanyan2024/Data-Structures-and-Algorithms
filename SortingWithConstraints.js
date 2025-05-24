/*

Sort an array of numbers in ascending order using selection sort while keeping all -1s in their original positions.
Example:
Input:  [1, 3, -1, 5, 2, -1, 4, 6]
Output: [1, 2, -1, 3, 4, -1, 5, 6]
Algorithm: Selection Sort
Time Complexity: O(n^2)
Space Complexity: O(1)

 */

function sortWithFixedNegatives(nums) {
  // Iterate over the array from start to second-to-last element
  for (let i = 0; i < nums.length - 1; ++i) {
    // Skip if current element is -1 (fixed position)
    if (nums[i] === -1) continue;

    // Assume current index is the minimum
    let minIndex = i;

    // Search for the smallest element in the rest of the array
    for (let j = i + 1; j < nums.length; ++j) {
      // Skip if the element is -1 (do not move it)
      if (nums[j] === -1) continue;

      // Update minIndex if a smaller element is found
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the current element with the smallest found, if different
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }

  // Return the sorted array with -1s in place
  return nums;
}


const input = [1, 3, -1, 5, 2, -1, 4, 6];
console.log(sortWithFixedNegatives(input)); //[1, 2, -1, 3, 4, -1, 5, 6]

