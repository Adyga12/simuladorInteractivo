const suma = (a,b) => a + b
const resta = (a,b) => a - b

const iva = x => x *.16
let precioProducto = 500 
let descuento = 50 

let nuevoPrecio = resta(suma( precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio)
