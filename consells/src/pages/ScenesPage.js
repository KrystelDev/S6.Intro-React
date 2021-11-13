import React, { useState } from "react";
import Escena from "../components/escena/Escena";
import Consells from "../components/Consells";
import Displace from "../components/Displace";
import styled from "styled-components";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";

let Content = styled.div`
    background-image: url(${img1});
    height: 90vh;
    background-repeat: no-repeat;
  `;

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

  switch (position) {
    case 0:
      Content = styled.div`
        background-image: url(${img1});
        height: 90vh;
        background-repeat: no-repeat;
      `;
      break;

    case 1:
      Content = styled.div`
        background-image: url(${img2});
        height: 90vh;
        background-repeat: no-repeat;
      `;
      break;

    case 2:
      Content = styled.div`
        background-image: url(${img3});
        height: 90vh;
        background-repeat: no-repeat;
      `;
      break;

    case 3:
      Content = styled.div`
        background-image: url(${img4});
        height: 90vh;
        background-repeat: no-repeat;
      `;
      break;

    default:
      break;
  }

  return (
    <Content>
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
    </Content>
  );
}

export default App;
