// Challenge 5: Print Averages Requiring Remedial Classes
function printRemedialAverages(averages) {
  // Loop through each average in the array
  for (const avg of averages) {
    // Check if the average is below 5
    if (avg < 5) {
      // Print the average requiring remedial classes
      console.log(`Average requiring remedial classes: ${avg}`);
    }
  }
}

// Example for Challenge 5
const studentAverages = [6, 4, 7, 3, 5];
console.log("\nChallenge 5 - Averages Requiring Remedial Classes:");
// Calling the function to print averages requiring remedial classes in the sample list of averages
printRemedialAverages(studentAverages);
