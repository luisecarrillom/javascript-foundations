// File: ch04-conditionals-if.js
// Author: Luis Carrillo
// Practice with conditionals (if, else if, else) in JavaScript

// Confirm box example (OK = true, Cancel = false)
var answer = window.confirm("Click OK for true. Click Cancel for false.");

if (answer === true) {
  console.log("You said true!");
} else {
  console.log("You said false.");
}

// Prompt example (User types a response)
var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");

if (answer === "YES") {
  console.log("You said YES!");
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that.");
} else if (answer === "NO") {
  console.log("You said no. :(");
} else {
  console.log("You rebel, you!");
}

// Grouped conditions using OR (||)
var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");

if (answer === "YES" || answer === "NO") {
  console.log("Common actions for YES and NO...");

  if (answer === "YES") {
    console.log("You said YES!");
  } else {
    console.log("You said NO. :(");
  }
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that.");
} else {
  console.log("You rebel, you!");
}

// To run this file, use a browser console (not Node.js).
