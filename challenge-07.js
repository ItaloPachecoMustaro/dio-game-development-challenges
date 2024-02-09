class Person {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  calculateBMI() {
    return this.weight / Math.pow(this.height, 2);
  }
}

// Creating an instance of the Person class.
const jose = new Person("José", 70, 1.75);

// Asking José to calculate and display his BMI.
console.log(`${jose.name}'s BMI is: ${jose.calculateBMI().toFixed(2)}`);
