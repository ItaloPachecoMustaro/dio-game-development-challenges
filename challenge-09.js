// Function to print the multiplication table for a given number
function printMultiplicationTable(number) {
  // Loop through numbers 1 to 10
  for (let i = 1; i <= 10; i++) {
    // Print the multiplication expression and result
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// Example for Challenge 1
console.log("Challenge 1 - Multiplication Table for 5:");
// Calling the function to print the multiplication table for 5
printMultiplicationTable(5);
