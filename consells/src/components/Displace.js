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
  padding: 0.5rem;
`;

const Desplacar = ({ addPosition, subtractPosition }) => {
  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          subtractPosition();
        }}
      >
        Anterior
      </Button>
      {/* <Button 
        type="button" 
        onClick={() => {
            addPosition();
        }}
      >
        Següent
      </Button> */}
      <Button type="button" onClick={addPosition}>
        Següent
      </Button>
    </Container>
  );
  
};

export default Desplacar;
