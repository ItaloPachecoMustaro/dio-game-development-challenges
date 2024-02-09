// Challenge 2: Print Even Numbers
// Function to print even numbers from a given array
function printEvenNumbers(numbers) {
  // Loop through each number in the array
  for (const num of numbers) {
    // Check if the number is even
    if (num % 2 === 0) {
      // Print the even number
      console.log(num);
    }
  }
}

// Example for Challenge 2
console.log("\nChallenge 2 - Even Numbers in [1, 2, 3, 4, 5, 6]:");
// Calling the function to print even numbers in the given array
printEvenNumbers([1, 2, 3, 4, 5, 6]);
