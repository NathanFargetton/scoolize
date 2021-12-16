import React from "react";
import styled from "styled-components";
import { Border1pxFf5d22 } from "../../styledMixins";


function Composant896(props) {
  const { src } = props;

  return (
    <Composant8961>
      <STI2D src={src} />
    </Composant8961>
  );
}

const Composant8961 = styled.div`
  ${Border1pxFf5d22}
  flex: 1;
  max-height: 64px;
  height: 64px;
  display: flex;
  padding: 12px 131px;
  align-items: flex-end;
  min-width: 100%;
  background-color: var(--white);
  border-radius: 18px;
`;

const STI2D = styled.img`
  width: 69px;
  height: 37px;
  object-fit: cover;
`;

export default Composant896;
