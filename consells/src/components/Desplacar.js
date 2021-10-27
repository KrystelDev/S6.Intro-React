import React from 'react';
import styled, { css } from 'styled-components';

const Desplacar= () => {

    const Button = styled.button`
    border-radius: 1px;
    border: 1px solid grey;
    background: gainsboro;
    width: 50%;
    height: 100%;
    font-size: larger;
    `;

    const Container = styled.div`
    text-align: center;
    size: 3px;
    height: 10vh;
    margin: 2px 2px 0px 2px;
    `;

    return ( 
        <Container>
            <Button onClick=''>Anterior</Button>
            <Button onClick=''>Següent</Button>
        </Container>
     );
}
 
export default Desplacar;