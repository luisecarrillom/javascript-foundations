// File: ch03-regular-expressions.js
// Author: Luis Carrillo
// Practice with Regular Expressions (RegEx) in JavaScript

// Example strings
var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

// Regular Expression: Find "this" (case-sensitive)
var regex = /this/;
console.log("Test 'this' (case-sensitive):");
console.log(regex.test(string1)); // true
console.log(regex.test(string2)); // true
console.log(regex.test(string3)); // false
console.log(regex.test(string4)); // true

// Case-insensitive search (ignores uppercase/lowercase)
regex = /this/i;
console.log("\nTest 'this' (case-insensitive):");
console.log(regex.test(string3)); // true

// Match only at the beginning of the string
regex = /^this/i;
console.log("\nTest 'this' at the start:");
console.log(regex.test(string1)); // true
console.log(regex.test(string3)); // false

// Match only at the end of the string
regex = /this$/i;
console.log("\nTest 'this' at the end:");
console.log(regex.test(string1)); // false

// Match words ending in "ever." (without escaping the dot)
regex = /ever.$/i;
console.log("\nTest 'ever.' (without escape):");
console.log(regex.test(string1)); // true

// Match words ending exactly with "ever."
regex = /ever\.$/i;
console.log("\nTest 'ever.' (with escape):");
console.log(regex.test(string1)); // true

// To run this file, use:
// node ch03-regular-expressions.js
