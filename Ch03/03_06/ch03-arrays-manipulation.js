// File: ch03-arrays-manipulation.js
// Author: Luis Carrillo
// Practice manipulating arrays in JavaScript

// Create an array
var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];
console.log("Original array:", counties);

// Access elements
console.log("First county:", counties[0]); // Belknap
console.log("Third county:", counties[2]); // Carroll

// Modify elements
counties[2] = "Cheshire";
console.log("Modified array:", counties);

// Add new elements
counties[4] = "Carroll";
console.log("Array with new element:", counties);

counties[counties.length] = "Merrimack"; // Add at the end
console.log("Array after adding Merrimack:", counties);

counties.push("Coos"); // Push new element
console.log("Array after push:", counties);

counties.pop(); // Remove last element
console.log("Array after pop:", counties);

// Delete an element (leaves empty space)
delete counties[2];
console.log("Array after delete:", counties);

// Remove element completely
counties.splice(2, 1);
console.log("Array after splice:", counties);

// Show final array length
console.log("Final length:", counties.length);

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// To run this file, use:
// node ch03-arrays-manipulation.js
