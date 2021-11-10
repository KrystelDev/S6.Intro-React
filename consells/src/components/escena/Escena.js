import React from "react";
// import './escena.css'; + div className="escena"..

const selected = {
  border: `2px solid black`,
  borderRadius: '50px',
  margin: '20px 20px 0px 20px',
  textAlign: 'center',
  fontSize: 'small',
  backgroundColor: '#f5b7b1',
};

const noSelected = {
  border: `2px solid black`,
  borderRadius: '50px',
  margin: '20px 20px 0px 20px',
  textAlign: 'center',
  fontSize: 'small',
  opacity: '0.6'
};

const Escena = ({ index, consell, position, selectScene }) => {
  console.log("Index: " + index + " Position: " + position);

  return (
    <div
      key={index}
      position={position}
      index={index}
      style={selectScene !== 0 ? selected : noSelected}
    >
      <p>{consell}</p>
    </div>
  );
};

export default Escena;
