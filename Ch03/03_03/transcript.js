var bird = {
	genus: "Corvus",
	species: "Corvax",
	commonName: "Raven",
	callType: "Squawky",
	quote: "Nevermore",
	maxOffspring: 5,
	noisy: true,
	deadly: false
};

// Access properties
console.log("Bird quote:", bird.quote);  //  Correct
console.log("Bird quote:", bird["quote"]);  // Correct

// Add new properties
bird.color = "black";
bird["where it lives"] = "in a tree";
bird.whereItLives = "in a tree";

console.log("Bird:", bird);
console.log("Where it lives:", bird.whereItLives);

// Delete a property
delete bird.color;

console.log("Bird after delete:", bird);

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object