// Challenge 6: Print Highest Grade
function printHighestGrade(grades) {
  // Use the Math.max() function to find the highest grade in the array
  const highestGrade = Math.max(...grades);
  // Print the highest grade
  console.log(`The highest grade is: ${highestGrade}`);
}

// Example for Challenge 6
const studentGrades = [85, 92, 78, 94, 88];
console.log("\nChallenge 6 - Highest Grade:");
// Calling the function to print the highest grade in the sample list of grades
printHighestGrade(studentGrades);
