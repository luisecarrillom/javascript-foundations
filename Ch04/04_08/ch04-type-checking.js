// File: ch04-type-checking.js
// Author: Luis Carrillo
// Practice with typeof and type checking in JavaScript

let thing;

// Number
thing = 12;
console.log("thing =", thing);
console.log("typeof:", typeof thing);

// String
thing = "twelve";
console.log("\nthing =", thing);
console.log("typeof:", typeof thing);

// Boolean
thing = false;
console.log("\nthing =", thing);
console.log("typeof:", typeof thing);

// Object
thing = {};
console.log("\nthing =", thing);
console.log("typeof:", typeof thing);

// Array (typeof returns "object", but we can check length)
thing = [];
console.log("\nthing =", thing);
console.log("typeof:", typeof thing);
console.log("Is array (by length property)?", typeof thing === "object" && thing.hasOwnProperty("length")); // true

// Object with no length
thing = {};
console.log("\nthing =", thing);
console.log("Has 'length'? ", typeof thing === "object" && thing.hasOwnProperty("length")); // false

// NaN
console.log("\nNaN value:", NaN);
console.log("typeof NaN:", typeof NaN); // "number"
console.log("Is NaN (safe check):", Number.isNaN(NaN)); // true

// null
console.log("\ntypeof null:", typeof null); // "object" (JS quirk)
thing = null;
console.log("thing === null:", thing === null); // true

// undefined variable
let somethingLater;
console.log("\ntypeof somethingLater:", typeof somethingLater); // "undefined"

// undeclared variable (commented to avoid error)
// console.log(typeof nothingSilly); // ReferenceError if uncommented