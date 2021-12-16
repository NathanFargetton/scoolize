import React from "react";
import Groupe1876 from "../Groupe1876";
import Button from "../Button";
import Bouton from "../Bouton";
import Composant4410 from "../Composant4410";
import ProjectHeader3 from "../ProjectHeader3";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Composant461 from "../Composant461";
import Composant471 from "../Composant471";
import Footer from "../Footer";
import styled from "styled-components";
import {
  HeeboNormalBlack40px,
  HeeboBoldBlack20px,
  HeeboBoldOrange14px,
  Border1pxDoveGray,
  HeeboNormalBlack20px,
  HeeboNormalBlack25px,
  SegoeuiRegularNormalDoveGray20px,
  SegoeuiRegularNormalDoveGray16px,
} from "../../styledMixins";
import "./TestOrientation.css";

function TestOrientation(props) {
  const {
    lesConditionsGnr,
    x12,
    scoolizeLogoPalettes1,
    trac1992,
    unTestDOrientati,
    cEstNormalQuOnVousAideUnPeu,
    bonCEstPartiSuivezNous,
    unTestDOrientatio,
    exploronsPlusEnD,
    unTestDOrientatio2,
    voiciQuelquesLiens,
    ligne11,
    dcouvrezVosIntr,
    image10,
    ligne112,
    nosLecteursDisent,
    image11,
    ligne113,
    besoinDaidePourT,
    image12,
    buttonProps,
    boutonProps,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    composant461Props,
    composant471Props,
    composant4612Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="test-orientation screen">
        <Navigation>
          <OverlapGroup3>
            <Navigation1>
              <Groupe1936>
                <Groupe1876 />
                <Button className={buttonProps.className} />
              </Groupe1936>
            </Navigation1>
            <Bouton src={boutonProps.src} />
            <LesConditionsGnr>{lesConditionsGnr}</LesConditionsGnr>
            <Composant4410 />
          </OverlapGroup3>
        </Navigation>
        <Top>
          <OverlapGroup4>
            <ProjectHeader3 titleProps={projectHeader3Props.titleProps} />
            <Tabs>
              <FlexCol>
                <X12 src={x12} />
                <Diplme />
              </FlexCol>
              <Coles />
              <Fillires>{filliresProps.children}</Fillires>
              <Mtiers />
              <Formation />
            </Tabs>
            <Groupe1882 className={groupe1882Props.className} />
          </OverlapGroup4>
        </Top>
        <OverlapGroup5>
          <OverlapGroup1>
            <ScoolizeLogoPalettes1 src={scoolizeLogoPalettes1} />
            <OverlapGroup>
              <Trac1992 src={trac1992} />
              <UnTestDorientati>{unTestDOrientati}</UnTestDorientati>
              <CestNormalQuonVousAideUnPeu>{cEstNormalQuOnVousAideUnPeu}</CestNormalQuonVousAideUnPeu>
            </OverlapGroup>
          </OverlapGroup1>
          <BonCestPartiSuivezNous>{bonCEstPartiSuivezNous}</BonCestPartiSuivezNous>
        </OverlapGroup5>
        <Content>
          <Groupe1907>
            <UnTestDorientatio>{unTestDOrientatio}</UnTestDorientatio>
            <ExploronsPlusEnD>{exploronsPlusEnD}</ExploronsPlusEnD>
          </Groupe1907>
          <Groupe1906>
            <UnTestDorientatio1>{unTestDOrientatio2}</UnTestDorientatio1>
            <FaireUnTestCest>
              Faire un test, c’est mieux comprendre son profil. Pouvez-vous identifier vos points forts ? Êtes-vous un
              stratégique né, un bon orateur, un communicant hors pair, un bricoleur expert ou encore un visionnaire qui
              s’ignore ? À l’inverse, quelles sont vos faiblesses ? Avez-vous un blocage lorsqu’il s’agit de parler une
              langue étrangère, travailler dans un bureau, soulever des charges lourdes ou vous lever tôt ?<br />
              <br />
              Un bon test d’orientation ne s’arrêtera pas là. Il contribuera à lever le voile sur vos motivations
              profondes, autrement dit le sens que vous souhaitez donner à votre vie de manière générale et pas
              seulement d’un point de vue professionnel. Quelles valeurs votre métier doit-il prendre en considération ?
              Quel temps libre doit-il vous laisser pour vous occuper de votre famille ou vous adonner à votre passion ?
              Ce sont des volets à ne pas négliger.
              <br />
              <br />
              En réalité, c’est bien l’introspection qui permet de trouver le bon métier : si vous ne vous connaissez
              pas bien, vous ne pourrez pas trouver ce qui va vous plaire. Notre test d’orientation est là justement
              pour vous aider à mieux vous connaître.
            </FaireUnTestCest>
          </Groupe1906>
          <Groupe1905>
            <VoiciQuelquesLiens>{voiciQuelquesLiens}</VoiciQuelquesLiens>
          </Groupe1905>
        </Content>
        <Groupe1942>
          <Groupe1939>
            <OverlapGroup2>
              <Rectangle647></Rectangle647>
              <Ligne11 src={ligne11} />
              <Composant461>{composant461Props.children}</Composant461>
              <DcouvrezVosIntr>{dcouvrezVosIntr}</DcouvrezVosIntr>
              <Image10 src={image10} />
            </OverlapGroup2>
          </Groupe1939>
          <Groupe1940>
            <OverlapGroup2>
              <Rectangle647></Rectangle647>
              <Ligne11 src={ligne112} />
              <Composant471>{composant471Props.children}</Composant471>
              <DcouvrezVosIntr>{nosLecteursDisent}</DcouvrezVosIntr>
              <Image11 src={image11} />
            </OverlapGroup2>
          </Groupe1940>
          <Groupe1940>
            <OverlapGroup2>
              <Rectangle647></Rectangle647>
              <Ligne11 src={ligne113} />
              <Composant461>{composant4612Props.children}</Composant461>
              <DcouvrezVosIntr>{besoinDaidePourT}</DcouvrezVosIntr>
              <Image12 src={image12} />
            </OverlapGroup2>
          </Groupe1940>
        </Groupe1942>
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

const OverlapGroup3 = styled.div`
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
  z-index: 6;
  display: flex;
  align-items: flex-start;
  min-width: 1650px;
`;

const OverlapGroup4 = styled.div`
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

const OverlapGroup5 = styled.div`
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

const UnTestDorientati = styled.div`
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
  z-index: 2;
  margin-top: 150px;
  margin-left: 93px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 924px;
`;

const Groupe1907 = styled.div`
  width: 1141px;
  height: 351px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
`;

const UnTestDorientatio = styled.div`
  ${HeeboBoldBlack20px}
  width: 414px;
  height: 41px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 22px;
`;

const ExploronsPlusEnD = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  margin-left: 83px;
  margin-right: -2px;
  flex: 1;
  margin-top: 11px;
  margin-bottom: -2px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Groupe1906 = styled.div`
  width: 1124px;
  height: 441px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const UnTestDorientatio1 = styled.div`
  ${HeeboBoldBlack20px}
  width: 414px;
  height: 57px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 22px;
`;

const FaireUnTestCest = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  margin-left: 85px;
  margin-right: -2px;
  flex: 1;
  margin-top: 20px;
  margin-bottom: -2px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Groupe1905 = styled.div`
  width: 414px;
  height: 55px;
  margin-top: 37px;
  display: flex;
`;

const VoiciQuelquesLiens = styled.div`
  ${HeeboBoldBlack20px}
  margin-top: -1px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -1px;
  width: 414px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Groupe1942 = styled.div`
  width: 1045px;
  z-index: 3;
  margin-top: 37px;
  margin-left: 189px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 524px;
`;

const Groupe1939 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1045px;
`;

const OverlapGroup2 = styled.div`
  width: 1045px;
  height: 150px;
  position: relative;
`;

const Rectangle647 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 1045px;
  height: 149px;
  top: 0;
  left: 0;
  background-color: var(--white);
  border-radius: 22px;
`;

const Ligne11 = styled.img`
  position: absolute;
  width: 1px;
  height: 98px;
  top: 26px;
  left: 167px;
  object-fit: cover;
`;

const DcouvrezVosIntr = styled.p`
  ${SegoeuiRegularNormalDoveGray16px}
  position: absolute;
  width: 854px;
  height: 118px;
  top: 21px;
  left: 184px;
  letter-spacing: 0;
  line-height: 16px;
`;

const Image10 = styled.img`
  position: absolute;
  width: 99px;
  height: 99px;
  top: 25px;
  left: 35px;
  object-fit: cover;
`;

const Groupe1940 = styled.div`
  margin-top: 37px;
  display: flex;
  align-items: flex-start;
  min-width: 1045px;
`;

const Image11 = styled.img`
  position: absolute;
  width: 102px;
  height: 102px;
  top: 21px;
  left: 35px;
  object-fit: cover;
`;

const Image12 = styled.img`
  position: absolute;
  width: 102px;
  height: 102px;
  top: 24px;
  left: 35px;
  object-fit: cover;
`;

export default TestOrientation;
