// File: ch03-comments.js
// Author: Luis Carrillo
// Practice with JavaScript comments

// Single-line comment
var year = 2012,
  month = "October", // This is the month
  // day = 31,  // This line is commented out (ignored)
  holiday = "Halloween";

/*
Multi-line comment
You can write explanations
across multiple lines
and end it like this:
*/

// Object example
var tinyAlmanac = {
  year: 2012,
  month: "October",
  day: 31,
  holiday: "Halloween"
};

console.log("Tiny Almanac:", tinyAlmanac);

// Block comment inside code
var myRegExp = /[0-9].*/; // This is a regular expression

console.log("Regex example:", myRegExp);

// To run this file, use:
// node ch03-comments.js
