import React from "react";
import styled from "styled-components";
import { HeeboBoldBlack35px } from "../../styledMixins";


function Groupe1970(props) {
  const { children, className } = props;

  return (
    <Groupe19701 className={`groupe-1970 ${className || ""}`}>
      <ListeDesTablissem className="liste-des-tablissem">{children}</ListeDesTablissem>
    </Groupe19701>
  );
}

const Groupe19701 = styled.div`
  flex: 1;
  width: 736px;
  display: flex;

  &.groupe-1970.groupe-1970-2 {
    height: 105px;
    align-self: flex-end;
    margin-right: -2px;
    flex: unset;
  }
`;

const ListeDesTablissem = styled.div`
  ${HeeboBoldBlack35px}
  margin-top: -2.5px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: 0.5px;
  width: 736px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
`;

export default Groupe1970;
