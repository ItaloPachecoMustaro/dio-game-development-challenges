// Defining the Car class
class Car {
  // Constructor initializing the class attributes
  constructor(brand, color, fuelConsumption) {
    this.brand = brand;
    this.color = color;
    this.fuelConsumption = fuelConsumption;
  }

  // Method to calculate the cost of a trip based on distance and fuel price
  calculateTripCost(distance, fuelPrice) {
    // Calculate the fuel needed for the trip
    const fuelSpent = distance / this.fuelConsumption;
    // Calculate the total cost of the trip by multiplying the fuel spent by the fuel price
    return fuelSpent * fuelPrice;
  }
}

// Creating an instance of the Car class
const myCar = new Car("Toyota", "Blue", 12);

// Calculating the cost of a 200 km trip with a fuel price of $5.79 per liter.
const tripCost = myCar.calculateTripCost(200, 5.79);

// Displaying the trip cost in the console
console.log(`The cost of the trip is: $${tripCost.toFixed(2)}`);
