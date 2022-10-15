import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVel6KVa11jpqRYVw_pMglvfldRtAZbVA",
  authDomain: "react-34755-2022-5baa8.firebaseapp.com",
  projectId: "react-34755-2022-5baa8",
  storageBucket: "react-34755-2022-5baa8.appspot.com",
  messagingSenderId: "835140692877",
  appId: "1:835140692877:web:710632e8a0f2824c5b6bc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
       await addDoc(collection(db,"productos"), {
            nombre: producto.nombre,
            marca: producto.marca,
            modelo: producto.modelo,
            categoria: producto.idCategoria,
            stock: producto.stock,
            precio: producto.precio,
            img: producto.img
       })
    })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  console.log(prod)
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

export {cargarBaseDeDatos, getProductos, getProducto}