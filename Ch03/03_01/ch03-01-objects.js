// File: ch03-01-objects.js
// Author: Luis Carrillo
// Practice with objects in JavaScript

// Different data types
console.log(12);  // Number
console.log("strings");  // Text (string)
console.log(true);  // Boolean (true or false)

// Empty object (ignored by Prettier formatting)
// prettier-ignore
{ }

// Create an empty object
var emptyObject = {};
console.log("Empty object:", emptyObject);  // Shows {}

// Create an object with properties
var notEmptyObject = {
  label: "value",  // First property
  label2: "value2"  // Second property
};

// Show the object
console.log("Not empty object:", notEmptyObject);

// To run this file, use the command:
// node ch03-01-objects.js
