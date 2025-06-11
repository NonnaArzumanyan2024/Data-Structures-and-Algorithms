/*
  Problem Description:
  Given a string that represents an arithmetic expression containing 
  only addition (+) and subtraction (-) operations between positive integers, 
  write a function that evaluates and returns the numerical result.

  Example:
    Input:  "2+8-7+17"
    Output: 20

  Constraints:
    - The input string may contain multi-digit numbers.
    - The expression will only contain '+' and '-' operators.
    - There will be no parentheses or other operators.

  Requirements:
    - Time Complexity: O(n)
    - Space Complexity: O(1)
*/

function expression(str) {
    let stack = [];           // Stack to store signed numbers
    let currentNum = 0;       // To build the current number from characters
    let sign = 1;             // Sign of the current number: +1 or -1

    for (let i = 0; i < str.length; ++i) {
        if (!isNaN(str[i])) {
            // Build multi-digit number from characters
            currentNum = currentNum * 10 + Number(str[i]);
        }

        // If the character is an operator (+ or -) or we're at the last character
        if (isNaN(str[i]) && str[i] !== " " || i === str.length - 1) {
            // Push the signed number to the stack
            stack.push(sign * currentNum);
            currentNum = 0; // Reset for the next number

            // Update sign for the next number
            if (str[i] === "+") sign = 1;
            if (str[i] === "-") sign = -1;
        }
    }

    // Sum all values in the stack to get the final result
    return stack.reduce((sum, val) => sum + val, 0);
}

// Example usage
console.log(expression("123+1-100"));  // Output: 24
console.log(expression("12+2-4"));     // Output: 10

