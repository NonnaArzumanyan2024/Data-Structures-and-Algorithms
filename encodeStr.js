/*

Problem: Run-Length Encoding (String Compression)

Write a function that compresses a given string using run-length encoding.
In this encoding:
- For each group of repeating characters, replace the group with the count followed by the character.
- If a character appears only once, it is kept as-is (i.e., the count is omitted).

Examples:
Input:  "aaaabbbcdd"   → Output: "4a3bc2d"
Input:  "aaabcc"       → Output: "3abc2c"
Input:  "abc"          → Output: "abc"

Time Complexity: O(n)
Space Complexity: O(n)

*/



function encodeString(str) {
    // Return an empty string if input is empty or undefined
    if (!str) return "";

    let result = "";
    let count = 1;

    // Loop through the string starting from the second character
    for (let i = 1; i < str.length; ++i) {
        // If current character is the same as the previous one, increase count
        if (str[i] === str[i - 1]) {
            ++count;
        } else {
            // Append the count (if > 1) and the previous character
            result += (count > 1 ? count : "") + str[i - 1];
            count = 1; // Reset count for the new character
        }
    }

    // Handle the last group of characters (which won't be added inside the loop)
    result += (count > 1 ? count : "") + str[str.length - 1];

    return result;
}


// Example test cases
console.log(encodeString("aaaabbbcdd")); // Output: "4a3bc2d"
console.log(encodeString("aaabcc"));     // Output: "3abc2c"
console.log(encodeString("abc"));        // Output: "abc"
console.log(encodeString("aabbcc"));     // Output: "2a2b2c"
console.log(encodeString(""));           // Output: ""

