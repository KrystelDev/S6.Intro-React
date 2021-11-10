import React from "react";

const Benvingut = ({CambiarPrimeraVez}) => {

  return (
    <section>
      <h1>¿Preparado para esta aventura?</h1>
      <button
        type="button"
        onClick={() => {
          CambiarPrimeraVez()
        }}
      >
        Empezar
      </button>
    </section>
  );
};

export default Benvingut;
