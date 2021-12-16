import React from "react";
import Groupe1970 from "../Groupe1970";
import styled from "styled-components";


function Groupe1992(props) {
  const { className, groupe1970Props } = props;

  return (
    <Groupe19921 className={`groupe-1992 ${className || ""}`}>
      <Groupe1970>{groupe1970Props.children}</Groupe1970>
    </Groupe19921>
  );
}

const Groupe19921 = styled.div`
  width: 734px;
  height: 143px;
  position: relative;
  margin-left: 4px;
  display: flex;

  &.groupe-1992.groupe-1992-1 {
    height: 56px;
  }
`;

export default Groupe1992;
