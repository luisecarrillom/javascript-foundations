// File: ch06-arguments-and-parameters.js
// Author: Luis Carrillo
// Practice with arguments and parameters in JavaScript functions

// Function to make speech sound like Elmer Fudd
function fuddify(speech) {
  if (typeof speech !== "string") {
    console.error("Nice twy, wabbit!");
    return;
  }

  // Replace all "r" or "R" with "w" or "W"
  speech = speech.replace(/r/g, "w");
  speech = speech.replace(/R/g, "W");

  return speech;
}

// Call fuddify with different phrases
console.log(fuddify("Be very quiet, I'm hunting rabbits."));
console.log(fuddify("You screwy rabbit."));
console.log(fuddify("Rabbit tracks!"));

var utterance = fuddify("You screwy rabbit");
console.log("Utterance:", utterance);

// Check if a number is even (long form)
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Is 12 even?", isEven(12)); // true

// Shorter version of isEven
function isEvenShort(num) {
  return num % 2 === 0;
}

console.log("Is 13 even?", isEvenShort(13)); // false