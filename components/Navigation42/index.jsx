import React from "react";
import Bouton from "../Bouton";
import Groupe1936 from "../Groupe1936";
import styled from "styled-components";
import { HeeboBoldWhite14px2 } from "../../styledMixins";


function Navigation42(props) {
  const { className, boutonProps } = props;

  return (
    <Navigation className={`navigation ${className || ""}`}>
      <OverlapGroup2 className="overlap-group2">
        <Navigation1 className="navigation-1"></Navigation1>
        <Bouton src={boutonProps.src} className={boutonProps.className} />
        <LesConditionsGnr className="les-conditions-gnr">
          <span className="span0-1 heebo-bold-orange-14px">
            Les conditions générales et la politique de confidentialité{" "}
          </span>
          <span className="span1-1 heebo-bold-white-14px">sont ici !</span>
        </LesConditionsGnr>
        <Underline className="underline" src="/img/underline-1@1x.png" />
        <Groupe1936 />
      </OverlapGroup2>
    </Navigation>
  );
}

const Navigation = styled.div`
  position: fixed;
  height: 1080px;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: flex-start;
  min-width: 294px;
`;

const OverlapGroup2 = styled.div`
  width: 294px;
  height: 1080px;
  position: relative;
`;

const Navigation1 = styled.div`
  position: absolute;
  width: 270px;
  height: 1080px;
  top: 0;
  left: 0;
  background-color: var(--east-bay);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(270px, 0);
  }
`;

const LesConditionsGnr = styled.p`
  ${HeeboBoldWhite14px2}
  position: absolute;
  width: 247px;
  height: 47px;
  top: 1004px;
  left: 15px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Underline = styled.img`
  position: absolute;
  width: 54px;
  height: 1px;
  top: 1049px;
  left: 186px;
  object-fit: cover;
`;

const Navigation2 = styled.div`
  .navigation.navigation-2 & {
    transition: unset;
    cursor: unset;
  }
`;

export default Navigation42;
