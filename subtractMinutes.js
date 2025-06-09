/*
  Task: Subtract Minutes from a Given Time

  Description:
  Given a time string in the format "HH:MM" and a number `min` representing 
  the number of minutes to subtract, write a function that returns the new time 
  after subtraction. The result must also be in "HH:MM" format with leading zeros 
  if needed (e.g., "03:07" instead of "3:7").

  Constraints:
  - 0 < min < 5000
  - Input time is always valid and follows the "HH:MM" 24-hour format
  - The function must correctly handle cases where the subtraction moves the time
    to the previous day (e.g., subtracting 50 minutes from "00:30" should return "23:40")

  Example:
  Input: time = "12:30", min = 50
  Output: "11:40"

  Time Complexity: O(1)
  Space Complexity: O(1)

*/


function subMinutes(time, min){
    
    // Validate that min is within the allowed range (1 to 4999)
    if (min <= 0 || min >= 5000) {
        throw new Error("min must be between 1 and 4999");
    }

    // Split the "HH:MM" string into hours and minutes, and convert to numbers
    let [hours, minutes] = time.split(":").map(Number);

    // Convert the full time into total minutes since 00:00
    let totalMinutes = hours * 60 + minutes;

    // Subtract the given minutes and use modulo to stay within 0–1439 range (a single day)
    totalMinutes = (totalMinutes - min) % (24 * 60);

    // If result is negative, add 1440 (24 hours) to make it a valid time again
    if (totalMinutes < 0) {
        totalMinutes += 24 * 60;
    }

    // Convert totalMinutes back into HH and MM with leading zeros if needed
    let newHours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
    let newMinutes = String(totalMinutes % 60).padStart(2, "0");

    // Return the final formatted time
    return `${newHours}:${newMinutes}`;
}

// Example test cases
console.log(subMinutes("12:30", 50));    // 11:40
console.log(subMinutes("03:12", 4002));  // 08:30
console.log(subMinutes("07:42", 2364));  // 16:18

