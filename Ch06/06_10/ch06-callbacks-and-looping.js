// File: ch06-callbacks-and-looping.js
// Author: Luis Carrillo
// Practice with callback functions and array looping methods

// A simple function to double a number
function doubleIt(number) {
  return number * 2;
}

// An array of numbers
const myNumbers = [1, 2, 3, 4, 5];

// Use .map() with a callback function
const myDoubles = myNumbers.map(doubleIt);
console.log("Doubled numbers:", myDoubles);

// Use .forEach() with an anonymous function
myNumbers.forEach(function (number) {
  console.log("My array contains (function):", number);
});

// Use .forEach() with an arrow function
myNumbers.forEach((number) => {
  console.log("My array contains (arrow):", number);
});

// Browser-based callback: when user types in a field
const myTextField = document.getElementById("myTextField");
myTextField.addEventListener("keyup", () => {
  console.log("Someone is typing!");
});