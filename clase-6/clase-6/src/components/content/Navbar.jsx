import React from 'react';
import Form from '../layouts/Form';
import Dropdow from '../layouts/Dropdow';
import Secciones from '../layouts/Secciones';

const Navbar = ({contador}) => {
  const listDrowdon = ["Hombre", "Mujer", "Niños", "Bebe"]
  
    return (
        <> 
          {
            /*
              Comentario!
            */
          }
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav me-auto">
                    <Secciones/>
                    <Dropdow lista={listDrowdon}/>
                  </ul>
                  <Form busqueda="Buscar Producto"/>
                  <p>{contador}</p>
                </div>
              </div>
            </nav>
        </>
    );
}

export default Navbar;
