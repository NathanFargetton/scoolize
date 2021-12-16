import React from "react";
import styled from "styled-components";
import { HeeboBoldOrange25px, Border1pxFf5d22 } from "../../styledMixins";


function Composant921(props) {
  const { children } = props;

  return (
    <Composant9211>
      <FinancementPersonnel>{children}</FinancementPersonnel>
    </Composant9211>
  );
}

const Composant9211 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-left: 70px;
  display: flex;
  padding: 13.5px 27px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const FinancementPersonnel = styled.div`
  ${HeeboBoldOrange25px}
  width: 275px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default Composant921;
