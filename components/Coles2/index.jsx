import React from "react";
import { Link } from "react-router-dom";
import Groupe1876 from "../Groupe1876";
import Button2 from "../Button2";
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
import Footer from "../Footer";
import styled from "styled-components";
import {
  HeeboNormalBlack40px,
  HeeboNormalBlack20px,
  HeeboNormalBlack25px,
  HeeboBoldOrange14px,
} from "../../styledMixins";
import "./Coles2.css";

function Coles2(props) {
  const {
    lesConditionsGnr,
    x12,
    scoolizeLogoPalettes1,
    trac1992,
    quelTypeDColeFautIlChoisir,
    cEstNormalQuOnVousAideUnPeu,
    bonCEstPartiSuivezNous,
    button2Props,
    boutonProps,
    projectHeaderProps,
    colesProps,
    filliresProps,
    groupe1882Props,
    groupe1907Props,
    groupe19072Props,
    groupe19073Props,
    groupe19074Props,
    groupe19075Props,
    groupe19076Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="ecoles screen">
        <Navigation>
          <OverlapGroup2>
            <Navigation1>
              <Groupe1936>
                <Groupe1876 />
                <Button2>{button2Props.children}</Button2>
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
                <FlexRow>
                  <FlexCol>
                    <X12 src={x12} />
                    <Diplme />
                  </FlexCol>
                  <Coles className={colesProps.className} />
                  <Fillires>{filliresProps.children}</Fillires>
                  <Mtiers />
                  <Formation />
                </FlexRow>
                <Underline></Underline>
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
              <QuelTypeDcoleFautIlChoisir>{quelTypeDColeFautIlChoisir}</QuelTypeDcoleFautIlChoisir>
              <CestNormalQuonVousAideUnPeu>{cEstNormalQuOnVousAideUnPeu}</CestNormalQuonVousAideUnPeu>
            </OverlapGroup>
          </OverlapGroup1>
          <BonCestPartiSuivezNous>{bonCEstPartiSuivezNous}</BonCestPartiSuivezNous>
        </OverlapGroup4>
        <Content>
          <Groupe1907
            quappelleTOnFormation={groupe1907Props.quappelleTOnFormation}
            uneFormationEstUn={groupe1907Props.uneFormationEstUn}
            className={groupe1907Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe19072Props.quappelleTOnFormation}
            uneFormationEstUn={groupe19072Props.uneFormationEstUn}
            className={groupe19072Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe19073Props.quappelleTOnFormation}
            uneFormationEstUn={groupe19073Props.uneFormationEstUn}
            className={groupe19073Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe19074Props.quappelleTOnFormation}
            uneFormationEstUn={groupe19074Props.uneFormationEstUn}
            className={groupe19074Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe19075Props.quappelleTOnFormation}
            uneFormationEstUn={groupe19075Props.uneFormationEstUn}
            className={groupe19075Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe19076Props.quappelleTOnFormation}
            uneFormationEstUn={groupe19076Props.uneFormationEstUn}
            className={groupe19076Props.className}
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
  width: 47px;
  height: 2px;
  margin-right: 151px;
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

const QuelTypeDcoleFautIlChoisir = styled.div`
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
  min-height: 2106px;
`;

export default Coles2;
