import React from "react";
import Navigation3 from "../Navigation3";
import Bouton from "../Bouton";
import Composant4410 from "../Composant4410";
import styled from "styled-components";
import { HeeboBoldOrange14px } from "../../styledMixins";


function Navigation52(props) {
  const { className, boutonProps, boutonProps2 } = props;

  return (
    <Navigation className={`navigation-9 ${className || ""}`}>
      <OverlapGroup3 className="overlap-group3-5">
        <Navigation3 groupe1936Props={boutonProps.groupe1936Props} />
        <Bouton src={boutonProps2.src} />
        <LesConditionsGnr className="les-conditions-gnr-4">
          Les conditions générales et la politique de confidentialité
        </LesConditionsGnr>
        <Composant4410 />
      </OverlapGroup3>
    </Navigation>
  );
}

const Navigation = styled.div`
  position: fixed;
  height: 1080px;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: flex-start;
  min-width: 294px;

  &.navigation-9.navigation-11 {
    z-index: 3;
  }
`;

const OverlapGroup3 = styled.div`
  width: 294px;
  height: 1080px;
  position: relative;
`;

const LesConditionsGnr = styled.p`
  ${HeeboBoldOrange14px}
  position: absolute;
  width: 247px;
  height: 47px;
  top: 1004px;
  left: 15px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default Navigation52;
