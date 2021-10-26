import React from 'react';
import './escena.css';


const Escena = ({frase}) => {
    return ( 
        <div className="escena">
            <p>{frase}</p>
        </div>
     );
}
 
export default Escena;