/*

Problem Description:
This function checks whether the parentheses in a given text are balanced.
A string is considered to have balanced parentheses if:
- Every opening parenthesis '(' has a corresponding closing ')'
- The parentheses are correctly nested.

Example:
Input:  "h(dd)c()"      => Output: true
Input:  "h)(dd)c()"     => Output: false
Input:  "(()"           => Output: false
Input:  "a(bc(de)e)"    => Output: true

Constraints:
- The input is a string containing letters, symbols, and parentheses.
- Only the characters '(' and ')' affect the balance.
- The string length can be up to O(n)

Requirements:
- Time complexity: O(n)
- Space complexity: O(n) (uses a stack)

*/



function isBalanced(text) {
    let stack = []; // Stack to track opening parentheses

    for (let i = 0; i < text.length; ++i) {
        if (text[i] === "(") {
            stack.push(text[i]); // Push opening parenthesis to stack
        } else if (text[i] === ")") {
            if (stack.length === 0) {
                // No matching opening parenthesis
                return false;
            }
            stack.pop(); // Pop the matching opening parenthesis
        }
    }

    // If stack is empty, all parentheses were matched correctly
    return stack.length === 0;
}



// Test cases
console.log(isBalanced("h(dd)c()"));     // true
console.log(isBalanced("h)(dd)c()"));    // false
console.log(isBalanced("((test))"));     // true
console.log(isBalanced("(()"));          // false
console.log(isBalanced("a(bc(de)e)"));   // true


