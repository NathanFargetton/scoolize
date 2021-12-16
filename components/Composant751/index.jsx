import React from "react";
import styled from "styled-components";
import { HeeboBoldOrange25px, Border1pxFf5d22 } from "../../styledMixins";


function Composant751(props) {
  const { children } = props;

  return (
    <Composant7511>
      <CPFCIFPTP>{children}</CPFCIFPTP>
    </Composant7511>
  );
}

const Composant7511 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-top: 13px;
  display: flex;
  padding: 13.5px 80px;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const CPFCIFPTP = styled.div`
  ${HeeboBoldOrange25px}
  width: 172px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default Composant751;
