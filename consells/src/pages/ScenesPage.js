import React, { useState } from "react";
import Escena from "../components/escena/Escena";
import Consells from "../components/Consells";
import Displace from "../components/Displace";
import styled from "styled-components";
import Footer from "../components/Footer";

const ScenesPage = ({ currantYear }) => {
  //Variable to control the position of the array
  let [position, setPosition] = useState(0);

  //addPosition and subtractPosition,they are called from the Displace buttons
  function addPosition() {
    position++;
    if (position > Consells.length - 1) {
      position = 0;
    }
    setPosition(position);
  }

  function subtractPosition() {
    position--;
    if (position < 0) {
      position = Consells.length - 1;
    }
    setPosition(position);
  }

  //Phrase style
  let Content = styled.div`
    background-image: url(${Consells[position].img});
    height: 100vh;
    background-repeat: no-repeat;
    margin: -8px;
    background-position: center bottom;
    background-size: cover;
  `;

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

      <Footer currantYear={currantYear} />
      
    </Content>
  );
}

export default ScenesPage;
