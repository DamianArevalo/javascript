class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos = new Producto ("Fideos", 100);
const harina = new Producto ("Harina", 250);
const pan = new Producto ("Pan", 180);
const gaseosa = new Producto ("Gaseosa", 120);

const arrayProductos = [fideos, harina, pan, gaseosa];
console.log(arrayProductos);

arrayProductos.forEach((producto)=>{
    console.log(producto);
})

arrayProductos.forEach(producto=>console.log(producto.precio));

