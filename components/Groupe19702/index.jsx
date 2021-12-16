import React from "react";
import Groupe1944 from "../Groupe1944";
import styled from "styled-components";
import { HeeboBoldBlack35px } from "../../styledMixins";


function Groupe19702(props) {
  const { quandSouhaitezVous, className, groupe1944Props } = props;

  return (
    <Groupe1970 className={`groupe-1970-3 ${className || ""}`}>
      <OSouhaitezVousSu className="o-souhaitez-vous-su">{quandSouhaitezVous}</OSouhaitezVousSu>
      <Groupe1944 lycen={groupe1944Props.lycen} className={groupe1944Props.className} />
    </Groupe1970>
  );
}

const Groupe1970 = styled.div`
  width: 1098px;
  height: 148px;
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &.groupe-1970-3.groupe-1970-4 {
    align-self: unset;
  }

  &.groupe-1970-3.groupe-1970-5 {
    align-self: unset;
  }

  &.groupe-1970-3.groupe-1970-6 {
    align-self: flex-end;
  }
`;

const OSouhaitezVousSu = styled.div`
  ${HeeboBoldBlack35px}
  margin-left: 182px;
  margin-right: 180px;
  flex: 1;
  margin-bottom: 0.5px;
  margin-top: -2.5px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
`;

export default Groupe19702;
