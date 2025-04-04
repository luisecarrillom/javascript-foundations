// File: ch06-function-arguments-advanced.js
// Author: Luis Carrillo
// More on handling function arguments in JavaScript

// Function with default parameters
function speakSomething(what = "Default speech", howMany = 10) {
  for (var i = 0; i < howMany; i += 1) {
    console.log(what + " (" + i + ")");
  }
}

// Call with different numbers of arguments
console.log("speakSomething with 2 args:");
speakSomething("Good morning", 5);

console.log("\nspeakSomething with 1 arg:");
speakSomething("Good morning");

console.log("\nspeakSomething with no args:");
speakSomething();

// Function that adds all numeric arguments passed to it
function addingMachine() {
  var total = 0;

  for (var i = 0; i < arguments.length; i += 1) {
    var number = arguments[i];

    if (typeof number === "number") {
      total += number;
    }
  }

  return total;
}

// Test addingMachine with multiple values
console.log("\nSum of 1, 2, 3:", addingMachine(1, 2, 3));
console.log("Sum of many numbers:", addingMachine(1, 2, 3, 4, 5, 6, 7, 8, 9, 1204910249014));
