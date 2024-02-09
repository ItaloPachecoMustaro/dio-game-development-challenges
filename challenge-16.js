// The code uses functions 'gets' and 'print' from the 'auxiliary-functions' file.
// It receives the quantity of students, iterates through their numbers, and prints the highest number.

// Importing the 'gets' and 'print' functions from the 'auxiliary-functions' file.
const { gets, print } = require("./auxiliary-functions");

// Reading the number of students from input.
const numberOfStudents = gets();

// Initializing a variable to keep track of the highest value found.
let highestValueFound = 0;

// Iterating through the numbers of the students.
for (let i = 0; i < numberOfStudents; i++) {
  // Reading the drawn number from input.
  const drawnNumber = gets();

  // Checking if the drawn number is higher than the current highest value.
  if (drawnNumber > highestValueFound) {
    highestValueFound = drawnNumber;
  }
}

// Printing the highest value found.
print(highestValueFound);
