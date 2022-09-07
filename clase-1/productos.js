export class Producto {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto(1, "Yerba Mate", "La Yerbita", 120, 20)

const producto2 = new Producto(2, "Fideos", "Fidein", 140, 22)

const producto3 = new Producto(3, "Te", "Tecito", 110, 25)

const producto4 = new Producto(4, "Lentejas", "Lentejin", 130, 21)

export const productos = [producto1, producto2, producto3, producto4]

