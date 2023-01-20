let nombreUsuario = "Damian";
let apellidoUsuario = "Arevalo";
const anio = 2023;

// hay datos numericos (12, 15, 15.8 etc) que no se ponen etre comillas
// hay datos string ("Damian") que si se ponen entre comillas
//Es recomendable cerrar las declaraciones con ;


let datosUser = nombreUsuario + " " + apellidoUsuario;

console.log (datosUser);

alert(datosUser)

/* Ingreso de informacion : */

nombreUsuario = prompt("Decime tu nombre");
apellidoUsuario = prompt("Decime tu apellido");
let anioNacimiento = prompt("Decime tu anio de nacimiento");

/* Procesamiento de informacion: */

let edad = anio - anioNacimiento
datosUser = "Hola " + nombreUsuario + " " + apellidoUsuario + " segun mis calculos tu edad es " + edad + " anios"; 

/* Salida de informacion: */

alert(datosUser)