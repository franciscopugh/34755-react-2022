import { Link } from 'react-router-dom';
import Dropdow from '../layouts/Dropdow';
import Secciones from '../layouts/Secciones';

const Navbar = ({contador}) => {
  const listDrowdon = ["Hombre", "Mujer", "Niños", "Bebe"]
  
    return (
        <> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav me-auto">
                    <Secciones/>
                    
                  </ul>
                  
                </div>
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/carrito"><button className='btn btn-secondary'><i className="fas fa-shopping-cart"></i></button></Link>
                  </li>
                    
                </ul>
              </div>
            </nav>
        </>
    );
}

export default Navbar;
