// File: ch04-simple-comparisons.js
// Author: Luis Carrillo
// Practice with simple comparisons in JavaScript

// Declare variables
var one = 1,
  two = 2;

// Strict equality (===) and inequality (!==)
console.log("1 === 1:", one === one); // true
console.log("1 !== 1:", one !== one); // false
console.log("1 !== 2:", one !== two); // true
console.log("1 === 2:", one === two); // false

// Loose equality (==) and inequality (!=)
console.log("1 == 1:", one == one); // true
console.log('1 == "1":', one == "1"); // true (JavaScript converts "1" to a number)
console.log('1 != "1":', one != "1"); // false (because "1" is converted)
console.log('1 === "1":', one === "1"); // false (different types)

// Relational comparisons
console.log("1 < 2:", one < two); // true
console.log("1 > 2:", one > two); // false
console.log("1 <= 2:", one <= two); // true
console.log("1 <= 1:", one <= one); // true
console.log("1 >= 2:", one >= two); // false
console.log("10 >= 2:", 10 >= two); // true

// To run this file, use:
// node ch04-simple-comparisons.js
