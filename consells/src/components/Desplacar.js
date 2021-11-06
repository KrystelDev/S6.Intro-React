import React from "react";
import styled from "styled-components";


const Button = styled.button`
  border-radius: 1px;
  border: 1px solid grey;
  background-color: gainsboro;
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

const Desplacar = ({ sumarPosicion, restarPosicion }) => {
  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          restarPosicion();
        }}
      >
        Anterior
      </Button>
      {/* <Button 
        type="button" 
        onClick={() => {
            sumarPosicion();
        }}
      >
        Següent
      </Button> */}
      <Button type="button" onClick={sumarPosicion}>
        Següent
      </Button>
    </Container>
  );
  
};

export default Desplacar;
