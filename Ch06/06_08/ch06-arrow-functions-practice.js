// File: ch06-arrow-functions-practice.js
// Author: Luis Carrillo
// Practice with arrow functions and return values

// Arrow function with no parameters
const greet = () => {
  console.log("Hello from an arrow function!");
};

// Arrow function with one parameter
const greetByName = name => {
  console.log(`Hello, ${name}!`);
};

// Arrow function with a return value
const square = num => num * num;

// Arrow function with multiple parameters
const multiply = (a, b) => a * b;

// Run the functions
greet();
greetByName("Luis");
console.log("Square of 5 is:", square(5));
console.log("Multiply 4 * 3 =", multiply(4, 3));

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions