let guitarra = "guitarra";
let parlante = "parlante";
let microfono = "microfono";
let bateria = "bateria";
let bajo = "bajo";

alert("lista de productos\n" + 
    "*" + guitarra + " $50\n" + 
    "*" + parlante + " $25\n" + 
    "*" + microfono + " $40\n" + 
    "*" + bateria + " $100\n" + 
    "*" + bajo + " $80");

    

let productoSeleccionado = prompt("Que producto queres llevar?");

let cantidadProducto = prompt("Cuantos queres llevar?");

let valorProductoSeleccionado;


switch (productoSeleccionado) {
    case guitarra: valorProductoSeleccionado = 50; break;
    case parlante: valorProductoSeleccionado = 25; break;
    case microfono: valorProductoSeleccionado = 40; break;
    case bateria: valorProductoSeleccionado = 100; break;
    case bajo: valorProductoSeleccionado = 80; break;
    default: alert ("El producto seleccionado no existe");
} 

if (productoSeleccionado===guitarra ||
    productoSeleccionado===parlante ||
    productoSeleccionado===microfono ||
    productoSeleccionado===bateria ||
    productoSeleccionado=== bajo) {
    let precioFinal = valorProductoSeleccionado*cantidadProducto;
    alert ("El precio final es $" + precioFinal);
} 







