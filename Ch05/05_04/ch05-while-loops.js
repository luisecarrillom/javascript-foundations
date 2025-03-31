// File: ch05-while-loops.js
// Author: Your name
// Practice with while and do...while loops in JavaScript

// for loop (basic example)
console.log("For loop:");
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

// while loop (same behavior)
console.log("\nWhile loop:");
let i = 0;
while (i < 10) {
  console.log(i + "... This will go until we hit 10");
  i += 1;
}

// Example: loop until we pop a false from the array
console.log("\nPop until false using while loop:");
var myList = [true, true, true, false, true, true];
var myItem = null;

while (myItem !== false) {
  console.log(
    "myList has " + myList.length +
    " items now. This loop will keep going until we pop a false."
  );
  myItem = myList.pop();
}

// Infinite loop example with break
console.log("\nWhile(true) with break:");
var counter = 1;
while (true) {
  console.log(counter);
  counter++;
  break; // Remove this line to make it an infinite loop (⚠️ not recommended)
}

// do...while loop: always runs at least once
console.log("\nPop until false using do...while loop:");
var myList = [true, true, true, false, true, true];
var myItem = false;

do {
  console.log(
    "myList has " + myList.length +
    " items now. This loop will go until we pop a false."
  );
  myItem = myList.pop();
} while (myItem !== false);
