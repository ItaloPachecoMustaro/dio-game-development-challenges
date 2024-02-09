// Defining the variables necessary for calculating the cost of the trip.

// 1 - Price of fuel per liter.
const fuelPrice = 5.79;

// 2 - Car's average fuel consumption per kilometer.
const kmPerLiter = 12;

// 3 - Distance in kilometers of the trip.
const distanceInKm = 100;

// Calculating the amount of fuel needed for the trip.
const litersConsumed = distanceInKm / kmPerLiter;

// Calculating the cost of the trip by multiplying the amount of liters by the fuel price.
const expense = litersConsumed * fuelPrice;

// Printing to the console the cost of the trip, rounded to two decimal places.
console.log(expense.toFixed(2));
