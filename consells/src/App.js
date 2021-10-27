import React,{Fragment} from 'react';
import Escena from './components/escena/Escena';
import Consells from './components/Consells';
import Desplacar from './components/Desplacar'



function App() {

  return (

    <Fragment>

      <Desplacar />
      
      {Consells.map((consell, index) => ( // https://reactjs.org/docs/lists-and-keys.html#keys
      <Escena key={index} frase={consell} /> //Prop {consell}
      ))}
      
      
    </Fragment>
  );
}

export default App;
