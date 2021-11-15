import React from "react";
import styled from "styled-components";
import imgWellcome from "../img/Start.jpg";

let Wellcome = styled.div`
  background-image: url(${imgWellcome});
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  margin: -8px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 0 0.02rem white, 0 0 0.8rem black;
  font-weight: bold;
  font-size: x-large;
  text-align: center;
  overflow: hidden;
`;

const Button = styled.button`
  border-radius: 50%;
  height: 3rem;
  width: 12rem;
  font-size: large;
  text-align: center;
  font-weight: bold;
  margin: -1rem;
`;

const WellcomePage = ({ changeFirstTime }) => {
  return (
    <Wellcome>
      <h1>¿Preparat per aquesta aventura espacial?</h1>
      <Button
        type="button"
        onClick={() => {
          changeFirstTime();
        }}
      >
        Començar
      </Button>
    </Wellcome>
  );
};

export default WellcomePage;
