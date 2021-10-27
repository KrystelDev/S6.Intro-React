import React from 'react';
// import './escena.css'; + div className="escena"..
import styled from 'styled-components';


const Escena = ({frase}) => {

    const Escenes = styled.div`
        border: 2px solid black;
        border-radius: 50px;
        margin: 20px 20px 0px 20px;
        text-align: center;
        font-size: small;
    `;

    return ( 
        <Escenes>
            <p>{frase}</p>
        </Escenes>
     );
}
 
export default Escena;