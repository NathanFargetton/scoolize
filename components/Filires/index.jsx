import React from "react";
import ProjectHeader3 from "../ProjectHeader3";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Navigation52 from "../Navigation52";
import Groupe1907 from "../Groupe1907";
import Footer32 from "../Footer32";
import styled from "styled-components";
import { HeeboNormalBlack40px, HeeboNormalBlack20px, HeeboNormalBlack25px } from "../../styledMixins";
import "./Filires.css";

function Filires(props) {
  const {
    x12,
    scoolizeLogoPalettes1,
    trac1992,
    lesFiliresToujoursUneGalre,
    cEstNormalQuOnVousAideUnPeu,
    bonCEstPartiSuivezNous,
    image9,
    projectHeader3Props,
    filliresProps,
    formationProps,
    groupe1882Props,
    navigation52Props,
    groupe1907Props,
    footer32Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="filieres screen">
        <Top>
          <OverlapGroup2>
            <ProjectHeader3 titleProps={projectHeader3Props.titleProps} />
            <Tabs>
              <FlexRow>
                <FlexCol>
                  <X12 src={x12} />
                  <Diplme />
                </FlexCol>
                <Coles />
                <Fillires className={filliresProps.className}>{filliresProps.children}</Fillires>
                <Mtiers />
                <Formation className={formationProps.className} />
              </FlexRow>
              <Underline></Underline>
            </Tabs>
            <Groupe1882 className={groupe1882Props.className} />
          </OverlapGroup2>
        </Top>
        <Navigation52 boutonProps={navigation52Props.boutonProps} boutonProps2={navigation52Props.boutonProps2} />
        <OverlapGroup5>
          <OverlapGroup1>
            <ScoolizeLogoPalettes1 src={scoolizeLogoPalettes1} />
            <OverlapGroup>
              <Trac1992 src={trac1992} />
              <LesFiliresToujoursUneGalre>{lesFiliresToujoursUneGalre}</LesFiliresToujoursUneGalre>
              <CestNormalQuonVousAideUnPeu>{cEstNormalQuOnVousAideUnPeu}</CestNormalQuonVousAideUnPeu>
            </OverlapGroup>
          </OverlapGroup1>
          <BonCestPartiSuivezNous>{bonCEstPartiSuivezNous}</BonCestPartiSuivezNous>
        </OverlapGroup5>
        <OverlapGroup4>
          <Groupe1907
            quappelleTOnFormation={groupe1907Props.quappelleTOnFormation}
            uneFormationEstUn={groupe1907Props.uneFormationEstUn}
            className={groupe1907Props.className}
          />
          <Image9 src={image9} />
        </OverlapGroup4>
        <Footer32 {...footer32Props} />
      </div>
    </div>
  );
}

const Top = styled.div`
  position: fixed;
  height: 136px;
  top: 0;
  left: 270px;
  z-index: 4;
  display: flex;
  align-items: flex-start;
  min-width: 1650px;
`;

const OverlapGroup2 = styled.div`
  width: 1650px;
  height: 136px;
  position: relative;
`;

const Tabs = styled.div`
  position: absolute;
  width: 362px;
  top: 34px;
  left: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 94px;
`;

const FlexRow = styled.div`
  height: 92px;
  position: relative;
  margin-left: 2px;
  display: flex;
  align-items: flex-end;
  min-width: 364px;
`;

const FlexCol = styled.div`
  width: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 92px;
`;

const X12 = styled.img`
  width: 47px;
  height: 47px;
  object-fit: cover;
`;

const Underline = styled.div`
  width: 53px;
  height: 2px;
  margin-right: 21px;
  background-color: var(--ff5d22);
`;

const OverlapGroup5 = styled.div`
  width: 1222px;
  height: 536px;
  z-index: 2;
  position: relative;
  align-self: center;
  margin-top: 68px;
  margin-left: 344px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1224px;
  height: 500px;
  top: 0;
  left: 0;
`;

const ScoolizeLogoPalettes1 = styled.img`
  position: absolute;
  width: 500px;
  height: 500px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 831px;
  height: 229px;
  top: 135px;
  left: 393px;
`;

const Trac1992 = styled.img`
  position: absolute;
  width: 829px;
  height: 229px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const LesFiliresToujoursUneGalre = styled.div`
  ${HeeboNormalBlack40px}
  position: absolute;
  width: 772px;
  height: 200px;
  top: 12px;
  left: 30px;
  text-shadow: 0px 3px 6px #00000045;
  letter-spacing: 0;
  line-height: 50px;
`;

const CestNormalQuonVousAideUnPeu = styled.div`
  ${HeeboNormalBlack20px}
  position: absolute;
  width: 772px;
  height: 55px;
  top: 174px;
  left: 59px;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

const BonCestPartiSuivezNous = styled.div`
  ${HeeboNormalBlack25px}
  position: absolute;
  width: 366px;
  height: 47px;
  top: 488px;
  left: 392px;
  letter-spacing: 0;
  line-height: 22px;
`;

const OverlapGroup4 = styled.div`
  width: 1143px;
  height: 1029px;
  z-index: 1;
  position: relative;
  align-self: center;
  margin-top: 136px;
  margin-left: 235px;
`;

const Image9 = styled.img`
  position: absolute;
  width: 705px;
  height: 762px;
  top: 267px;
  left: 218px;
  object-fit: cover;
`;

export default Filires;
