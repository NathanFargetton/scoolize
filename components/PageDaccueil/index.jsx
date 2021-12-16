import React, { useEffect } from "react";
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
import CalendarPart from "../CalendarPart";
import TestDorientation from "../TestDorientation";
import TrouverMoncole from "../TrouverMoncole";
import ChoisirLeDomaineDtude from "../ChoisirLeDomaineDtude";
import ChoisirLaVilleOutudier from "../ChoisirLaVilleOutudier";
import PartieOrientation from "../PartieOrientation";
import FormationsLesPlusRecherches from "../FormationsLesPlusRecherches";
import Objectifs from "../Objectifs";
import ColesLesPlusRecherches from "../ColesLesPlusRecherches";
import Footer from "../Footer";
import * as mdc from "material-components-web";
import styled from "styled-components";
import {
  HeeboNormalBlack40px,
  HeeboBoldOrange14px,
  Border05pxEastBay,
  HeeboNormalBlack20px,
  HeeboNormalBlack25px,
} from "../../styledMixins";
import "./PageDaccueil.css";

function PageDaccueil(props) {
  const {
    lesConditionsGnr,
    x12,
    ic_Search_24Px,
    scoolizeLogoPalettes1,
    trac1992,
    onSaitQuOnAppre,
    cEstNormalQuOnVousAideUnPeu,
    bonCEstPartiSuivezNous,
    jeSouhaiteApprofon,
    buttonProps,
    boutonProps,
    projectHeaderProps,
    filliresProps,
    formationProps,
    formationsLesPlusRecherchesProps,
    footerProps,
  } = props;

  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled .mdc-text-field"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="page-d-accueil screen">
        <Navigation>
          <OverlapGroup7>
            <NavigationBackground></NavigationBackground>
            <Navigation1>
              <Groupe1936>
                <Groupe1876 />
                <Button className={buttonProps.className} />
              </Groupe1936>
            </Navigation1>
            <Bouton src={boutonProps.src} />
            <LesConditionsGnr>{lesConditionsGnr}</LesConditionsGnr>
            <Composant4410 />
          </OverlapGroup7>
        </Navigation>
        <Top>
          <OverlapGroup8>
            <ProjectHeader
              className={projectHeaderProps.className}
              projectHeader2Props={projectHeaderProps.projectHeader2Props}
            />
            <Tabs>
              <FlexCol>
                <X12 src={x12} />
                <Diplme />
              </FlexCol>
              <Coles />
              <Fillires>{filliresProps.children}</Fillires>
              <Mtiers />
              <Formation className={formationProps.className} />
            </Tabs>
            <Groupe1882>
              <IcSearch24px src={ic_Search_24Px} />
            </Groupe1882>
          </OverlapGroup8>
        </Top>
        <OverlapGroup9>
          <OverlapGroup1>
            <ScoolizeLogoPalettes1 src={scoolizeLogoPalettes1} />
            <OverlapGroup>
              <Trac1992 src={trac1992} />
              <OnSaitQuonAppre>{onSaitQuOnAppre}</OnSaitQuonAppre>
              <CestNormalQuonVousAideUnPeu>{cEstNormalQuOnVousAideUnPeu}</CestNormalQuonVousAideUnPeu>
            </OverlapGroup>
          </OverlapGroup1>
          <BonCestPartiSuivezNous>{bonCEstPartiSuivezNous}</BonCestPartiSuivezNous>
          <div className="text-field-filled">
            <label className="mdc-text-field mdc-text-field--filled">
              <span className="mdc-text-field__ripple"></span>
              <span className="mdc-floating-label" id="my-label-id">
                Rechercher
              </span>
              <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
              <span className="mdc-line-ripple"></span>
            </label>
          </div>
        </OverlapGroup9>
        <CalendarPart />
        <BoutonsRecherchesTudiant>
          <JeSouhaiteApprofon>{jeSouhaiteApprofon}</JeSouhaiteApprofon>
          <GroupeBoutons>
            <TestDorientation />
            <TrouverMoncole />
            <ChoisirLeDomaineDtude />
            <ChoisirLaVilleOutudier />
          </GroupeBoutons>
        </BoutonsRecherchesTudiant>
        <PartieOrientation />
        <FormationsLesPlusRecherches {...formationsLesPlusRecherchesProps} />
        <Objectifs />
        <ColesLesPlusRecherches />
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
  z-index: 9;
  display: flex;
  align-items: flex-start;
  min-width: 294px;
`;

const OverlapGroup7 = styled.div`
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
  z-index: 10;
  display: flex;
  align-items: flex-start;
  min-width: 1650px;
`;

const OverlapGroup8 = styled.div`
  width: 1650px;
  height: 136px;
  position: relative;
`;

const Tabs = styled.div`
  position: absolute;
  height: 92px;
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
  min-height: 92px;
`;

const X12 = styled.img`
  width: 47px;
  height: 47px;
  object-fit: cover;
`;

const Groupe1882 = styled.div`
  ${Border05pxEastBay}
  position: absolute;
  height: 43px;
  top: 47px;
  left: 1336px;
  display: flex;
  padding: 10.3px 13.5px;
  align-items: flex-start;
  min-width: 279px;
  background-color: var(--white);
  border-radius: 18px;
`;

const IcSearch24px = styled.img`
  width: 22px;
  height: 22px;
  object-fit: cover;
`;

const OverlapGroup9 = styled.div`
  width: 1350px;
  height: 556px;
  z-index: 1;
  position: relative;
  margin-top: 47px;
  margin-right: 49px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1224px;
  height: 500px;
  top: 21px;
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

const OnSaitQuonAppre = styled.div`
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
  top: 510px;
  left: 392px;
  letter-spacing: 0;
  line-height: 22px;
`;

const BoutonsRecherchesTudiant = styled.div`
  width: 1288px;
  z-index: 3;
  align-self: center;
  margin-top: 150px;
  margin-left: 313.98px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 111px;
`;

const JeSouhaiteApprofon = styled.div`
  ${HeeboNormalBlack25px}
  width: 478px;
  height: 47px;
  margin-top: 2px;
  margin-right: 41.98px;
  letter-spacing: 0;
  line-height: 22px;
`;

const GroupeBoutons = styled.div`
  height: 47px;
  position: relative;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 1288px;
`;

export default PageDaccueil;
