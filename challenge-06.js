// Function to calculate BMI (Body Mass Index) based on weight and height.
function calculateBMI(weight, height) {
  return weight / Math.pow(height, 2);
}

// Function to classify BMI into different categories.
function classifyBMI(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else if (bmi >= 30 && bmi < 40) {
    return "Obese";
  } else {
    return "Severe obesity";
  }
}

// Main function to demonstrate BMI calculation and classification.
(function () {
  // Sample weight and height values for testing.
  const weight = 75;
  const height = 1.75;

  // Calculating BMI using the provided weight and height.
  const bmi = calculateBMI(weight, height);

  // Displaying the BMI classification based on the calculated BMI.
  console.log(classifyBMI(bmi));
})();
