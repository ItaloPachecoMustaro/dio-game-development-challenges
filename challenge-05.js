// Calculating the final price based on payment method.

const priceTag = 100;
const paymentMethod = 1;

// Checking the payment method and applying the corresponding discount or interest.
if (paymentMethod === 1) {
  console.log(priceTag - priceTag * 0.1);
} else if (paymentMethod === 2) {
  console.log(priceTag - priceTag * 0.15);
} else if (paymentMethod === 3) {
  console.log(priceTag);
} else {
  console.log(priceTag + priceTag * 0.1);
}
