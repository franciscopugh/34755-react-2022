import {createProducto, updateProducto, getProducto, deleteProducto, createOrdenCompra, getOrdenCompra} from './firebase.js'

const producto = { 
    "nombre": "Pepe SA",
    "marca": "Pepito",
    "modelo": "XYZ",
    "precio": 100000,
    "idCategoria": 1,
    "stock": 25,
    "img": "https://firebasestorage.googleapis.com/v0/b/react-34755-2022-5baa8.appspot.com/o/Imagenes%2Fnotebook-lenovo.jpg?alt=media&token=980d86d4-eaa4-4c40-8a53-83c754982c1d",
    "Direccion": "Calle Falsa 123"
}
  
/*createProducto(producto).then(estado => console.log(estado))

getProducto("8ztRIP7VURQlU1Q4VYcj").then(producto => {
    const prod = producto[1]
    prod.precio   *= 1.5
    updateProducto("8ztRIP7VURQlU1Q4VYcj", prod)
})
 
deleteProducto("ewaewa").then(estado => {
    console.log(estado)
})
*/
createOrdenCompra(120000, "Pepito", "Perez", "p@p.com", 123123, "Calle Falsa 123").then(orden => {
    console.log(orden.id)
})

getOrdenCompra("UTKHpA46Uvs43P3Jh5IX").then(orden => {
    console.log(orden.id)
})





