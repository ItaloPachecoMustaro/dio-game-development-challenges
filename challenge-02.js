// Defining the variables necessary for calculating the cost of the trip.

// 1 - Price of ethanol per liter.
const ethanolPrice = 5.79;

// 2 - Price of gasoline per liter.
const gasolinePrice = 6.66;

// 3 - The type of fuel in your car (can be 'Ethanol' or 'Gasoline').
const fuelType = "Gasoline";

// 4 - Car's average fuel consumption per kilometer.
const kmPerLiters = 10;

// 5 - Distance in kilometers of the trip.
const distanceInKm = 100;

// Calculating the amount of fuel needed for the trip.
const litersConsumed = distanceInKm / kmPerLiters;

// Checking the type of fuel and calculating the cost of the trip.
if (fuelType === "Ethanol") {
  // If the fuel type is ethanol, calculate the cost with the ethanol price.
  const expense = litersConsumed * ethanolPrice;
  console.log(expense.toFixed(2));
} else {
  // If it's not ethanol, assume it's gasoline and calculate the cost with the gasoline price.
  const expense = litersConsumed * gasolinePrice;
  console.log(expense.toFixed(2));
}
