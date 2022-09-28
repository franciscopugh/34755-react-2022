import React, {useState} from 'react';
import Navbar from './content/Navbar';
import Form from './layouts/Form';
import Contador from './layouts/Contador';
import '../styles/App.css'
import Home from './layouts/Dolar';
import WeatherApp from './content/WeatherApp';
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
          <Home/>
          <WeatherApp/>
        </>
    );
}

export default App;
