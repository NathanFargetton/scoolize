import React from "react";
import styled from "styled-components";


function Composant211(props) {
  const { src } = props;

  return (
    <Composant2111>
      <Trac1991 src={src} />
    </Composant2111>
  );
}

const Composant2111 = styled.div`
  position: absolute;
  width: 590px;
  height: 56px;
  top: 0;
  left: 0;
  display: flex;
`;

const Trac1991 = styled.img`
  margin-top: -3.5px;
  margin-left: -4.5px;
  margin-right: -4.5px;
  flex: 1;
  margin-bottom: -5.5px;
  width: 599px;
  object-fit: cover;
`;

export default Composant211;
