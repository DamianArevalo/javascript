let nombreUser=prompt("Nombre de usuario:");
let apellidoUser=prompt("Apellido de usuario:");

alert("Hola " + nombreUser + " " + apellidoUser + ", ingrese su contrasenia");

const passwordAuth = 1234;
let password= prompt("Ingrese su contrasenia");


for (i=0; i<=2; i+1) {
    
    if (password==passwordAuth) {
        alert("Inicio de sesion correcto");
        break;} else {
            password=prompt("Ingrese nuevamente su contrasenia")
        }
}

let dinero=prompt("Ingrese su cantidad de dinero");
let cuotas=prompt("Ingrese la cantidad de cuotas")

function cotizador (nombreUser, dinero, cuotas) {
    let interes = dinero*cuotas*0.2
    alert("Hola " + nombreUser + " " + apellidoUser + " el valor final es " + interes)
}

cotizador (nombreUser, dinero, cuotas);



// let interes = prompt("Ingrese su cantidad de dinero")*prompt("Ingrese su cantidad de cuotas")*0.2
// alert("Hola " + nombreUser + " el valor final es " + interes)