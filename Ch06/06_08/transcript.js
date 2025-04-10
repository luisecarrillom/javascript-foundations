// Arrow function version of 'speak'
const speak = () => {
  console.log("Arf");
  console.log("Woof");
  console.log("Meow");
  console.log("Moooooooooooo");
};

speak(); // Call the function

// Arrow function version of 'isEven'
const isEven = num => num % 2 === 0;

console.log("Is 4 even?", isEven(4));   // true
console.log("Is 7 even?", isEven(7));   // false

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
