// Ejercicio 1
var numero = Number(prompt("Escribe un número"))

var index = 1;
while (index <= numero) {
    if (index % 5 === 0)
        console.log(index);
    index++;
}

// Ejercicio 2
var numero = Number(prompt("Escribe un número"))

var index = 1;
do {
    if (index % 5 === 0) {
        console.log(index);
    }
    index++;
} while (index <= numero)

// Ejercicio 3
for (var i = 1; i < 50; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}