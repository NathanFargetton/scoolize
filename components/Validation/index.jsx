import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Border1pxDoveGray,
  MontserratBoldOrange60px,
  HeeboNormalBlack48px,
  MontserratBoldOrange41px,
} from "../../styledMixins";
import "./Validation.css";

function Validation(props) {
  const {
    iconAwesomeArrowLeft,
    image8,
    sorbonneUniversit,
    cetTablissementN,
    groupe1943,
    refuserLaProposition,
    iconAwesomeArrowAltCircleLeft,
    laisserCeVuEnAttente,
    x1828739,
    accepterLaProposition,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="validation screen">
        <IconAwesomeArrowLeft src={iconAwesomeArrowLeft} />
        <Image8 src={image8} />
        <SorbonneUniversit>{sorbonneUniversit}</SorbonneUniversit>
        <OverlapGroup>
          <CetTablissementN>{cetTablissementN}</CetTablissementN>
          <Groupe2035>
            <Link to="/liste-1">
              <Groupe1943 style={{ backgroundImage: `url(${groupe1943})` }}></Groupe1943>
            </Link>
            <RefuserLaProposition>{refuserLaProposition}</RefuserLaProposition>
          </Groupe2035>
          <Groupe2034>
            <IconAwesomeArrowAltCircleLeft src={iconAwesomeArrowAltCircleLeft} />
            <LaisserCeVuEnAttente>{laisserCeVuEnAttente}</LaisserCeVuEnAttente>
          </Groupe2034>
          <Groupe2033>
            <X1828739 src={x1828739} />
            <AccepterLaProposition>{accepterLaProposition}</AccepterLaProposition>
          </Groupe2033>
        </OverlapGroup>
      </div>
    </div>
  );
}

const IconAwesomeArrowLeft = styled.img`
  width: 78px;
  height: 76px;
  object-fit: cover;
`;

const Image8 = styled.img`
  width: 382px;
  height: 153px;
  margin-top: 229px;
  margin-left: 286px;
  object-fit: cover;
`;

const SorbonneUniversit = styled.div`
  ${MontserratBoldOrange60px}
  min-height: 75px;
  align-self: center;
  margin-top: 50px;
  margin-left: 2px;
  min-width: 1300px;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  ${Border1pxDoveGray}
  width: 1868px;
  margin-top: 8px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  padding: 62.5px 267px;
  align-items: center;
  min-height: 1010px;
  background-color: var(--white);
`;

const CetTablissementN = styled.div`
  ${MontserratBoldOrange41px}
  min-height: 52px;
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 41px;
  white-space: nowrap;
`;

const Groupe2035 = styled.div`
  width: 616px;
  height: 98px;
  margin-top: 102px;
  margin-right: 78px;
  display: flex;
  justify-content: space-between;
`;

const Groupe1943 = styled.div`
  width: 98px;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;
`;

const RefuserLaProposition = styled.div`
  ${HeeboNormalBlack48px}
  margin-top: 25px;
  margin-bottom: 1px;
  width: 470px;
  margin-right: -2px;
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

const Groupe2034 = styled.div`
  width: 689px;
  height: 82px;
  margin-top: 25px;
  margin-left: 11px;
  display: flex;
  justify-content: space-between;
`;

const IconAwesomeArrowAltCircleLeft = styled.img`
  margin-top: 0;
  margin-bottom: 0;
  width: 81.6484375px;
  margin-left: 0;
  object-fit: cover;
`;

const LaisserCeVuEnAttente = styled.div`
  ${HeeboNormalBlack48px}
  margin-top: 16.8px;
  margin-bottom: -7.2px;
  width: 551px;
  margin-right: -2px;
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

const Groupe2033 = styled.div`
  width: 635px;
  height: 82px;
  margin-top: 33px;
  margin-right: 43px;
  display: flex;
  justify-content: space-between;
`;

const X1828739 = styled.img`
  width: 82px;
  object-fit: cover;
`;

const AccepterLaProposition = styled.div`
  ${HeeboNormalBlack48px}
  margin-top: 17px;
  margin-bottom: -7px;
  width: 497px;
  margin-right: -2px;
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

export default Validation;
