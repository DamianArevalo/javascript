

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
    document.getElementById("btnElegir").addEventListener("click", pedirValoresAlUsuario)
    if (localStorage.getItem("compraAnterior")){
        document.getElementById("seccionCompraAnterior").innerHTML = "Compra anterior: " + JSON.parse(localStorage.getItem("compraAnterior")).nombre + " $" + JSON.parse(localStorage.getItem("compraAnterior")).precio;
    }

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

        let seccionLista = document.getElementById("seccionLista");
        let ulElement = document.createElement("ul");
        seccionLista.appendChild(ulElement);
        listaProductos.map(producto => {
            let liElement = document.createElement("li");
            ulElement.appendChild(liElement);
            liElement.innerText = producto.nombre
        });
    }

    /* Pedimos valores al usuario mediante prompt seteandolos en variables */


    function pedirValoresAlUsuario(event){

        event.preventDefault();

        productoSeleccionado = document.getElementById("inputProducto").value;

        cantidadProducto = document.getElementById("inputCantidad").value;

        verificarYSetearDatos()

        mostrarResultado();

    }


    /* Recorremos el array para verificar si el dato ingresado existe en la lista de productos, y si existe, seteamos el
    precio en una variable */

    function verificarYSetearDatos(){

        let existeProd = false;

        listaProductos.filter(producto=>{
            if (producto.nombre===productoSeleccionado){
                valorProductoSeleccionado = producto.precio;
                existeProd = true;
                return;
            } 
        })
        existeProducto = existeProd;
        
    }

    /* Mostramos el resultado de acuerdo a lo ingresado por el usuario de acuerdo a si existe o no el producto ingresado */

    function mostrarResultado(){
        if (existeProducto===true){
        document.getElementById("seccionResultado").innerHTML = "El precio final es $" + valorProductoSeleccionado*cantidadProducto;
        localStorage.setItem("compraAnterior", JSON.stringify({
            nombre: productoSeleccionado,
            precio: valorProductoSeleccionado*cantidadProducto
        }))
        } else {
            document.getElementById("seccionResultado").innerHTML = "El producto es inexistente";
        }
        document.getElementById("form").reset()
    }













