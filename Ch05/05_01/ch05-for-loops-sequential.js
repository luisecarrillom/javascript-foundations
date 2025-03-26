// File: ch05-for-loops-sequential.js
// Author: Luis Carrillo
// Practice with for loops and arrays in JavaScript

// Basic for loop: count from 0 to 9
for (let i = 0; i < 10; i += 1) {
  console.log("Number:", i);
}

// Array of page names
var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];

// Loop through the array and compare with document.title
for (let i = 0; i < pageNames.length; i += 1) {
  if (document.title === pageNames[i]) {
    console.log("We ARE here: " + pageNames[i]);
  } else {
    console.log("We are not here: " + pageNames[i]);
  }
}

// Better: don't repeat yourself
for (let i = 0; i < pageNames.length; i += 1) {
  var currentPageTitle = pageNames[i];

  if (document.title === currentPageTitle) {
    console.log("We ARE here: " + currentPageTitle);
  } else {
    console.log("We are not here: " + currentPageTitle);
  }
}