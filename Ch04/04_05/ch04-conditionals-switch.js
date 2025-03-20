// File: ch04-conditionals-switch.js
// Author: Luis Carrillo
// Practice with switch statements in JavaScript

// Prompt example (User types a response)
var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");

// Using if...else
if (answer === "YES") {
  console.log("You said YES!");
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that.");
} else if (answer === "NO") {
  console.log("You said no. :(");
} else {
  console.log("You rebel, you!");
}

// Using switch (same logic, cleaner structure)
switch (answer) {
  case "YES":
    console.log("You said YES!");
    break;
  case "MAYBE":
    console.log("You said maybe. I don't know what to make of that.");
    break;
  case "NO":
    console.log("You said no. :(");
    break;
  default:
    console.log("You rebel, you!");
}

