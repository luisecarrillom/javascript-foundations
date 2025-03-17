// File: ch04-arithmetic-operators.js
// Author: Luis Carrillo
// Practice with arithmetic operators in JavaScript

// Basic arithmetic
console.log("2 + 5 =", 2 + 5);
console.log("4 - 3 =", 4 - 3);
console.log("5 - 9 =", 5 - 9);
console.log("3 * 5 =", 3 * 5);
console.log("36 / 6 =", 36 / 6);
console.log("36 / 5 =", 36 / 5);

// Modulus operator (%)
console.log("20 % 2 =", 20 % 2);
console.log("19 % 2 =", 19 % 2);

// Check if a number is even
console.log("Is 20 even?", 20 % 2 === 0); // true

// Example: Total results divided into pages
const perPage = 20;
const totalResults = 254;
console.log("Remaining results:", totalResults % perPage);

// Increment and decrement operations
var counter = 0;
counter = counter + 1; // Add 1
console.log("Counter:", counter);

counter += 1; // Another way to add 1
console.log("Counter:", counter);

counter++; // Shorter way to add 1
console.log("Counter after ++:", counter);

counter += 5; // Add 5
console.log("Counter after += 5:", counter);

counter += -4; // Subtract 4
console.log("Counter after += -4:", counter);

counter -= 1; // Subtract 1
console.log("Counter after -= 1:", counter);

counter--; // Shorter way to subtract 1
console.log("Counter after --:", counter);

counter *= 2; // Multiply by 2
console.log("Counter after *= 2:", counter);

// String concatenation
console.log("Concatenation:", "cat" + "dog");
console.log("With space:", "cat " + "dog");
console.log("With 'and':", "cat" + " and " + "dog");
console.log("Numbers as strings:", "1" + "2"); // "12" (string, not number)

// To run this file, use:
// node ch04-arithmetic-operators.js
