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

