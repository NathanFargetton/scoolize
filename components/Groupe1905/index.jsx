import React from "react";
import styled from "styled-components";
import { HeeboBoldBlack20px, SegoeuiRegularNormalDoveGray20px } from "../../styledMixins";


function Groupe1905(props) {
  const { lesDees, leDeesDiplmeEur, className } = props;

  return (
    <Groupe19051 className={`groupe-1905 ${className || ""}`}>
      <LesDEES className="les-dees">{lesDees}</LesDEES>
      <LeDEESDiplmeEur className="le-dees-diplme-eur">{leDeesDiplmeEur}</LeDEESDiplmeEur>
    </Groupe19051>
  );
}

const Groupe19051 = styled.div`
  width: 1122px;
  height: 207px;
  margin-top: 66px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.groupe-1905.groupe-1902 {
    height: 286px;
    margin-top: 70px;
    margin-left: 2px;
    justify-content: unset;
  }
`;

const LesDEES = styled.div`
  ${HeeboBoldBlack20px}
  width: 414px;
  height: 57px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 22px;
`;

const LeDEESDiplmeEur = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  margin-left: 85px;
  margin-right: -2px;
  flex: 1;
  max-height: 115px;
  margin-bottom: -2px;
  height: 115px;
  letter-spacing: 0;
  line-height: 20px;
`;

const AACSBEPASEQUIS = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}

  .groupe-1905.groupe-1902  & {
    margin-left: 83px;
    margin-top: 38px;
    max-height: unset;
    height: unset;
  }
`;

export default Groupe1905;
