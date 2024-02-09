// Challenge 4: Populate List with Even Numbers
// Function to create a list containing all even numbers in the range from 10 to 50
function populateEvenNumbersList() {
  // Initialize an empty array to store even numbers
  const evenNumbersList = [];
  // Loop through numbers from 10 to 50 with a step of 2 (to include only even numbers)
  for (let i = 10; i <= 50; i += 2) {
    // Add the even number to the list
    evenNumbersList.push(i);
  }
  // Return the populated list of even numbers
  return evenNumbersList;
}

// Example for Challenge 4
console.log("\nChallenge 4 - List with Even Numbers from 10 to 50:");
// Calling the function to populate and print the list of even numbers
console.log(populateEvenNumbersList());
