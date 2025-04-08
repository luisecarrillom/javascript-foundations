// File: ch06-functions-are-objects.js
// Author: Luis Carrillo
// Demonstrates that functions are objects in JavaScript

// Function declaration (hoisted)
function speakSomething(what = 'Speaking!') {
  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
}

// Function expression (not hoisted)
var speakSomething = function (what = 'Speaking!') {
  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
};

// Using a function as an argument (after 5 seconds)
setTimeout(speakSomething, 5000);

// Function as a method inside an object
var obj = {
  sayHello: function () {
    console.log("Hello");
  }
};

obj.sayHello();