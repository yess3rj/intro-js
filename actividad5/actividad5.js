// Ejercicio 1 Con ciclo for. Imprimir en consola los valores que sean mayores 3.
var numeros = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > 3) {
        console.log(numeros[i]);
    }
}

// Ejercicio 2 Con ciclo while que se ejecute 5 veces, agregar los elementos al array.
var arreglo = [];
var i = 0
while (i < 5) {
    i++;
    arreglo.push(i)
}
console.log(arreglo);