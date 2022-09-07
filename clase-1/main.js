import {Producto, productos} from './productos.js'

const divParrafos = document.getElementsByClassName("divParrafos")

const parrafo1 = document.querySelector('#parrafo1')
const boton1 = document.getElementById("boton1")

console.log(divParrafos)
console.log(parrafo1)

console.log(productos)
console.log(Producto)

boton1.addEventListener('click', () => {
    console.log("Diste click!")
})