import React from "react";


const Benvingut = ({cambiarPrimeravez, primeraVez}) => {
  
  return (
    <section>
      <h1>¿Preparado para esta aventura?</h1>
      <button
        type="button"
        onClick={() => {
          cambiarPrimeravez(primeraVez);
        }}
      >
        Empezar
      </button>
    </section>
  );
};

export default Benvingut;
