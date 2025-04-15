// File: ch07-jargon-tools-responsibility.js
// Author: Luis Carrillo
// Covers: Strong vs. Loosely typed, Modern Tooling, Responsible JS use

console.log("=== 1. Strong vs. Loosely Typed ===");

// Loosely typed (JavaScript allows changing types)
let data = 42;
console.log("Initial value (number):", data);
data = "Now I'm a string!";
console.log("Changed value (string):", data);

// In a strongly typed language (like TypeScript or Java), this would cause an error

// Example of TypeScript-like enforcement (not actual TS)
function printLength(text) {
  if (typeof text !== "string") {
    console.warn("Expected a string, got:", typeof text);
    return;
  }
  console.log("Length of string:", text.length);
}

printLength("Hello");
printLength(123); // not ideal, JS allows it

console.log("\n=== 2. Modern JavaScript Tooling ===");
// This is conceptual; real tooling is set up via terminal (npm, Webpack, etc.)

// Simulated use of a module (like ES Module structure)
function add(a, b) {
  return a + b;
}

// Imagine this is from another file you "import" with Webpack or Vite
console.log("Using module-style function (simulated):", add(3, 4));

// Explanation in console
console.log("Tools like Webpack/Vite allow breaking up JS into modules and bundling it.");

// Example of simulated dynamic import (pseudo-structure)
console.log("Dynamic import example (real use would be: import('./myModule.js'))");

console.log("\n=== 3. Responsible JavaScript ===");

// ✅ Security: Prevent unsafe user input
let userInput = "<img src=x onerror=alert('hacked') />";
let safeInput = userInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");
console.log("Sanitized user input:", safeInput);

// ✅ Performance: Avoid heavy scripts (example only)
let start = performance.now();
for (let i = 0; i < 100000; i++) { } // dummy loop
let end = performance.now();
console.log("Heavy task took", (end - start).toFixed(2), "ms");

// ✅ Accessibility/availability: check for JavaScript being blocked
console.log("Always provide fallback content or explain that JS is required.");
