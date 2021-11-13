import React from "react";
import styled from "styled-components";
// import './escena.css'; + div className="escena"..

const selected = {
  border: `2px solid black`,
  borderRadius: '50px',
  margin: '20px 20px 0px 20px',
  textAlign: 'center',
  fontSize: 'small',
  backgroundColor: '#f5b7b1',
  padding: '0.5rem',
};

const noSelected = {
  border: `2px solid black`,
  borderRadius: '50px',
  margin: '20px 20px 0px 20px',
  textAlign: 'center',
  fontSize: 'small',
  opacity: '0.6',
  backgroundColor: 'white',
  padding: '0.5rem',
};

const Line = styled.p `
  padding: 4px;
`;

const Escena = ({ index, consell, position, selectScene }) => {
  console.log("Index: " + index + " Position: " + position);

  return (
    <div
      key={index}
      position={position}
      index={index}
      style={selectScene !== 0 ? selected : noSelected}
    >
      <Line>{consell}</Line >
    </div>
  );
};

export default Escena;
