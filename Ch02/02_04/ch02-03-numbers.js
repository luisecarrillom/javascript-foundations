// File: ch02-03-numbers.js
// Author: Luis Carrillo
// Practice with numbers and math object

// Numbers - examples

let myAge = 35; // My Age
let pi = 3.14159;  // Pi number
let negativeNumber = -45.67;  // Negative number

// Show numbers
console.log("My age is:", myAge);
console.log("Pi value is:", pi);
console.log("Negative number is:", negativeNumber);

// Basic math
let sum = myAge + 5;  // Age + 5 years
let product = pi * 2;  // Double pi
console.log("My age plus 5:", sum);
console.log("Double pi is:", product);

// Round numbers
console.log("Pi rounded:", Math.round(pi));  // Round pi (up or down)
console.log("Pi floor:", Math.floor(pi));  // Always round down
console.log("Pi ceil:", Math.ceil(pi));  // Always round up

// Random numbers
console.log("Random number 0 to 1:", Math.random());  // Number 0 to 1
console.log("Random number 1 to 100:", Math.floor(Math.random() * 100) + 1);  // Number 1 to 100

// Special values
console.log("Positive infinity:", Infinity);  // Positive infinity
console.log("Negative infinity:", -Infinity);  // Negative infinity
console.log("Not a number (NaN):", 0 / 0);  // Error - Not a number