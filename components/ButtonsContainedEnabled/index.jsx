import React from "react";
import { Link } from "react-router-dom";
import Composant211 from "../Composant211";
import styled from "styled-components";
import { RobotoMediumWhite14px } from "../../styledMixins";


function ButtonsContainedEnabled(props) {
  const { sEnregistrerPasserAuFormulaire, composant211Props } = props;

  return (
    <Link to="/inscription-etablissement-reussis">
      <ButtonsContainedEnabled1>
        <OverlapGroup1>
          <Composant211 src={composant211Props.src} />
          <SenregistrerPasserAuFormulaire>{sEnregistrerPasserAuFormulaire}</SenregistrerPasserAuFormulaire>
        </OverlapGroup1>
      </ButtonsContainedEnabled1>
    </Link>
  );
}

const ButtonsContainedEnabled1 = styled.div`
  margin-top: 105px;
  margin-left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 590px;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 590px;
  height: 56px;
  position: relative;
`;

const SenregistrerPasserAuFormulaire = styled.p`
  ${RobotoMediumWhite14px}
  position: absolute;
  top: 20px;
  left: 135px;
  text-align: center;
  letter-spacing: 1.25px;
  line-height: 14px;
  white-space: nowrap;
`;

export default ButtonsContainedEnabled;
