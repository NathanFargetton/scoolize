import React from "react";
import styled from "styled-components";
import { HeeboBoldOrange25px, Border1pxFf5d22 } from "../../styledMixins";


function Composant961(props) {
  const { children } = props;

  return (
    <Groupe1959>
      <DiplmeDingnieur>{children}</DiplmeDingnieur>
    </Groupe1959>
  );
}

const Groupe1959 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  display: flex;
  padding: 13.5px 51px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const DiplmeDingnieur = styled.div`
  ${HeeboBoldOrange25px}
  width: 229px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Composant9611 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  display: flex;
  padding: 13.5px 51px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const HistoireGographie = styled.div`
  ${HeeboBoldOrange25px}
  width: 229px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default Composant961;
