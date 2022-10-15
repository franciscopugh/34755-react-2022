import React, {useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
const DetalleProducto = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)

    const cantProducto = (operacion) => {
      if(operacion == "+") {
          if(cantidad < producto[1].stock) {
            setCantidad(cantidad + 1)
          }   
      } else {
        if(cantidad > 1) {
          setCantidad(cantidad - 1)
        }
    }
  }
    return (
        <>
         
  <div className="row g-0">
    <div className="col-md-4">
      <img src={producto[1].img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{producto[1].nombre}</h5>
        <p className="card-text">{producto[1].modelo}</p>
        <p className="card-text">{producto[1].marca}</p>
        <p className="card-text">{producto[1].precio}</p>
        <p className="card-text">{producto[1].stock}</p>
        <p className='card-text'>{cantidad}</p>
        <button className='btn btn-light' onClick={() => cantProducto("+")}>+</button>

        <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>

        <button className='btn btn-dark' onClick={() => agregarProducto(producto, cantidad) }>Agregar al carrito</button>
        </div>
        </div>
      </div>

        </>
    );
}

export default DetalleProducto;
