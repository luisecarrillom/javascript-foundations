// File: ch06-functions-and-scope.js
// Author: Luis Carrillo
// Exploring variable scope in functions and blocks

// Shim to make it work in browser as well as Node
if (typeof global === "undefined" && typeof window !== "undefined") {
  var global = window;
}

var myNum = 32;
var myResult = "Success!";

function randomizer(limit) {
  var randomNumber = Math.floor(Math.random() * limit);
  var myNum = randomNumber; // local scope

  console.log("Local myNum is", myNum);         // from function
  console.log("Global myNum is", global.myNum); // from outer/global
  console.log("Our result is", myResult);       // inherited from outer scope

  return myNum;
}

console.log("\nCalling randomizer(10):");
randomizer(10);

function doubleIt(num) {
  var myNum = num * 2; // local to this function
  return myNum;
}

console.log("\nCalling doubleIt(5):", doubleIt(5));

// Block scope with const
if (1 === 1) {
  const oneIsOne = "Yes indeed.";
  console.log("Inside if block:", oneIsOne);
}

console.log("\nTrying to access 'oneIsOne' outside the block:");
try {
  console.log("Outside block:", oneIsOne); // ReferenceError
} catch (error) {
  console.error("Error:", error.message);
}

