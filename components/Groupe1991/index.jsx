import React from "react";
import Composant891 from "../Composant891";
import styled from "styled-components";


function Groupe1991(props) {
  const { className, composant891Props, composant8912Props } = props;

  return (
    <Groupe2043 className={`groupe-2043 ${className || ""}`}>
      <Composant891 className={composant891Props.className}>{composant891Props.children}</Composant891>
      <Composant891 className={composant8912Props.className}>{composant8912Props.children}</Composant891>
    </Groupe2043>
  );
}

const Groupe2043 = styled.div`
  width: 332px;
  height: 148px;
  position: relative;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.groupe-2043.groupe-1991 {
    margin-top: 46px;
    margin-left: unset;
  }
`;

export default Groupe1991;
