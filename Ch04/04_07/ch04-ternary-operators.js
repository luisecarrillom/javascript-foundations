// File: ch04-ternary-operators.js
// Author: Luis
// Practice with ternary operators in JavaScript

var animal = "cat";
// animal = "dog"; // Uncomment to test with a different value

// Ternary: one-line if...else
animal === "cat"
  ? console.log("You will be a cat herder.")
  : console.log("You will be a dog catcher.");

// Assign value using ternary
var job = animal === "cat" ? "cat herder" : "dog catcher";
console.log("Assigned job:", job);

// Ternary with parentheses and Prettier ignore
// prettier-ignore
var job = (animal === "cat") ? "cat herder" : "dog catcher";
console.log("Prettier-ignored format:", job);