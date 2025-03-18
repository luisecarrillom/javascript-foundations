// File: ch04-logical-operators.js
// Author: Luis Carrillo
// Practice with logical operators in JavaScript

// Logical Operators:
// && (AND) - || (OR) - ! (NOT)

let animal1 = "monkey",
  animal2 = "bear",
  animal3 = "tiger";

// AND (&&) - All must be true
console.log("monkey AND bear:", animal1 === "monkey" && animal2 === "bear"); // true
console.log("ape AND bear:", animal1 === "ape" && animal2 === "bear"); // false
console.log("ape AND bear AND tiger:", animal1 === "ape" && animal2 === "bear" && animal3 === "tiger"); // false
console.log("monkey AND bear AND tiger:", animal1 === "monkey" && animal2 === "bear" && animal3 === "tiger"); // true

// OR (||) - At least one must be true
console.log("monkey OR bear:", animal1 === "monkey" || animal2 === "bear"); // true
console.log("ape OR bear:", animal1 === "ape" || animal2 === "bear"); // true
console.log("ape OR ostrich:", animal1 === "ape" || animal2 === "ostrich"); // false

// Combining AND and OR
console.log("monkey OR (monkey AND tiger):", animal1 === "monkey" || animal2 === "monkey" && animal3 === "tiger"); // true
console.log("(monkey OR monkey) AND tiger:", (animal1 === "monkey" || animal2 === "monkey") && animal3 === "tiger"); // true

// NOT (!) - Negates true/false
console.log("NOT true:", !true); // false
console.log("NOT false:", !false); // true

// Combining NOT with AND/OR
console.log("monkey AND zebra:", animal1 === "monkey" && animal2 === "zebra"); // false
console.log("NOT (monkey AND zebra):", !(animal1 === "monkey" && animal2 === "zebra")); // true

// !== (NOT EQUAL) - Opposite of ===
console.log("monkey !== monkey AND bear !== zebra:", animal1 !== "monkey" && animal2 !== "zebra"); // false
console.log("monkey !== monkey OR bear !== zebra:", animal1 !== "monkey" || animal2 !== "zebra"); // true

// To run this file, use:
// node ch04-logical-operators.js
