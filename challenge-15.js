// The provided code defines an array 'inputs' and two functions 'gets' and 'print'.
// The 'gets' function simulates input from the array, and the 'print' function simulates output.

// Array 'inputs' contains predefined values to simulate input.
const inputs = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7];

// Counter variable 'i' is initialized to keep track of the current input index.
let i = 0;

// Function 'gets' simulates input by retrieving values from the 'inputs' array.
function gets() {
  const value = inputs[i];
  i++;
  return value;
}

// Function 'print' simulates output by logging the provided text to the console.
function print(text) {
  console.log(text);
}

// Module exports 'gets' and 'print' functions for external use.
module.exports = { gets, print };
