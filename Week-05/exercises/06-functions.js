console.log("EXCERCISE 6: FUNCTIONS");


//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log("Excercise 6.a");

function suma (a, b){
    return (a+b);
}

var num1 = 60;
var num2 = 9;

console.log(suma(num2, num1));

//Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log("Excercise 6.b");

function suma (a, b){
    if (isNaN(a)||isNaN(b)){
        alert("Uno de los parámetros no es un numero");
        return "NaN";
    }else {
        return (a+b);
    }
}

//Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log("Excercise 6.c");

function validateInteger (numeroIncognita) {
    if (Math.round(numeroIncognita) === numeroIncognita){
        return true;
    } else {
        return false;
    }

}

//Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).
console.log("Excercise 6.d");

function llamada (a, b){
    if (isNaN(a)||isNaN(b)){
        alert("Uno de los parámetros no es un numero");
        return "NaN";
    }   else if ((validateInteger(a)) && !(validateInteger(b))) {
        alert(b+" is not a round number, please put "+Math.round(b)+" instead");
    }   else if (!(validateInteger(a)) && (validateInteger(b))) {
        alert(a+" is not a round number, please put "+Math.round(a)+" instead");
    }   else if (!(validateInteger(a)) && !(validateInteger(b))) {
        alert("Neither "+a+" nor "+b+" are round numbers, please put "+Math.round(a)+" and "+Math.round(b)+" instead");
    }   else if (validateInteger(a) && validateInteger(b)){
        return (a+b);
    }
}

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.
console.log("Excercise 6.e");

function roundValidation (a, b){
    if ((validateInteger(a)) && !(validateInteger(b))) {
        alert(b+" is not a round number, please put "+Math.round(b)+" instead");
    }   else if (!(validateInteger(a)) && (validateInteger(b))) {
        alert(a+" is not a round number, please put "+Math.round(a)+" instead");
    }   else if (!(validateInteger(a)) && !(validateInteger(b))) {
        alert("Neither "+a+" nor "+b+" are round numbers, please put "+Math.round(a)+" and "+Math.round(b)+" instead");
    }   else if (validateInteger(a) && validateInteger(b)){
        return (a+b);
    }
}

function check (a, b){
    if (isNaN(a)||isNaN(b)){
        alert("Uno de los parámetros no es un numero");
        return "NaN";
    } else {
        roundValidation(a, b);
    }
}