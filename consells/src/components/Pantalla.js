import React from "react";
import Benvingut from "./Benvingut";
import App from "../App";
import ReactDOM from "react-dom";

let primeraVez = true;

function Pantalla() {
  function cambiarPrimeravez(primeraVez) {
    primeraVez = false;
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  return primeraVez !== true ? (
    <App />
  ) : (
    <Benvingut cambiarPrimeravez={cambiarPrimeravez} primeraVez={primeraVez} />
  );
}

export default Pantalla;
