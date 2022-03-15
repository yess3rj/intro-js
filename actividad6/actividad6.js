// Ejercicio 1
var animals = ["eagle", "parrot", "monkey", "boar", "lion"];
var comingSoonAnimals = ["panter", "dragon", "turtle"];

var totalAnimals = animals.concat(comingSoonAnimals);
console.log(totalAnimals);

// Ejercicio 2
var arr = [4, 6, 1, 0, 8, 2]
var nuevo = [4, 6, 1, 0, 8, 2].sort(function(a, b) { return a - b });
console.log(nuevo);

// Ejercicio 3
var animals = ["eagle", "parrot", "monkey", "boar", "lion"];
animals.push("cow")
console.log(animals);

// Ejercicio 4
var animals = ["eagle", "parrot", "monkey", "boar", "lion"];
animals.shift()
console.log(animals);