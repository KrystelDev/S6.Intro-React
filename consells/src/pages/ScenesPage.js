import React, { useState } from "react";
import Escena from "../components/escena/Escena";
import Consells from "../components/Consells";
import Displace from "../components/Displace";

function App() {
  let [position, setPosition] = useState(0);

  console.log("Position App: " + position);

  function addPosition() {
    if (position >= Consells.length - 1) {
      setPosition(0);
    } else {
      position++;
      setPosition(position);
    }
    console.log("addPosition: " + position);
  }

  function subtractPosition() {
    if (position <= 0) {
      setPosition(Consells.length - 1);
    } else {
      position--;
      setPosition(position);
    }
    console.log("subtractPosition: " + position);
  }

  return (
    <div>
      <Displace addPosition={addPosition} subtractPosition={subtractPosition} />

      {Consells.map(
        (
          consell,
          index // https://reactjs.org/docs/lists-and-keys.html#keys
        ) => (
          <Escena
            key={index}
            consell={consell.txt}
            position={position}
            index={index}
            selectScene={position === index ? 1 : 0}
          /> //Prop {consell}
        )
      )}
    </div>
  );
}

export default App;
