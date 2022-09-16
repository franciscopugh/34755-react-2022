import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import './App.css'

const App = () => {
    return (
        <>
          <Navbar/>
          <Form busqueda="Buscar Usuario"/>
        </>
    );
}

export default App;
