import React from "react";
import Navigation3 from "../Navigation3";
import Bouton from "../Bouton";
import Composant4410 from "../Composant4410";
import styled from "styled-components";
import { HeeboBoldOrange14px } from "../../styledMixins";


function Navigation2(props) {
  const { className, boutonProps, boutonProps2 } = props;

  return (
    <Navigation className={`navigation-22 ${className || ""}`}>
      <OverlapGroup className="overlap-group-19">
        <NavigationBackground className="navigation-background-2"></NavigationBackground>
        <Navigation3 groupe1936Props={boutonProps.groupe1936Props} />
        <Bouton src={boutonProps2.src} className={boutonProps2.className} />
        <LesConditionsGnr className="les-conditions-gnr-7">
          Les conditions générales et la politique de confidentialité
        </LesConditionsGnr>
        <Composant4410 />
      </OverlapGroup>
    </Navigation>
  );
}

const Navigation = styled.div`
  position: fixed;
  height: 1080px;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  min-width: 294px;

  &.navigation-22.navigation-23 {
    z-index: 3;
  }

  &.navigation-22.navigation-24 {
    z-index: 3;
  }

  &.navigation-22.navigation-25 {
    z-index: 3;
  }

  &.navigation-22.navigation-26 {
    z-index: 3;
  }

  &.navigation-22.navigation-27 {
    z-index: 3;
  }

  &.navigation-22.navigation-28 {
    z-index: 3;
  }

  &.navigation-22.navigation-29 {
    z-index: 3;
  }
`;

const OverlapGroup = styled.div`
  width: 294px;
  height: 1080px;
  position: relative;
`;

const NavigationBackground = styled.div`
  position: absolute;
  width: 270px;
  height: 1080px;
  top: 0;
  left: 0;
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

export default Navigation2;
