import React, { Fragment } from "react";
import Escena from "./components/escena/Escena";
import Consells from "./components/Consells";
import Desplacar from "./components/Desplacar";
import ReactDOM from "react-dom";

var posicion = 0;

function App() {
  
  function sumarPosicion() {
    posicion++;
    if (posicion > Consells.length - 1) {
      posicion = 0;
    }
    console.log("posicion: " + posicion);
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  function restarPosicion() {
    posicion--;
    if (posicion < 0) {
      posicion = Consells.length - 1;
    }
    console.log(posicion);
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  return (
    <Fragment>
      <Desplacar
        sumarPosicion={sumarPosicion}
        restarPosicion={restarPosicion}
      />

      {Consells.map(
        (
          consell,
          index // https://reactjs.org/docs/lists-and-keys.html#keys
        ) => (
          <Escena
            key={index}
            consell={consell}
            posicion={posicion}
            index={index}
            seleccionarEscena={posicion === index ? 1 : 0}
          /> //Prop {consell}
        )
      )}
    </Fragment>
  );
}

export default App;
