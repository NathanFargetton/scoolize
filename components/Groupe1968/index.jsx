import React from "react";
import styled from "styled-components";
import { SegoeuiRegularNormalDoveGray15px, Border1pxFf5d22 } from "../../styledMixins";


function Groupe1968(props) {
  const { className } = props;

  return (
    <Groupe19681 className={`groupe-1968-1 ${className || ""}`}>
      <JeNeSaisPasEncore className="je-ne-sais-pas-encore">Je ne sais pas encore</JeNeSaisPasEncore>
    </Groupe19681>
  );
}

const Groupe19681 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-top: 102px;
  display: flex;
  padding: 10px 95px;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;

  &.groupe-1968-1.groupe-1968-2 {
    margin-top: 70px;
  }

  &.groupe-1968-1.groupe-1968-3 {
    margin-top: 185px;
    margin-left: 19px;
  }
`;

const JeNeSaisPasEncore = styled.p`
  ${SegoeuiRegularNormalDoveGray15px}
  width: 142px;
  height: 34px;
  letter-spacing: 0;
  line-height: 15px;
`;

export default Groupe1968;
