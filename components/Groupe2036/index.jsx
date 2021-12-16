import React from "react";
import styled from "styled-components";
import { MontserratBoldWhite75px } from "../../styledMixins";


function Groupe2036(props) {
  const { className } = props;

  return (
    <Groupe2027 className={`groupe-2027 ${className || ""}`}>
      <OverlapGroup2 className="overlap-group2-18">
        <Rectangle633 className="rectangle-633"></Rectangle633>
        <ListeDesVoeux className="liste-des-voeux">Liste des voeux</ListeDesVoeux>
      </OverlapGroup2>
    </Groupe2027>
  );
}

const Groupe2027 = styled.div`
  margin-top: 195px;
  margin-left: 365px;
  display: flex;
  align-items: flex-end;
  min-width: 725px;

  &.groupe-2027.groupe-2036 {
    align-self: center;
    margin-top: 11px;
    margin-left: 93.36px;
  }
`;

const OverlapGroup2 = styled.div`
  width: 725px;
  height: 170px;
  position: relative;
  margin-bottom: 0;
`;

const Rectangle633 = styled.div`
  position: absolute;
  width: 170px;
  height: 725px;
  top: -277px;
  left: 277px;
  background-color: var(--mandarin-pearl);
  border-radius: 85px;
  transform: rotate(-90deg);
`;

const ListeDesVoeux = styled.div`
  ${MontserratBoldWhite75px}
  position: absolute;
  top: 36px;
  left: 61px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

export default Groupe2036;
