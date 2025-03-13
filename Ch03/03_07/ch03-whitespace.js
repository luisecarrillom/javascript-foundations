// File: ch03-whitespace.js
// Author: Luis Carrillo
// Practice with readability and whitespace in JavaScript

// Example 1: No whitespace (hard to read)
var year = 2012, month = 'October', day = 31, holiday = 'Halloween';
console.log(year, month, day, holiday);

// Example 2: Too much whitespace (messy but valid)
var year = 2012, month = 'October', day = 31, holiday = 'Halloween';
console.log(year, month, day, holiday);

// Example 3: Good readability
var year = 2012,
  month = 'October',
  day = 31,
  holiday = 'Halloween';

console.log(year, month, day, holiday);

// Example 4: Aligned variables (some developers prefer this)
var year = 2012,
  month = 'October',
  day = 31,
  holiday = 'Halloween';

console.log(year, month, day, holiday);

// Example 5: Object with no whitespace (hard to read)
var tinyAlmanac = { 'year': 2012, 'month': 'October', 'day': 31, 'holiday': 'Halloween' };
console.log(tinyAlmanac);

// Example 6: Object with good formatting
var tinyAlmanac = {
  year: 2012,
  month: "October",
  day: 31,
  holiday: "Halloween"
};

console.log(tinyAlmanac);

// Example 7: Multiline string with backslashes
var longString = "Four score \
and seven years ago \
our fathers brought forth \
on this continent \
a new nation";

console.log(longString);

// More info:
// Mozilla JavaScript Code Style Guide
// https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#choosing_a_format

// To run this file, use:
// node ch03-whitespace.js