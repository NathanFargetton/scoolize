import React from "react";
import styled from "styled-components";


function Composant421(props) {
  const { src, className } = props;

  return (
    <Composant4212
      className={`composant-42-12 ${className || ""}`}
      style={{ backgroundImage: `url(${src})` }}
    ></Composant4212>
  );
}

const Composant4212 = styled.div`
  width: 53px;
  height: 38px;
  margin-left: 25px;
  margin-top: 2.51px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default Composant421;
