/*
Daily Temperatures
You are given an array of integers `nums` where `nums[i]` represents the temperature on the `i-th` day.
Return an array `result` such that `result[i]` is the number of days you have to wait after the `i-th` day 
to get a warmer temperature.
If there is no future day for which this is possible, set `result[i]` to 0.

Example:
Input:  nums = [17, 20, 20, 18, 24]
Output: [1, 3, 2, 1, 0]

Explanation:
- Day 0: 17 → wait 1 day → 20
- Day 1: 20 → wait 3 days → 24
- Day 2: 20 → wait 2 days → 24
- Day 3: 18 → wait 1 day → 24
- Day 4: 24 → no warmer day → 0

Time Complexity: O(n)
Space Complexity: O(n)
*/



function dailyTemperatures(nums) {
  // Create a result array of the same length as nums, filled with 0s.
  // Each index will eventually hold the number of days until a warmer temperature.
  const result = new Array(nums.length).fill(0);

  // Stack to keep indices of temperatures waiting for a warmer day
  const stack = [];

  // Loop through each temperature in the array
  for (let i = 0; i < nums.length; i++) {
    // While the stack is not empty and the current temperature is higher
    // than the temperature at the index stored on top of the stack
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      // Pop the top index from the stack — we’ve found a warmer day for this index
      const prevIndex = stack.pop();

      // Calculate how many days later the warmer temperature occurs
      result[prevIndex] = i - prevIndex;
    }

    // Push the current index onto the stack — it may find a warmer day later
    stack.push(i);
  }

  // Return the final result array with days until warmer temperatures
  return result;
}

const arr = [17,20,20,18,24];
console.log(dailyTemp(arr)); //[1,3,2,1,0]

