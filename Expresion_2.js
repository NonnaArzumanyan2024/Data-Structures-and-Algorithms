/*

  Problem Description:
    Given a string representing an arithmetic expression containing only
    the operators +, -, *, and / applied to positive integers,
    write a function that evaluates the expression and returns its numeric result.

  Example:
    Input:  "2+8-7*2+7"
    Output: 3

    Input:  "4+2-18*5"
    Output: -84

  Constraints:
    - The input string contains only digits (0-9), operators (+, -, *, /), and no parentheses.
    - Operators follow standard precedence: multiplication and division before addition and subtraction.
    - Division is integer division truncated toward zero.
    - No invalid characters or malformed expressions.

  Requirements:
    - Time Complexity: O(n), where n is the length of the input string.
    - Space Complexity: O(n), due to use of a stack for intermediate values.

*/



function evaluateExpression(str) {
    let stack = [];
    let currentNum = 0;
    let sign = '+'; // Previous operator, start with '+'

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (!isNaN(ch) && ch !== ' ') {
            // Build multi-digit number
            currentNum = currentNum * 10 + Number(ch);
        }

        // If current char is operator or last char in string
        if ((isNaN(ch) && ch !== ' ') || i === str.length - 1) {
            switch (sign) {
                case '+':
                    stack.push(currentNum);
                    break;
                case '-':
                    stack.push(-currentNum);
                    break;
                case '*':
                    stack.push(stack.pop() * currentNum);
                    break;
                case '/':
                    let last = stack.pop();
                    let result = last / currentNum;
                    // Truncate towards zero
                    stack.push(result < 0 ? Math.ceil(result) : Math.floor(result));
                    break;
            }

            sign = ch;
            currentNum = 0;
        }
    }

    return stack.reduce((acc, val) => acc + val, 0);
}

// Example usage:
console.log(evaluateExpression("2+8-7*2+7"));    // Output: 3
console.log(evaluateExpression("4+2-18*5"));     // Output: -84
console.log(evaluateExpression("10+20/5*3-2"));  // Output: 22

