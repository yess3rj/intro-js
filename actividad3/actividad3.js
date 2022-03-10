// Ejercicio 1. Solicitar un número, mensaje "x num es divisible entre 2" o no.
var numero = Number(prompt("Ingresa un número"))

if (numero % 2 === 0) {
    console.log(numero + " es divisible entre 2.");
} else {
    console.log(numero + " no es divisible entre 2.");
}

// Ejercicio 2. Programa que determine si un num introducido en un prompt es par o no, la respuesta será mostrada en un alert.
var numero = Number(prompt("Ingresa un número"))

if (numero % 2 === 0) {

    alert("El número " + numero + " es par");

} else {

    alert("El número " + numero + " es impar");

}

// Ejercicio 3. Solicitar un num. Si el num es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el num y el mensaje "Lo sentimos, sigue participndo"
var numero = Number(prompt("Ingresa un número"))

if (numero === 1000) {
    console.log("Ganaste un premio");
} else {
    console.log("Ingresaste el número " + numero + ". Lo sentimos, sigue participando.");
}

// Ejercicio 4. Solicitar ingrese dos num y mostrar cual de los dos es menor. No considerar ambos num sean iguales.
var primerNumero = Number(prompt("Ingresa un número"))
var segundoNumero = Number(prompt("Ingresa otro número"))

if (primerNumero < segundoNumero) {
    console.log("El número menor es: " + primerNumero);
} else {
    console.log("El número menor es: " + segundoNumero);
}

// Ejercicio 5. Ingrese 3 num y mostrar cual de los 3 es el num mayor. Considerar el caso en que 2 num sean iguales.
var primerNumero = Number(prompt("Ingresa un número"))
var segundoNumero = Number(prompt("Ingresa otro número"))
var tercerNumero = Number(prompt("Ingresa un tercer número"))

if (primerNumero >= segundoNumero && primerNumero >= tercerNumero) {
    console.log("El número mayor es: " + primerNumero);
} else if (segundoNumero >= primerNumero && segundoNumero >= tercerNumero) {
    console.log("El número mayor es: " + segundoNumero);
} else if (tercerNumero >= primerNumero && tercerNumero >= segundoNumero) {
    console.log("El número mayor es: " + tercerNumero);
} else {
    console.log("Ingresa datos válidos");
}