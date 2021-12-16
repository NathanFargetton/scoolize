import React from "react";
import styled from "styled-components";
import { HeeboBoldOrange25px, Border1pxFf5d22 } from "../../styledMixins";


function Composant1011(props) {
  const { children } = props;

  return (
    <Composant10111>
      <Mathmatiques>{children}</Mathmatiques>
    </Composant10111>
  );
}

const Composant10111 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-top: 19px;
  display: flex;
  padding: 13.5px 75px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const Mathmatiques = styled.div`
  ${HeeboBoldOrange25px}
  width: 181px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default Composant1011;
