import React, { Fragment } from "react";
import Escena from "../components/escena/Escena";
import Consells from "../components/Consells";
import Displace from "../components/Displace";
import ReactDOM from 'react-dom';

let position = 0;

function App() {

  function addPosition() {
    position++;
    if (position > Consells.length - 1) {
      position = 0;
    }
    console.log("addPosition: " + position);
    ReactDOM.render(<App />, document.getElementById('root'));
  }

  function subtractPosition() {
    position--;
    if (position < 0) {
      position = Consells.length - 1;
    }
    console.log("subtractPosition: "+ position);
    ReactDOM.render(<App />, document.getElementById('root'));
  }

  return (
    <Fragment>
      <Displace
        addPosition={addPosition}
        subtractPosition={subtractPosition}
      />

      {Consells.map(
        (
          consell,
          index // https://reactjs.org/docs/lists-and-keys.html#keys
        ) => (
          <Escena
            key={index}
            consell={consell}
            position={position}
            index={index}
            selectScene={position === index ? 1 : 0}
          /> //Prop {consell}
        )
      )}
    </Fragment>
  );
}

export default App;
