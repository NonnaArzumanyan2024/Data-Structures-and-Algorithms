/*

Problem: Prime Number Checker

A number is called a **prime number** if it is divisible only by 1 and itself.
Examples of prime numbers: 2, 3, 5, 7, 11, 13, 17, etc.

Write a function that takes a number and returns `true` if it is prime, or `false` otherwise.

Examples:
Input:  param1 = 17
Output: true

Input:  param1 = 24
Output: false

Time Complexity: O(sqrt(n))
Space Complexity: O(1)

*/


function isPrime(n) {
    // Prime numbers are greater than 1
    if (n <= 1) return false;

    // 2 is the only even prime number
    if (n === 2) return true;

    // All other even numbers are not prime
    if (n % 2 === 0) return false;

    // Check divisibility by odd numbers from 3 up to sqrt(n)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            // If divisible, it's not a prime
            return false;
        }
    }

    // No divisors found: it's prime
    return true;
}


// Example test cases
console.log(isPrime(17)); // true
console.log(isPrime(24)); // false
console.log(isPrime(2));  // true
console.log(isPrime(1));  // false
console.log(isPrime(97)); // true
console.log(isPrime(100)); // false

