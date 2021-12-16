import React from "react";
import styled from "styled-components";


function Composant401(props) {
  const { src, className } = props;

  return (
    <Composant4012
      className={`composant-40-12 ${className || ""}`}
      style={{ backgroundImage: `url(${src})` }}
    ></Composant4012>
  );
}

const Composant4012 = styled.div`
  width: 22px;
  height: 42px;
  align-self: flex-start;
  background-size: cover;
  background-position: 50% 50%;
`;

export default Composant401;
