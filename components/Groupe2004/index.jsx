import React from "react";
import styled from "styled-components";
import { SegoeuiRegularNormalBlack20px } from "../../styledMixins";


function Groupe2004(props) {
  const { className } = props;

  return (
    <Groupe20041 className={`groupe-2004 ${className || ""}`}>
      <PlusDinfos className="plus-dinfos-1">Plus d&#39;infos</PlusDinfos>
    </Groupe20041>
  );
}

const Groupe20041 = styled.div`
  position: absolute;
  width: 105px;
  height: 27px;
  top: 196px;
  left: 56px;
  display: flex;

  &.groupe-2004.groupe-2006 {
    top: 665px;
    left: 491px;
  }

  &.groupe-2004.groupe-2006-1 {
    top: 665px;
    left: 491px;
  }

  &.groupe-2004.groupe-2006-2 {
    top: 665px;
    left: 491px;
  }

  &.groupe-2004.groupe-2006-3 {
    top: 665px;
    left: 491px;
  }
`;

const PlusDinfos = styled.div`
  ${SegoeuiRegularNormalBlack20px}
  margin-right: -2px;
  flex: 1;
  margin-bottom: -2px;
  width: 105px;
  letter-spacing: 0;
  line-height: 20px;
`;

export default Groupe2004;
