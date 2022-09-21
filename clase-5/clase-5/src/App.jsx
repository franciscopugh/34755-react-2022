import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Contador from './components/Contador';
import './App.css'
import Pruebo from './components/Pruebo';

const App = () => {
  const [state, setstate] = useState(0);

    return (
        <>
          <Navbar contador={state}/>
          <button className='btn btn-dark' onClick={() => setstate(state + 1)}>Haceme click!</button>
          {
          //<Form busqueda="Buscar Usuario"/>
          }

          <Contador/>
          <Pruebo/>
        </>
    );
}

export default App;
