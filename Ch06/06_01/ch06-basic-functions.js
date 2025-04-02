// File: ch06-basic-functions.js
// Author: Luis Carrillo
// Practice with basic function declarations and expressions

// Logs sounds directly
console.log('Arf');
console.log('Woof');
console.log('Meow');
console.log('Moooooooooooo');

// Function declaration
function speak() {
  console.log('Arf');
  console.log('Woof');
  console.log('Meow');
  console.log('Moooooooooooo');
}

// Call the function
console.log("\nCalling speak():");
speak();

// Function expression assigned to a variable
// Note: you can't use the same name twice in the same scope
const speak2 = function () {
  console.log('Arf');
  console.log('Woof');
  console.log('Meow');
  console.log('Moooooooooooo');
};

console.log("\nCalling speak2():");
speak2();

