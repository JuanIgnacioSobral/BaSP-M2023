console.log("EXCERCISE 3: ARRAYS");

// 3.a: Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log("Excercise 3.a");

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[5]);
console.log(meses[11]);


// 3. b:Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log("Excercise 3.b");

meses.sort();
console.log(meses);

// 3. c:Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log("Excercise 3.c");

meses.unshift("Principio");
meses.push("Final");

console.log(meses);

// 3. d:Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log("Excercise 3.d");

meses.shift("Principio");
meses.pop("Final");

console.log(meses);

// 3. e:Invertir el orden del array (utilizar reverse).
console.log("Excercise 3.e");

meses.reverse();

console.log(meses);

// 3. f: Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log("Excercise 3.f");

console.log(meses.join("-"));

// 3. g:Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log("Excercise 3.g");

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses.slice(4, -1));