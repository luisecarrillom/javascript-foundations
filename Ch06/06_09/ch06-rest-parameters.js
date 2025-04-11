// File: ch06-rest-parameters.js
// Author: Luis Carrillo
// Practice with rest parameters in JavaScript

// Function using rest parameters to sum any number of numeric inputs
function addingMachine(...terms) {
  let total = 0;

  for (let i = 0; i < terms.length; i++) {
    let number = terms[i];
    if (typeof number === "number") {
      total += number;
    }
  }

  return total;
}

console.log("addingMachine(1, 2, 3) =", addingMachine(1, 2, 3));
console.log("addingMachine(5, 10, 'oops', 20) =", addingMachine(5, 10, "oops", 20));

// Function using default parameters and collecting the rest
function bake(temp = 350, time = 35, ...flavors) {
  console.log(`\nLet's bake this cake at ${temp} degrees`);
  console.log(`for ${time} minutes`);

  if (flavors.length > 0) {
    console.log("And let's not forget these flavors:", flavors);
  } else {
    console.log("Simple cake. No extra flavors.");
  }

  // Note: 'arguments' still exists in traditional functions
  console.log("Full arguments list:", arguments);
}

// Test bake with different arguments
bake(425, 30, 'chocolate', 'lemon', 'black forest');
bake(300, 30, 'vanilla');
bake(); // no arguments

