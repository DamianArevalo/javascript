/* EJERCICIOS DE LA CLASE DEL LUNES */

let dinero = prompt("Ingrese su cantidad de dinero");
dinero=Number(dinero);

if (dinero>1000) {
    alert ("puedes ingresar al sitio");
}

/* segundo ejercicio */

let palabra = prompt("ingrese la palabra correcta");

if (palabra = "Hola") {
    console.log("dijiste la palabra correcta");
}

/* Tercer ejercicio */


let edad = prompt("Ingrese su edad");

if (edad>10 && edad<50) {
    alert ("estas en el rango etario");
}

/* EJERCICIOS DE LA CLASE DEL MIERCOLES (CICLOS FOR Y WHILE) */

/* Ejercicio 1 (for) */

alert("Ejercicio 1")

const passwordAuth = 1234;
let password = parseInt(prompt("Ingrese su contrasenia"));

for (i=0; i<=2; i=i+1){
    if (password==passwordAuth) {
        alert("Su contrasenia es correcta, ingresa al sistema");
        break;
    } else {
        password=parseInt(prompt("Su contrasenia es incorrecta, intente de nuevo"))
    }

}

/* Ejercicio 2 (while) */

let nombre=prompt ("Ingrese su nombre, para salir ingrese: salir");

while(nombre!="salir"){
    alert(nombre);
    nombre=prompt ("Ingrese su nombre nuevamente");
}


/* Ejercicio para practicar con el Gaspi piola ;) */



