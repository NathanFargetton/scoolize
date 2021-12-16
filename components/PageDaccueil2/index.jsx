import React from "react";
import { Link } from "react-router-dom";
import Navigation52 from "../Navigation52";
import ProjectHeader from "../ProjectHeader";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Groupe1907 from "../Groupe1907";
import Footer32 from "../Footer32";
import styled from "styled-components";
import { HeeboNormalBlack40px, HeeboNormalBlack20px, HeeboNormalBlack25px } from "../../styledMixins";
import "./PageDaccueil2.css";

function PageDaccueil2(props) {
  const {
    x12,
    scoolizeLogoPalettes1,
    trac1992,
    quEstCeQueTuVe,
    cEstNormalQuOnVousAideUnPeu,
    bonCEstPartiSuivezNous,
    navigation52Props,
    projectHeaderProps,
    filliresProps,
    fillires2Props,
    groupe1882Props,
    groupe1907Props,
    groupe19072Props,
    groupe19073Props,
    groupe19074Props,
    groupe19075Props,
    groupe19076Props,
    groupe19077Props,
    footer32Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="page-d-accueil-2 screen">
        <Navigation52 boutonProps={navigation52Props.boutonProps} boutonProps2={navigation52Props.boutonProps2} />
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
                  <Coles />
                  <Fillires>{filliresProps.children}</Fillires>
                  <Fillires className={fillires2Props.className}>{fillires2Props.children}</Fillires>
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
              <QuestCeQueTuVe>{quEstCeQueTuVe}</QuestCeQueTuVe>
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
        <Groupe1907
          quappelleTOnFormation={groupe19077Props.quappelleTOnFormation}
          uneFormationEstUn={groupe19077Props.uneFormationEstUn}
          className={groupe19077Props.className}
        />
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
  z-index: 6;
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
  width: 54px;
  height: 2px;
  margin-left: 114px;
  background-color: var(--ff5d22);
`;

const OverlapGroup4 = styled.div`
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

const QuestCeQueTuVe = styled.div`
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
  margin-top: 44px;
  margin-left: 263px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2844px;
`;

export default PageDaccueil2;
