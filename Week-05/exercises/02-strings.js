console.log("EXCERCISE 2: STRINGS");

// 2.a: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log("Excercise 2.a");

var palabraLarga = "iguanodonte"

console.log(palabraLarga.toUpperCase());

// 2.b: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("Excercise 2.b");

var palabraPrimeros5 = palabraLarga.substring (0, 5);

console.log(palabraPrimeros5);

// 2.c: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log("Excercise 2.c");

var palabraUltimos3 = palabraLarga.substring(8, 11);

console.log(palabraUltimos3);

// 2.d: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log("Excercise 2.d");

var mayus = palabraLarga.substring(0, 1).toUpperCase();
var minus = palabraLarga.substring(1, 11).toLowerCase();

console.log(mayus+minus);

// 2.e: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log("Excercise 2.e");

var stringEspacio = "Soy una string con espacios. Témanme."
var primerEspacio = stringEspacio.indexOf(" ");

console.log(primerEspacio);

// 2.f: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log("Excercise 2.f");

var dosPalabras = "murcielago iguanodonte"
console.log(dosPalabras.length);
console.log(dosPalabras.indexOf("m"))
console.log(dosPalabras.indexOf("i", 10)) //Estos console logs son para saber dónde es que tengo que meter toUppercase. No son la respuesta del ejercicio.

var subsMayus1 = dosPalabras.substring(0, 1).toUpperCase();
var subsMayus2 = dosPalabras.substring(11, 12).toUpperCase();
var subsMinus1 = dosPalabras.substring(1, 11).toLowerCase();
var subsMinus2 = dosPalabras.substring(12, 22).toLowerCase();

console.log(subsMayus1+subsMinus1+subsMayus2+subsMinus2);