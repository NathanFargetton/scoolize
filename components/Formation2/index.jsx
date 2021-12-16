import React from "react";
import { Link } from "react-router-dom";
import Bouton from "../Bouton";
import Groupe1936 from "../Groupe1936";
import Composant4410 from "../Composant4410";
import ProjectHeader from "../ProjectHeader";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Groupe1907 from "../Groupe1907";
import Footer32 from "../Footer32";
import styled from "styled-components";
import {
  HeeboNormalBlack40px,
  HeeboNormalBlack20px,
  HeeboNormalBlack25px,
  HeeboBoldOrange14px,
} from "../../styledMixins";
import "./Formation2.css";

function Formation2(props) {
  const {
    lesConditionsGnr,
    x12,
    bonCEstPartiSuivezNous,
    scoolizeLogoPalettes1,
    trac1992,
    commentVousAider,
    cEstNormalQuOnVousAideUnPeu,
    boutonProps,
    projectHeaderProps,
    filliresProps,
    groupe1882Props,
    groupe1907Props,
    groupe19072Props,
    groupe19073Props,
    groupe19074Props,
    groupe19075Props,
    groupe19076Props,
    groupe19077Props,
    groupe19078Props,
    groupe19079Props,
    groupe190710Props,
    groupe190711Props,
    groupe190712Props,
    groupe190713Props,
    groupe190714Props,
    groupe190715Props,
    groupe190716Props,
    groupe190717Props,
    groupe190718Props,
    groupe190719Props,
    groupe190720Props,
    footer32Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="formation screen">
        <Navigation>
          <OverlapGroup2>
            <Navigation1></Navigation1>
            <Bouton src={boutonProps.src} />
            <LesConditionsGnr>{lesConditionsGnr}</LesConditionsGnr>
            <Groupe1936 />
            <Composant4410 />
          </OverlapGroup2>
        </Navigation>
        <Link to="/page-d-accueil">
          <Top>
            <OverlapGroup5>
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
                  <Coles />
                  <Fillires>{filliresProps.children}</Fillires>
                  <Mtiers />
                  <Formation />
                </FlexRow>
                <Underline></Underline>
              </Tabs>
              <Groupe1882 className={groupe1882Props.className} />
            </OverlapGroup5>
          </Top>
        </Link>
        <OverlapGroup7>
          <BonCestPartiSuivezNous>{bonCEstPartiSuivezNous}</BonCestPartiSuivezNous>
          <OverlapGroup6>
            <ScoolizeLogoPalettes1 src={scoolizeLogoPalettes1} />
            <OverlapGroup>
              <Trac1992 src={trac1992} />
              <CommentVousAider>{commentVousAider}</CommentVousAider>
              <CestNormalQuonVousAideUnPeu>{cEstNormalQuOnVousAideUnPeu}</CestNormalQuonVousAideUnPeu>
            </OverlapGroup>
          </OverlapGroup6>
        </OverlapGroup7>
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
          <GroupeContainer>
            <Groupe1907
              quappelleTOnFormation={groupe19077Props.quappelleTOnFormation}
              uneFormationEstUn={groupe19077Props.uneFormationEstUn}
              className={groupe19077Props.className}
            />
            <Groupe1907
              quappelleTOnFormation={groupe19078Props.quappelleTOnFormation}
              uneFormationEstUn={groupe19078Props.uneFormationEstUn}
              className={groupe19078Props.className}
            />
          </GroupeContainer>
          <Groupe1907
            quappelleTOnFormation={groupe19079Props.quappelleTOnFormation}
            uneFormationEstUn={groupe19079Props.uneFormationEstUn}
            className={groupe19079Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe190710Props.quappelleTOnFormation}
            uneFormationEstUn={groupe190710Props.uneFormationEstUn}
            className={groupe190710Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe190711Props.quappelleTOnFormation}
            uneFormationEstUn={groupe190711Props.uneFormationEstUn}
            className={groupe190711Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe190712Props.quappelleTOnFormation}
            uneFormationEstUn={groupe190712Props.uneFormationEstUn}
            className={groupe190712Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe190713Props.quappelleTOnFormation}
            uneFormationEstUn={groupe190713Props.uneFormationEstUn}
            className={groupe190713Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe190714Props.quappelleTOnFormation}
            uneFormationEstUn={groupe190714Props.uneFormationEstUn}
            className={groupe190714Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe190715Props.quappelleTOnFormation}
            uneFormationEstUn={groupe190715Props.uneFormationEstUn}
            className={groupe190715Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe190716Props.quappelleTOnFormation}
            uneFormationEstUn={groupe190716Props.uneFormationEstUn}
            className={groupe190716Props.className}
          />
          <GroupeContainer1>
            <Groupe1907
              quappelleTOnFormation={groupe190717Props.quappelleTOnFormation}
              uneFormationEstUn={groupe190717Props.uneFormationEstUn}
              className={groupe190717Props.className}
            />
            <Groupe1907
              quappelleTOnFormation={groupe190718Props.quappelleTOnFormation}
              uneFormationEstUn={groupe190718Props.uneFormationEstUn}
              className={groupe190718Props.className}
            />
          </GroupeContainer1>
          <Groupe1907
            quappelleTOnFormation={groupe190719Props.quappelleTOnFormation}
            uneFormationEstUn={groupe190719Props.uneFormationEstUn}
            className={groupe190719Props.className}
          />
          <Groupe1907
            quappelleTOnFormation={groupe190720Props.quappelleTOnFormation}
            uneFormationEstUn={groupe190720Props.uneFormationEstUn}
            className={groupe190720Props.className}
          />
        </Content>
        <Footer32 {...footer32Props} />
      </div>
    </div>
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

const OverlapGroup5 = styled.div`
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
  align-items: flex-end;
  min-height: 94px;
`;

const FlexRow = styled.div`
  height: 92px;
  position: relative;
  margin-right: -2px;
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
  width: 80px;
  height: 2px;
  margin-right: 2px;
  background-color: var(--ff5d22);
`;

const OverlapGroup7 = styled.div`
  width: 1222px;
  height: 526px;
  z-index: 1;
  position: relative;
  align-self: center;
  margin-top: 78px;
  margin-left: 270px;
`;

const BonCestPartiSuivezNous = styled.div`
  ${HeeboNormalBlack25px}
  position: absolute;
  width: 366px;
  height: 47px;
  top: 478px;
  left: 429px;
  letter-spacing: 0;
  line-height: 22px;
`;

const OverlapGroup6 = styled.div`
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

const CommentVousAider = styled.div`
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

const Content = styled.div`
  width: 1163px;
  z-index: 4;
  position: relative;
  align-self: center;
  margin-top: 58px;
  margin-left: 271px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 6571px;
`;

const GroupeContainer = styled.div`
  width: 1143px;
  height: 679px;
  position: relative;
  align-self: flex-start;
  margin-top: 85px;
`;

const GroupeContainer1 = styled.div`
  width: 1143px;
  height: 533px;
  position: relative;
  margin-top: 55px;
  margin-right: -2px;
`;

export default Formation2;
