// File: ch05-for-loops-enumerative.js
// Author: Luis Carrillo
// Practice with different for loop types in JavaScript

// Iterate over an array
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];

// Traditional for loop
console.log("Classic for loop:");
for (let i = 0; i < pageNames.length; i += 1) {
  console.log(i, pageNames[i]);
}

// for...in: loops over indexes (not ideal for arrays)
console.log("\nfor...in loop:");
for (var p in pageNames) {
  console.log(p, pageNames[p]);
}

// for...of: loops over values
console.log("\nfor...of loop:");
for (var v of pageNames) {
  console.log(v);
}

// Iterate over an object
var pages = {
  first: "Home",
  second: "About Us",
  third: "Contact Us",
  fourth: "JavaScript Playground",
  fifth: "Blog"
};

console.log("\nLooping through object with for...in:");
for (var p in pages) {
  if (pages.hasOwnProperty(p)) {
    console.log(p, pages[p]);
  }
}
