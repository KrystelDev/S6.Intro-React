import React, { useState } from "react";
import Benvingut from "./components/Benvingut";
import EscenasPage from './pages/EscenasPage';
import ReactDOM from "react-dom";



function App() {
  
  let [primeraVez, setPrimeraVez] = useState(true)

  function cambiarPrimeraVez() {
    setPrimeraVez(false);
    console.log("funcio: " + primeraVez)
  }
  console.log(primeraVez)
  return (primeraVez !== true ? (
    <EscenasPage />
  ) : (
    <Benvingut cambiarPrimeraVez={cambiarPrimeraVez} />
  ));
}

export default App;
