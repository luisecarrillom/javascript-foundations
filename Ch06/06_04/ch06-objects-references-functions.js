// File: ch06-objects-references-functions.js
// Author: Your name
// Working with objects passed to functions (by reference vs copy)

// Original object
var calvin = {
  name: "Calvin",
  bestFriend: "Hobbes",
  form: "human boy"
};

console.log("Original Calvin:", calvin);

// Function that modifies the object directly
function transmogrifier(calvin) {
  if (typeof calvin !== "object") {
    console.error("Calvin is not an object.");
    return;
  }

  var randomNumber = Math.floor(Math.random() * 5) + 1;

  switch (randomNumber) {
    case 1:
      calvin.form = "tyrannosaurus";
      break;
    case 2:
      calvin.form = "grey wolf";
      break;
    case 3:
      calvin.form = "bengal tiger";
      break;
    case 4:
      calvin.form = "grizzly bear";
      break;
    case 5:
      calvin.form = "canary";
      break;
    default:
      calvin.form = "human boy";
      break;
  }
}

// Function that returns a new modified copy
function transmogrifyCopy(calvin) {
  if (typeof calvin !== "object") {
    console.error("Calvin is not an object.");
    return;
  }

  var randomNumber = Math.floor(Math.random() * 5) + 1;

  var newForm = calvin.form;

  switch (randomNumber) {
    case 1:
      newForm = "tyrannosaurus";
      break;
    case 2:
      newForm = "grey wolf";
      break;
    case 3:
      newForm = "bengal tiger";
      break;
    case 4:
      newForm = "grizzly bear";
      break;
    case 5:
      newForm = "canary";
      break;
    default:
      newForm = "human boy";
      break;
  }

  return {
    name: calvin.name,
    bestFriend: calvin.bestFriend,
    form: newForm
  };
}

// Example usage
console.log("\nTransmogrifying Calvin (by reference):");
transmogrifier(calvin);
console.log("Calvin after transmogrifier:", calvin);

console.log("\nTransmogrifying a copy of Calvin:");
var newCalvin = transmogrifyCopy(calvin);
console.log("New Calvin (copy):", newCalvin);
console.log("Original Calvin remains:", calvin);