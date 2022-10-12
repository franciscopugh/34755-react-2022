import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { mostrarCarrito } from '../../utils/funcionesUtiles';

const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const prodMostrar  = carrito.map(producto => 
            <div className="card cardProducto" key={producto.id}>
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Cantidad: {producto.cantidad}</p>
                            <p className="card-text">Precio Total: {producto.precio * producto.cantidad}</p>
                            <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                    </div>
                </div>)
        setCarritoLocal(prodMostrar)
    }, [carrito]);
    
   const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} </div> : <> <h1>No existen elementos en el carrito <button className='btn btn-dark'>Ir al Home</button></h1></>
          
    return app
}

export default Carrito;
