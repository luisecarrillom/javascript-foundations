// File: ch03-02-objects-data-modeling.js
// Author: Luis Carrillo
// Simple objects for data modeling

var bird = {
  name: "Raven",
  sound: "Squawky",
  isNoisy: true
};

var bear = {
  name: "Brown Bear",
  sound: "Growl",
  isDeadly: true
};

console.log("Bird:", bird);
console.log("Bear:", bear);

// Abstract object
var knowledge = {
  answer: 42,
  bestSong: "Bohemian Rhapsody"
};

console.log("Knowledge:", knowledge);

// To run this file, use:
// node ch03-02-objects-data-modeling.js
