// File: ch04-tersely-if.js
// Author: Luis Carrillo
// Practice with one-line if statements and truthy/falsy checks

var cherub = "Cupid";
// cherub = 'Norman'; // Uncomment to test different value

// One-line if
if (cherub === "Cupid") console.log("Ouch, an arrow! Ooo, I'm in love!");

// One-line if...else
if (cherub === "Cupid")
  console.log("Ouch, an arrow! Ooo, I'm in love!");
else
  console.log("I feel nothing!");

// Example with empty string (falsy)
let errorMsg = '';

if (errorMsg) {
  console.error('There was an error', errorMsg);
}

if (!errorMsg) {
  console.log('Yay! No errors!');
}

// Example with array
let errors = [];

// Even empty arrays are "truthy", so use length
if (errors.length) {
  console.error("Please fix these errors", errors);
}
