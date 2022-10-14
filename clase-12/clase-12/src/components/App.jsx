import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../styles/App.css'
import { DarkModeProvider } from '../context/darkModeContext';
import Navbar from './content/Navbar';
import Carrito from './content/Carrito';
import Home from './content/Home';
import About from './content/About';
import Contacto from './content/Contacto';
import Producto from './content/Producto';
import Footer from './content/Footer'
import Categoria from './content/Categoria';
const App = () => {

    return (
        <>
        <DarkModeProvider props= {"hola"}>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/producto/:id" element={<Producto/>} />
              <Route path="/categoria/:id" element={<Categoria/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="*" element={<h1>Error 404</h1>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </DarkModeProvider>
          
        </>
    );
}

export default App;
