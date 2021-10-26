import React,{Fragment} from 'react';
import Escena from './components/escena/Escena';
import Consells from './components/Consells';


function App() {

  return (

    <Fragment>
      
      {Consells.map((consell, index) => ( // https://reactjs.org/docs/lists-and-keys.html#keys
      <Escena key={index} escena={consell} /> //Prop {consell}
      ))}
      
    </Fragment>
  );
}

export default App;
