import React from "react";
import { Link } from "react-router-dom";
import Groupe1876 from "../Groupe1876";
import Button from "../Button";
import Bouton from "../Bouton";
import Composant4410 from "../Composant4410";
import ProjectHeader from "../ProjectHeader";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Groupe1907 from "../Groupe1907";
import Groupe1906 from "../Groupe1906";
import Groupe1905 from "../Groupe1905";
import Footer from "../Footer";
import styled from "styled-components";
import {
  HeeboNormalBlack40px,
  HeeboNormalBlack20px,
  HeeboNormalBlack25px,
  HeeboBoldOrange14px,
} from "../../styledMixins";
import "./Diplomes.css";

function Diplomes(props) {
  const {
    lesConditionsGnr,
    x12,
    scoolizeLogoPalettes1,
    trac1992,
    quelDiplmeChoisir,
    cEstNormalQuOnVousAideUnPeu,
    bonCEstPartiSuivezNous,
    buttonProps,
    boutonProps,
    projectHeaderProps,
    diplmeProps,
    colesProps,
    filliresProps,
    mtiersProps,
    formationProps,
    groupe1882Props,
    groupe1907Props,
    groupe1906Props,
    groupe1905Props,
    groupe19062Props,
    groupe19063Props,
    groupe19052Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="diplomes screen">
        <Navigation>
          <OverlapGroup2>
            <Navigation1>
              <Groupe1936>
                <Groupe1876 />
                <Button className={buttonProps.className} />
              </Groupe1936>
            </Navigation1>
            <Bouton src={boutonProps.src} />
            <LesConditionsGnr>{lesConditionsGnr}</LesConditionsGnr>
            <Composant4410 />
          </OverlapGroup2>
        </Navigation>
        <Link to="/page-d-accueil">
          <Top>
            <OverlapGroup3>
              <ProjectHeader
                className={projectHeaderProps.className}
                projectHeader2Props={projectHeaderProps.projectHeader2Props}
              />
              <Tabs>
                <FlexCol>
                  <X12 src={x12} />
                  <Diplme className={diplmeProps.className} />
                  <Underline></Underline>
                </FlexCol>
                <Coles className={colesProps.className} />
                <Fillires className={filliresProps.className}>{filliresProps.children}</Fillires>
                <Mtiers className={mtiersProps.className} />
                <Formation className={formationProps.className} />
              </Tabs>
              <Groupe1882 className={groupe1882Props.className} />
            </OverlapGroup3>
          </Top>
        </Link>
        <OverlapGroup4>
          <OverlapGroup1>
            <ScoolizeLogoPalettes1 src={scoolizeLogoPalettes1} />
            <OverlapGroup>
              <Trac1992 src={trac1992} />
              <QuelDiplmeChoisir>{quelDiplmeChoisir}</QuelDiplmeChoisir>
              <CestNormalQuonVousAideUnPeu>{cEstNormalQuOnVousAideUnPeu}</CestNormalQuonVousAideUnPeu>
            </OverlapGroup>
          </OverlapGroup1>
          <BonCestPartiSuivezNous>{bonCEstPartiSuivezNous}</BonCestPartiSuivezNous>
        </OverlapGroup4>
        <Content>
          <Groupe1907
            quappelleTOnFormation={groupe1907Props.quappelleTOnFormation}
            uneFormationEstUn={groupe1907Props.uneFormationEstUn}
          />
          <Groupe1906
            lesDiplmesViss={groupe1906Props.lesDiplmesViss}
            tousLesDiplmesNa={groupe1906Props.tousLesDiplmesNa}
          />
          <Groupe1905 lesDees={groupe1905Props.lesDees} leDeesDiplmeEur={groupe1905Props.leDeesDiplmeEur} />
          <Groupe1906
            lesDiplmesViss={groupe19062Props.lesDiplmesViss}
            tousLesDiplmesNa={groupe19062Props.tousLesDiplmesNa}
            className={groupe19062Props.className}
          />
          <Groupe1906
            lesDiplmesViss={groupe19063Props.lesDiplmesViss}
            tousLesDiplmesNa={groupe19063Props.tousLesDiplmesNa}
            className={groupe19063Props.className}
          />
          <Groupe1905
            lesDees={groupe19052Props.lesDees}
            leDeesDiplmeEur={groupe19052Props.leDeesDiplmeEur}
            className={groupe19052Props.className}
          />
        </Content>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

const Navigation = styled.div`
  position: fixed;
  height: 1080px;
  top: 0;
  left: 0;
  z-index: 4;
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
  height: 1080px;
  top: 0;
  left: 0;
  display: flex;
  padding: 343px 14px;
  align-items: flex-start;
  min-width: 270px;
  background-color: var(--east-bay);
`;

const Groupe1936 = styled.div`
  width: 216px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 214px;
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

const Top = styled.div`
  position: fixed;
  height: 136px;
  top: 0;
  left: 270px;
  z-index: 5;
  display: flex;
  align-items: flex-start;
  min-width: 1650px;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  width: 1650px;
  height: 136px;
  position: relative;
`;

const Tabs = styled.div`
  position: absolute;
  height: 94px;
  top: 34px;
  left: 34px;
  display: flex;
  align-items: flex-end;
  min-width: 362px;
`;

const FlexCol = styled.div`
  width: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 94px;
`;

const X12 = styled.img`
  width: 47px;
  height: 47px;
  object-fit: cover;
`;

const Underline = styled.div`
  width: 68px;
  height: 2px;
  background-color: var(--ff5d22);
`;

const OverlapGroup4 = styled.div`
  width: 1222px;
  height: 536px;
  z-index: 1;
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

const QuelDiplmeChoisir = styled.div`
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

const Content = styled.div`
  width: 1141px;
  z-index: 3;
  position: relative;
  align-self: center;
  margin-top: 62px;
  margin-left: 93px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2080px;
`;

export default Diplomes;
