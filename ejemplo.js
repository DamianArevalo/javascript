const aniosDeVida = 100;
let nombreUser = prompt("Decime tu nombre");
let apellidoUser = prompt("Decime tu apellido");
let anioNacimiento = parseInt(prompt("Decime tu anio de nacimiento"));

let anioDeMuerte = anioNacimiento + aniosDeVida;

let datosUser = "Hola " + nombreUser + " " + apellidoUser + " si vivis " + aniosDeVida + " anios tu fecha de muerte sera en " + anioDeMuerte;

alert(datosUser);
