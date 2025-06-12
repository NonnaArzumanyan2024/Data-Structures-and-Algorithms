/*

Problem Description:
You are given an encoded string where patterns are in the form of k[encoded_string],
and the goal is to decode it such that the string inside the brackets is repeated k times.

Example:
Input:  "3[a]2[bc]"       Output: "aaabcbc"
Input:  "3[a2[c]]"        Output: "accaccacc"

Constraints:
- The input contains only digits, lowercase English letters, and square brackets.
- The encoded string is always valid and properly nested.

Requirements:
- Time complexity: O(n)
- Space complexity: O(n)

*/



function decodeString(str) {
    let stack = [];
    let currentNum = 0;
    let currentStr = "";

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            // Build the full number (handles multi-digit numbers)
            currentNum = currentNum * 10 + Number(str[i]);
        } else if (str[i] === "[") {
            // Push current state to stack and reset
            stack.push([currentNum, currentStr]);
            currentStr = "";
            currentNum = 0;
        } else if (str[i] === "]") {
            // Pop the repeat count and previous string
            let [prevNum, prevStr] = stack.pop();
            currentStr = prevStr + currentStr.repeat(prevNum);
        } else {
            // Add character to current string
            currentStr += str[i];
        }
    }

    return currentStr;
}



// Test cases
console.log(decodeString("3[a]2[bc]"));     // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]"));      // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"

