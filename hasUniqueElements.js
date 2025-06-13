/*
  
  Problem Description:
  Given an array of integers, check if it contains only unique elements.
  Return true if all elements are distinct (no duplicates), otherwise return false.

  Example:
  Input:  [1, 2, 3, 4]
  Output: true

  Input:  [1, 2, 2, 4]
  Output: false

  Requirements:
  - Time Complexity: O(n)
  - Space Complexity: O(n)
  - Use a Hash Table (Set or Object) to detect duplicates

*/



function hasUniqueElements(nums) {
    let hash = new Set();

    for (let i = 0; i < nums.length; ++i) {
        if (hash.has(nums[i])) {
            return false;
        }
        hash.add(nums[i]);
    }

    return true;
}



//test cases:
console.log(hasUniqueElements([1, 2, 3, 4]));      // true
console.log(hasUniqueElements([1, 2, 2, 4]));      // false
console.log(hasUniqueElements([7, 8, 9, 10, 11])); // true
console.log(hasUniqueElements([5, 5, 5, 5]));      // false

