// File: ch03-04-jargon-references.js
// Author: Luis Carillo
// Practice with object references and copies

// Create an object
var animal = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

// Show object
console.log("Animal:", animal);

// Create a reference (not a copy)
var animal2 = animal;
console.log("Animal2 (same reference):", animal2);

// Change genus in animal2
animal2.genus = "ursus";
console.log("Animal2 (changed):", animal2);
console.log("Animal (also changed!):", animal); // Both are modified!

// Create a new object (not a reference)
animal2 = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};

// Show new object
console.log("Animal2 (new object):", animal2);
console.log("Animal (unchanged):", animal); // Now different!

// Bonus: Copy an object safely (no reference)
animal2 = Object.assign({}, animal);
animal2 = { ...animal };
animal2 = JSON.parse(JSON.stringify(animal));

// Change genus in copy
animal2.genus = "ursus";
console.log("Animal2 (copy modified):", animal2);
console.log("Animal (still the same):", animal); // No changes this time!

// To run this file, use:
// node ch03-04-jargon-references.js