/*const productos = [
        {
            id:1, nombre: "Papa", marca: "Pepita", precio: 230, stock: 20
        },
        {
            id:2, nombre: "Te", marca: "tecito", precio: 130, stock: 25
        },
        {
            id:3, nombre: "Mate cocido", marca: "Matecito", precio: 120, stock: 22
        },
        {
            id:4, nombre: "Cafe", marca: "Le Cafe", precio: 430, stock: 10
        },
    ]

    const consultaBDD = (habilito) => {
        return new Promise((resolve, reject) => { //(req,res)
            if(habilito) { //habilito == true
                resolve(productos)
            } else {
                reject("No habilitado")
            }
            
        })
    }

    consultaBDD(true).then(data => console.log(data))*/


import React, {useState, useEffect} from 'react';

const Dolar = () => {

    const [dolar, setDolar] = useState([]);
    useEffect(() => {
        const mostrarDolar = () => {

            fetch('https://criptoya.com/api/dolar')
            .then(response => response.json())
            .then(({blue, ccb, ccl, mep}) => {
                setDolar(Object.entries({blue, ccb, ccl, mep}).map((moneda, indice) => <p key={indice}>Tipo: {moneda[0]} - ${moneda[1]}</p>))
                console.log(dolar)
            })
            
            //[blue, 285] = <p>Tipo: Blue, valor: $285 <p>
    
        }
        
        mostrarDolar()

        setInterval(() => {
            mostrarDolar()
            console.log("Pase")
        }, 60000)
        
    }, []);
  
    return (
        <>
           {dolar}
        </>
    );
}

export default Dolar;
