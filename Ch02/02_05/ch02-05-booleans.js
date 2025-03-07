// File: ch02-05-booleans.js
// Author: Luis Carrillo
// Practice with booleans and comparisons

// Boolean values (true or false)
console.log(true);  // This is true
console.log(false);  // This is false

// Be careful - these are wrong (do not work)
// True;  // Error
// FALSE;  // Error
// tRuE;  // Error

// Correct values
console.log(true);  // true
console.log(false);  // false

// Example variable
let buttonHasBeenClicked = false;  // The button is not clicked
console.log("Button clicked?", buttonHasBeenClicked);

// Location comparison
let myLocation = "Santa Barbara";
let myOtherLocation = "Los Angeles";

// Compare two locations (are they the same?)
console.log("Are locations same?", myLocation === myOtherLocation);  // false

// Change location
myOtherLocation = "Santa Barbara";

// Compare again
console.log("Are locations same now?", myLocation === myOtherLocation);  // true

// To run this file, use the command:
// node ch02-05-booleans.js

