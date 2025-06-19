/*

Problem Description:
A "happy number" is a number defined by the following process:
- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle.
- If the process ends in 1, the number is happy. Otherwise, it is not.

Example:
Input: 19
Process: 19 → 1² + 9² = 1 + 81 = 82
         82 → 8² + 2² = 64 + 4 = 68
         68 → 6² + 8² = 36 + 64 = 100
         100 → 1² + 0² + 0² = 1 → Happy Number
Output: true

Constraints:
- Input is a positive integer
- A cycle means the number is not happy

Requirements:
- Time complexity must be O(log n)
- Space complexity must be O(log n)
- Use a Set to detect cycles

*/


function isHappy(num) {
    const hash = new Set(); // Stores previously seen numbers to detect cycles

    while (num !== 1 && !hash.has(num)) {
        hash.add(num);        // Mark current number as seen
        num = getNext(num);     // Get the sum of squares of digits
    }

    return num === 1;         // If we end at 1, it's a happy number
}

function getNext(num) {
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;        // Get last digit
        sum += digit * digit;      // Add square of digit
        num = Math.floor(num / 10);    // Remove last digit
    }

    return sum;
}


// Example usage
console.log(isHappy(19)); // true
console.log(isHappy(2));  // false

