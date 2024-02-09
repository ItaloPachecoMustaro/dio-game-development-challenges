// Calculating the Body Mass Index (BMI).

const weight = 70;
const height = 1.85;

// Calculating the BMI using the formula: BMI = weight / (height * height);
const bmi = weight / Math.pow(height, 2);

// Checking the BMI and providing a classification.
if (bmi < 18.5) {
  console.log("Underweight!");
} else if (bmi >= 18.5 && bmi <= 25) {
  console.log("Normal weight!");
} else if (bmi >= 25 && bmi <= 30) {
  console.log("Overweight!");
} else if (bmi >= 30 && bmi <= 40) {
  console.log("Obese!");
} else {
  console.log("Severe obesity!");
}
