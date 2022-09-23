import React, {useState, useEffect} from 'react';
import { consultarBDD } from '../../utils/funcionesUtiles';
const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(producto => setProductos(producto))
    }, []);


    return (
        <div className="row">
            {productos}     
        </div>      
        
    );
}

export default Home;
