console.log("EXCERCISE 4: IF ELSE");

// 4.a Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var numeroPequeno = Math.random();//esto es para corroborar que el if funcione correctamente.

console.log(numeroPequeno);

if (numeroPequeno>=0.5){
    console.log("Greater than or equal to 0,5");
} else{
    console.log("Lower than 0,5");
}

// 4.b: Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// “Bebe” si la edad es menor a 2 años;
// “Niño” si la edad es entre 2 y 12 años;
// “Adolescente” entre 13 y 19 años;
// “Joven” entre 20 y 30 años;
// “Adulto” entre 31 y 60 años;
// “Adulto mayor” entre 61 y 75 años;
// “Anciano” si es mayor a 75 años.

var age = Math.round((Math.random())*100);

console.log(age);//esto es para corroborar que el if funcione correctamente.


if (age<2) {
    console.log("Bebe")
} else if ((age>=2)&&(age<13)) {
    console.log("Niño")
} else if((age>=13)&&(age<20)) {
    console.log("Adolescente")
} else if((age>=20)&&(age<31)) {
    console.log("Joven")
} else if((age>=31)&&(age<61)) {
    console.log("Adulto")
} else if((age>=61)&&(age<76)) {
    console.log("Adulto mayor")
} else{
    console.log("Anciano")
}