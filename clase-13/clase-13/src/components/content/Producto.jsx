import React, {useState, useEffect, useContext} from 'react';
import DetalleProducto from './DetalleProducto'
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/firebase';
import { DarkModeContext } from '../../context/darkModeContext';
const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
       getProducto(id).then(prod => {
        setProducto(prod)
    })
   
    }, [])

   if (producto.length != 0) {
    return (
            <div className={darkMode ? 'darkMode card mb-3' : 'card mb-3'} style={{maxWidth: '540px'}}>
                <DetalleProducto producto={producto}/>
   
            </div>
    )
}}

export default Producto;
