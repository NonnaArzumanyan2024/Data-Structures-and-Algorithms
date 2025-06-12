/*
Problem Description:
Given a string containing only bracket characters: (), {}, []
Check whether the brackets are balanced:
Each opening bracket must have a corresponding closing bracket of the same type and in correct order.

Examples:
Input:  "ABC([]){}"   => Output: true
Input:  "ABC{([]){}"  => Output: false

Constraints:
- Input string may contain letters and other characters besides brackets.
- Only the characters (), {}, [] are considered for balance check.

Requirements:
- Time complexity: O(n)
- Space complexity: O(n) — we use a stack to track open brackets.
*/


function isBalancedBrackets(text) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < text.length; ++i) {

        // If it's an opening bracket, push to stack
        if (text[i] === '(' || text[i] === '{' || text[i] === '[') {
            stack.push(text[i]);
        }

        // If it's a closing bracket
        else if (text[i] === ')' || text[i] === '}' || text[i] === ']') {
            // If stack is empty or top of stack doesn't match
            if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[text[i]]) {
                return false;
            }
            stack.pop(); // Bracket matched and removed
        }
    }

    // If stack is empty, all brackets were matched
    return stack.length === 0;
}


// Test cases
console.log(isBalancedBrackets("ABC([]){}"));     // true
console.log(isBalancedBrackets("ABC{([]){}"));    // false
console.log(isBalancedBrackets("{[()]}"));        // true
console.log(isBalancedBrackets("{[(])}"));        // false
console.log(isBalancedBrackets("([]{})"));        // true

