/* Declaracion de variables */

let productoSeleccionado;
let cantidadProducto;
let valorProductoSeleccionado;
let existeProducto;
let listaProductos;

/* Declaracion de la clase para modelar un producto */

class Producto {
    nombre
    precio
    constructor(name, price){
        this.nombre = name;
        this.precio = price;
    }
}

/* Llamado a las funciones */

crearListaDeProductos();
mostrarLista();
pedirValoresAlUsuario();
verificarYSetearDatos();
mostrarResultado();

/* Creamos el array de productos con objetos de tipo producto */

function crearListaDeProductos(){
    listaProductos = [
        new Producto("guitarra", 50),
        new Producto ("microfono", 40),
        new Producto ("parlante", 25),
        new Producto ("bateria", 100)
    ]
}

/* Recorremos el array concatenando cada producto a un string para mostrarlo al usuario */

function mostrarLista(){

    let listaImprimir = ""

    listaProductos.map(producto=>{
        listaImprimir=listaImprimir + producto.nombre + " $ " + producto.precio + "\n"
    })

    alert("Lista de productos\n" + listaImprimir); 
}

/* Pedimos valores al usuario mediante prompt seteandolos en variables */


function pedirValoresAlUsuario(){

    productoSeleccionado = prompt("Que producto queres llevar?");

    cantidadProducto = prompt("Cuantos queres llevar?");

}

/* Recorremos el array para verificar si el dato ingresado existe en la lista de productos, y si existe, seteamos el
precio en una variable */

function verificarYSetearDatos(){

    listaProductos.filter(producto=>{
        if (producto.nombre===productoSeleccionado){
            valorProductoSeleccionado=producto.precio;
            existeProducto=true;
            return;
        } 
    })
}

/* Mostramos el resultado de acuerdo a lo ingresado por el usuario de acuerdo a si existe o no el producto ingresado */

function mostrarResultado(){
    if (existeProducto===true){
        alert ("El precio final es $" + valorProductoSeleccionado*cantidadProducto);
    } else {
        alert("El producto es inexistente");
    }
}












