import React from "react";
import styled from "styled-components";
import { HeeboBoldBlack20px, SegoeuiRegularNormalDoveGray20px } from "../../styledMixins";


function Groupe1906(props) {
  const { lesDiplmesViss, tousLesDiplmesNa, className } = props;

  return (
    <Groupe19061 className={`groupe-1906 ${className || ""}`}>
      <LesDiplmesViss className="les-diplmes-viss">{lesDiplmesViss}</LesDiplmesViss>
      <TousLesDiplmesNa className="tous-les-diplmes-na">{tousLesDiplmesNa}</TousLesDiplmesNa>
    </Groupe19061>
  );
}

const Groupe19061 = styled.div`
  width: 1124px;
  height: 268px;
  margin-top: 57px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.groupe-1906.groupe-1904 {
    height: 235px;
    margin-top: 70px;
  }

  &.groupe-1906.groupe-1903 {
    height: 186px;
    margin-top: 70px;
  }
`;

const LesDiplmesViss = styled.div`
  ${HeeboBoldBlack20px}
  width: 414px;
  height: 57px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 22px;
`;

const TousLesDiplmesNa = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  margin-left: 85px;
  margin-right: -2px;
  flex: 1;
  max-height: 176px;
  margin-bottom: -2px;
  height: 176px;
  letter-spacing: 0;
  line-height: 20px;
`;

const LeBachelorEstUnD = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1906.groupe-1904  & {
    max-height: 143px;
    height: 143px;
  }
`;

const LeDiplmeDeCompta = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1906.groupe-1903  & {
    max-height: 94px;
    height: 94px;
  }
`;

export default Groupe1906;
