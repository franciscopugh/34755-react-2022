import React, {useState} from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);
    
    function modificarContador(operacion) {
        if(operacion == "+") {
            setContador(contador + 1) //contador = contador + 1
        } else {
            if(contador > 1) {
                setContador(contador - 1)
            }
            
        }
    }
   
    return (
        <>
            <button onClick={() => modificarContador("+")} className='btn btn-dark'>Sumar</button>
                {contador}
            <button onClick={() => modificarContador("-")} className='btn btn-light'>Restar</button>
        </>
    );
}

export default Contador;
