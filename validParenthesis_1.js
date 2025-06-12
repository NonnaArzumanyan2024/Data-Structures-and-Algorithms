/*

Problem Description:
This function checks whether the parentheses in a given text are balanced.
Balanced means every opening parenthesis '(' has a corresponding closing ')'
and they are properly nested.

Example:
Input:  "h(dd)c()"
Output: true

Input:  "h)(dd)c()"
Output: false

Input:  "a(bc(de)e)"
Output: true

Constraints:
- The input is a string of any length.
- The string may contain letters, numbers, symbols, and parentheses.
- Only parentheses '(' and ')' are checked for balance.

Requirements:
- Time complexity must be O(n)
- Space complexity must be O(1)

*/



function isBalanced(text) {
    let balance = 0; // Keeps track of open parentheses

    for (let i = 0; i < text.length; ++i) {
        if (text[i] === "(") {
            ++balance; // Found an opening parenthesis
        } else if (text[i] === ")") {
            --balance; // Found a closing parenthesis

            if (balance < 0) {
                // More closing than opening parentheses
                return false;
            }
        }
    }

    // If balance is 0, all parentheses are matched
    return balance === 0;
}



// Test cases
console.log(isBalanced("h(dd)c()"));     // true
console.log(isBalanced("h)(dd)c()"));    // false
console.log(isBalanced("((test))"));     // true
console.log(isBalanced("(()"));          // false
console.log(isBalanced("a(bc(de)e)"));   // true


