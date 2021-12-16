import React from "react";
import Composant491 from "../Composant491";
import styled from "styled-components";
import { Border1pxBlack2 } from "../../styledMixins";


function Groupe1971(props) {
  const { className, composant491Props } = props;

  return (
    <Groupe19711 className={`groupe-1971 ${className || ""}`}>
      <Composant491>{composant491Props.children}</Composant491>
    </Groupe19711>
  );
}

const Groupe19711 = styled.div`
  ${Border1pxBlack2}
  height: 56px;
  position: relative;
  display: flex;
  padding: 13px 24px;
  align-items: flex-start;
  min-width: 1098px;
  background-color: var(--white);

  &.groupe-1971.groupe-1983 {
    margin-top: 10px;
  }
`;

export default Groupe1971;
