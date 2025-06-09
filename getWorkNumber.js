/*

  Task: Determine the global index of a musical piece given its catalog code.

  In the 17th–19th centuries, it was not very common to name classical compositions.
  Instead, they were often referred to by catalog codes like "op.27,no.2".

  In this task, you're given a catalog code string in the format "op.X,no.Y",
  where:
    - X is the catalog number,
    - Y is the piece number in that catalog.

  Each catalog contains at most 5 works.
  Your job is to calculate the total number of works before and including this one.
  In other words, return the global index of this musical piece.

  Example:
    Input: "op.27,no.2"
    Output: 132

  Time Complexity: O(n), where n is the length of the input string
  Space Complexity: O(1)

*/



function getWorkNumber(code) {
    // Step 1: Split the input string into catalog part and number part
    let [opPart, noPart] = code.split(",");

    // Step 2: Extract the numeric values from "op.XX" and "no.YY"
    let opNumber = parseInt(opPart.slice(3));   // "op.27" → 27
    let noNumber = parseInt(noPart.slice(3));   // "no.2"  → 2

    // Step 3: Calculate the global index of the composition
    // Each catalog has 5 works: (opNumber - 1) * 5 counts how many works before this catalog
    // Then add the position of the current work within its catalog
    return (opNumber - 1) * 5 + noNumber;
}

// Example test case
console.log(getWorkNumber("op.27,no.2")); // Output: 132
console.log(getWorkNumber("op.1,no.1"));  // Output: 1
console.log(getWorkNumber("op.100,no.5")); // Output: 500
