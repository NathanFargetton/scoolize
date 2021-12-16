import React from "react";
import styled from "styled-components";
import { HeeboBoldOrange25px, Border1pxFf5d22 } from "../../styledMixins";


function Composant911(props) {
  const { children } = props;

  return (
    <Composant9111>
      <PrtBancaire>{children}</PrtBancaire>
    </Composant9111>
  );
}

const Composant9111 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  display: flex;
  padding: 13.5px 84px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const PrtBancaire = styled.div`
  ${HeeboBoldOrange25px}
  width: 163px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default Composant911;
