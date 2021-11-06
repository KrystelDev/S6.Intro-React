import React from "react";
// import './escena.css'; + div className="escena"..

const seleccionada = {
  border: `2px solid black`,
  borderRadius: '50px',
  margin: '20px 20px 0px 20px',
  textAlign: 'center',
  fontSize: 'small',
  backgroundColor: '#f5b7b1',
};

const noSeleccionada = {
  border: `2px solid black`,
  borderRadius: '50px',
  margin: '20px 20px 0px 20px',
  textAlign: 'center',
  fontSize: 'small',
  opacity: '0.6'
};

const Escena = ({ index, consell, posicion, seleccionarEscena }) => {
  console.log("index: " + index + " posicion: " + posicion);

  return (
    <div
      key={index}
      posicion={posicion}
      index={index}
      style={seleccionarEscena !== 0 ? seleccionada : noSeleccionada}
    >
      <p>{consell}</p>
    </div>
  );
};

export default Escena;
