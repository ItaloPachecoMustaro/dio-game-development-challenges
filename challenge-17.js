// Function to apply a discount to a given value
function applyDiscount(value, discount) {
  return value - value * (discount / 100);
}

// Function to apply interest to a given value
function applyInterest(value, interest) {
  return value + value * (interest / 100);
}

// Initial price tag value
const priceTag = 100;

// Payment method (1, 2, 3, or any other value)
const paymentMethod = 4;

// Checking the payment method and applying discounts or interest accordingly
if (paymentMethod === 1) {
  // Applying a 10% discount for payment method 1
  console.log(applyDiscount(priceTag, 10));
} else if (paymentMethod === 2) {
  // Applying a 15% discount for payment method 2
  console.log(applyDiscount(priceTag, 15));
} else if (paymentMethod === 3) {
  // No discount or interest for payment method 3
  console.log(priceTag);
} else {
  // Applying a 10% interest for any other payment method
  console.log(applyInterest(priceTag, 10));
}
