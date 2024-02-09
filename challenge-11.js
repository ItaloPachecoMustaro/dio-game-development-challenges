// Challenge 3: Print Names Starting with "V"
// Function to print names from a given array that start with the letter "V"
function printNamesStartingWithV(names) {
  // Loop through each name in the array
  for (const name of names) {
    // Check if the first letter of the name is 'V' (case insensitive)
    if (name.charAt(0).toUpperCase() === "V") {
      // Print the name starting with 'V'
      console.log(name);
    }
  }
}

// Example for Challenge 3
console.log("\nChallenge 3 - Names Starting with 'V':");
// Calling the function to print names starting with 'V' in the given array
printNamesStartingWithV(["Alice", "Bob", "Victor", "Eva"]);
