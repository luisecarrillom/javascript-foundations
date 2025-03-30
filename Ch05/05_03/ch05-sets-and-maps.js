// File: ch05-sets-and-maps.js
// Author: Luis Carrillo
// Practice with Set and Map structures in JavaScript

// This array has two copies of the first item
let myList = [1, 1, 2, 3, 5, 8, 13, "fibonacci"];
console.log("Original array with duplicates:", myList);

// Remove duplicates using Set
let mySet = new Set(myList);
console.log("Set (unique values):", mySet);

// Check for values in the Set
console.log("Does mySet have 3?", mySet.has(3)); // true
console.log("Does mySet have 12?", mySet.has(12)); // false

// Iterate over Set
for (let item of mySet) {
  console.log("mySet contains:", item);
}

// Create an object
var bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven"
};

// Create a Map using set()
var birdMap = new Map();
birdMap.set("genus", "corvus");
birdMap.set("species", "corvax");
birdMap.set("commonName", "raven");

// Access Map values
console.log("\nGenus from birdMap:", birdMap.get("genus")); // "corvus"

// Check keys in Map
console.log("Has key 'genus'?", birdMap.has("genus")); // true
console.log("Has key 'corvus'?", birdMap.has("corvus")); // false

// Loop through Map entries
console.log("\nLoop through birdMap:");
for (let [key, value] of birdMap) {
  console.log(key + ":", value);
}

// Convert object to Map using Object.entries()
let birdMap2 = new Map(Object.entries(bird));
console.log("\nbirdMap2 from object:", birdMap2);
