/*

Potential Election Winners
You are given an array A where A[i] represents the number of votes candidate i has received. You are also given an integer M, which represents the number of people who have not yet voted.
A candidate has a chance to win if:
- It's possible for them to surpass the current maximum number of votes by receiving some or all of the remaining votes.
- Or, if no votes are left (M === 0), they are tied for the maximum and hence could still be considered a potential winner.

Example:
Input:  A = [4, 5, 8, 9, 3], M = 2
Output: [2, 3]

Input:  A = [1, 2, 3], M = 0
Output: [2]

Input:  A = [3, 3, 3], M = 0
Output: [0, 1, 2]

Time Complexity: O(n)
Space Complexity: O(n)

*/


function potentialElectionWnners(A, M) {
    // Initialize the result array to hold the indices of potential winners
    let result = [];

    // Step 1: Find the current maximum number of votes
    let maxVotes = A[0];
    for (let i = 0; i < A.length; ++i) {
        if (A[i] > maxVotes) {
            maxVotes = A[i];
        }
    }

    // Step 2: Check which candidates have a chance to win
    for (let i = 0; i < A.length; ++i) {
        // A candidate is a potential winner if:
        // - They can surpass the max with remaining votes
        // - OR no votes left and they already have the maximum
        if (A[i] + M > maxVotes || (M === 0 && A[i] === maxVotes)) {
            result.push(i);
        }
    }

    // Return the list of candidate indices who have a chance to win
    return result;
}


//Examples
console.log(potentialElectionWnners([4, 5, 8, 9, 3], 2)); //[2, 3]
console.log(potentialElectionWnners([1, 2, 3], 0));       //[2]
console.log(potentialElectionWnners([3, 3, 3], 0));       //[0, 1, 2]

