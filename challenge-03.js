// Calculating the average of three grades.

const firstGrade = 10;
const secondGrade = 5;
const thirdGrade = 5;

// Calculating the average using the formula: (grade 1 + grade 2 + grade 3) / 3;
const average = (firstGrade + secondGrade + thirdGrade) / 3;

// Checking the average and providing a classification.
if (average < 5) {
  console.log("Failure");
} else if (average >= 5 && average <= 7) {
  console.log("Recovery");
} else {
  console.log("Passed");
}
