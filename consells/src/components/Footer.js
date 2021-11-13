import React from "react";
import signature from "../img/yooo.png";
import styled from "styled-components";

const FooterFlex = styled.div`
  display: Flex;
  justify-content: space-between;
`;

const Signature = styled.img`
  height: 5vh;
  padding-top: 0.5rem;
`;

const Footer = ({ currantYear }) => {
  return (
    <FooterFlex>
      <p>Tots els drets reservats Copyright &copy; {currantYear} </p>
      <Signature src={signature} alt="Signat Krystel R"></Signature>
    </FooterFlex>
  );
};

export default Footer;
