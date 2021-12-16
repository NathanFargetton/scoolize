import React from "react";
import ProjectHeader from "../ProjectHeader";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Menu from "../Menu";
import Stats from "../Stats";
import UserInfo from "../UserInfo";
import Item from "../Item";
import Item2 from "../Item2";
import Groupe1994 from "../Groupe1994";
import Bouton from "../Bouton";
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
import styled from "styled-components";
import {
  HeeboNormalBlack40px,
  HeeboBoldWhite14px,
  HeeboBoldStarDust14px,
  HeeboNormalBlack25px,
  HeeboNormalBlack20px,
} from "../../styledMixins";
import "./PageDaccueil1.css";

function PageDaccueil1(props) {
  const {
    x12,
    menuBase,
    myTasks,
    myTasks2,
    iconAwesomeCompass,
    myTasks3,
    groupe1997,
    groupe1996,
    groupe1995,
    scoolizeLogoPalettes1,
    trac1992,
    onSaitQuOnAppre,
    cEstNormalQuOnVousAideUnPeu,
    bonCEstPartiSuivezNous,
    jeSouhaiteApprofon,
    projectHeaderProps,
    filliresProps,
    formationProps,
    groupe1882Props,
    menuProps,
    userInfoProps,
    boutonProps,
    calendarPartProps,
    partieOrientationProps,
    formationsLesPlusRecherchesProps,
    objectifsProps,
    colesLesPlusRecherchesProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="page-d-accueil-1 screen">
        <Top>
          <OverlapGroup7>
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
            <Groupe1882 className={groupe1882Props.className} />
          </OverlapGroup7>
        </Top>
        <Navigation>
          <OverlapGroup8>
            <OverlapGroup4>
              <OverlapGroup4>
                <NavigationBackground></NavigationBackground>
                <OverlapGroup2>
                  <MenuBase src={menuBase} />
                  <Menu countProps={menuProps.countProps} />
                  <Stats />
                  <UserInfo userpic={userInfoProps.userpic} nameProps={userInfoProps.nameProps} />
                  <Item />
                  <MyTasks>{myTasks}</MyTasks>
                  <MyTasks1>{myTasks2}</MyTasks1>
                  <Item2 />
                </OverlapGroup2>
              </OverlapGroup4>
              <IconAwesomeCompass src={iconAwesomeCompass} />
            </OverlapGroup4>
            <Groupe1994 />
            <MyTasks2>{myTasks3}</MyTasks2>
            <Groupe1997 style={{ backgroundImage: `url(${groupe1997})` }}></Groupe1997>
            <Groupe1996 style={{ backgroundImage: `url(${groupe1996})` }}></Groupe1996>
            <Groupe1995 style={{ backgroundImage: `url(${groupe1995})` }}></Groupe1995>
            <Bouton src={boutonProps.src} />
          </OverlapGroup8>
        </Navigation>
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
        </OverlapGroup9>
        <CalendarPart className={calendarPartProps.className} />
        <BoutonsRecherchesTudiant>
          <JeSouhaiteApprofon>{jeSouhaiteApprofon}</JeSouhaiteApprofon>
          <GroupeBoutons>
            <TestDorientation />
            <TrouverMoncole />
            <ChoisirLeDomaineDtude />
            <ChoisirLaVilleOutudier />
          </GroupeBoutons>
        </BoutonsRecherchesTudiant>
        <PartieOrientation className={partieOrientationProps.className} />
        <FormationsLesPlusRecherches {...formationsLesPlusRecherchesProps} />
        <Objectifs className={objectifsProps.className} />
        <ColesLesPlusRecherches className={colesLesPlusRecherchesProps.className} />
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

const Top = styled.div`
  position: fixed;
  height: 136px;
  top: 0;
  left: 270px;
  z-index: 9;
  display: flex;
  align-items: flex-start;
  min-width: 1650px;
`;

const OverlapGroup7 = styled.div`
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

const Navigation = styled.div`
  position: fixed;
  height: 1080px;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  min-width: 294px;
`;

const OverlapGroup8 = styled.div`
  width: 294px;
  height: 1080px;
  position: relative;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 272px;
  height: 1080px;
  top: 0;
  left: 0;
`;

const NavigationBackground = styled.div`
  position: absolute;
  width: 270px;
  height: 1079px;
  top: 0;
  left: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 272px;
  height: 1079px;
  top: 2px;
  left: 0;
`;

const MenuBase = styled.img`
  position: absolute;
  width: 270px;
  height: 1079px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const MyTasks = styled.div`
  ${HeeboBoldStarDust14px}
  position: absolute;
  top: 353px;
  left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const MyTasks1 = styled.div`
  ${HeeboBoldWhite14px}
  position: absolute;
  top: 467px;
  left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const IconAwesomeCompass = styled.img`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 550px;
  left: 218px;
  object-fit: cover;
`;

const MyTasks2 = styled.div`
  ${HeeboBoldWhite14px}
  position: absolute;
  top: 508px;
  left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Groupe1997 = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 507px;
  left: 218px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1996 = styled.div`
  position: absolute;
  width: 28px;
  height: 20px;
  top: 470px;
  left: 215px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1995 = styled.div`
  position: absolute;
  width: 27px;
  height: 18px;
  top: 439px;
  left: 216px;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup9 = styled.div`
  width: 1222px;
  height: 536px;
  z-index: 1;
  position: relative;
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
  top: 488px;
  left: 392px;
  letter-spacing: 0;
  line-height: 22px;
`;

const BoutonsRecherchesTudiant = styled.div`
  width: 1288px;
  z-index: 3;
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

export default PageDaccueil1;
