import React from "react";
import { Link } from "react-router-dom";
import Navigation2 from "../Navigation2";
import ProjectHeader3 from "../ProjectHeader3";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Groupe1992 from "../Groupe1992";
import Groupe2004 from "../Groupe2004";
import Layer2 from "../Layer2";
import Footer from "../Footer";
import styled from "styled-components";
import {
  SegoeuiRegularNormalBlack20px,
  SegoeuiRegularNormalDoveGray26px,
  SegoeuiRegularNormalDoveGray20px2,
  Border1pxDoveGray,
  SegoeuiRegularNormalOrange20px,
  MontserratSemiBoldWhite50px,
  SegoeuiRegularNormalDoveGray20px,
} from "../../styledMixins";
import "./TrouverCole111.css";

function TrouverCole111(props) {
  const {
    x12,
    ligne15,
    masterProfessionnel,
    uneFilireDeForma,
    trac2010,
    trac2011,
    plusDInfos,
    image19,
    masterProfessionnel2,
    image18,
    image17,
    ligne13,
    masterProfessionnel3,
    formationIntelligen,
    trac20102,
    trac20112,
    trac20103,
    trac20113,
    ligne14,
    x5AnsPourDevenirU,
    imageContainer,
    image16,
    image162,
    image163,
    trac20104,
    trac20114,
    moinsDInfos,
    ligne11,
    masterProfessionnel4,
    expertEnInformat,
    epsiLcoleQuiF,
    candidater,
    navigation2Props,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    groupe1992Props,
    groupe2004Props,
    layer2Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1-11 screen">
        <Navigation2
          className={navigation2Props.className}
          boutonProps={navigation2Props.boutonProps}
          boutonProps2={navigation2Props.boutonProps2}
        />
        <Top>
          <OverlapGroup8>
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
          </OverlapGroup8>
        </Top>
        <Groupe2009>
          <Groupe1992 groupe1970Props={groupe1992Props.groupe1970Props} />
          <OverlapGroup6>
            <OverlapGroup1>
              <Groupe2005>
                <Ligne15 src={ligne15} />
                <FlexCol1>
                  <MasterProfessionnel>{masterProfessionnel}</MasterProfessionnel>
                  <UneFilireDeForma>{uneFilireDeForma}</UneFilireDeForma>
                  <FlexRow>
                    <TracContainer>
                      <Trac2010 src={trac2010} />
                      <Trac2011 src={trac2011} />
                    </TracContainer>
                    <PlusDinfos>{plusDInfos}</PlusDinfos>
                  </FlexRow>
                </FlexCol1>
              </Groupe2005>
              <Image19 src={image19} />
              <Rectangle680></Rectangle680>
            </OverlapGroup1>
            <OverlapGroup4>
              <Rectangle678></Rectangle678>
              <MasterProfessionnel1>{masterProfessionnel2}</MasterProfessionnel1>
              <Image18 src={image18} />
              <Groupe2003>
                <Groupe2002>
                  <OverlapGroup2>
                    <Image17 src={image17} />
                    <Ligne13 src={ligne13} />
                    <FlexCol2>
                      <MasterProfessionnel>{masterProfessionnel3}</MasterProfessionnel>
                      <OverlapGroup3>
                        <FormationIntelligen>{formationIntelligen}</FormationIntelligen>
                        <Groupe2004 />
                        <TracContainer1>
                          <Trac2010 src={trac20102} />
                          <Trac2011 src={trac20112} />
                        </TracContainer1>
                      </OverlapGroup3>
                    </FlexCol2>
                  </OverlapGroup2>
                  <TracContainer2>
                    <Trac2010 src={trac20103} />
                    <Trac2011 src={trac20113} />
                  </TracContainer2>
                </Groupe2002>
              </Groupe2003>
              <Ligne14 src={ligne14} />
              <Groupe2004 className={groupe2004Props.className} />
              <X5AnsPourDevenirU>{x5AnsPourDevenirU}</X5AnsPourDevenirU>
            </OverlapGroup4>
            <Groupe2001>
              <GroupContainer>
                <ImageContainer style={{ backgroundImage: `url(${imageContainer})` }}>
                  <Image16 src={image16} />
                  <Image16 src={image162} />
                  <Image16 src={image163} />
                </ImageContainer>
                <Groupe2011>
                  <IconIonicIosArrowDropdown>
                    <TracContainer3>
                      <Trac20101 src={trac20104} />
                      <Trac20111 src={trac20114} />
                    </TracContainer3>
                  </IconIonicIosArrowDropdown>
                  <MoinsDinfos>{moinsDInfos}</MoinsDinfos>
                </Groupe2011>
              </GroupContainer>
              <Ligne11 src={ligne11} />
              <FlexCol3>
                <MasterProfessionnel>{masterProfessionnel4}</MasterProfessionnel>
                <ExpertEnInformat>{expertEnInformat}</ExpertEnInformat>
              </FlexCol3>
            </Groupe2001>
            <Layer2 src={layer2Props.src} className={layer2Props.className} />
            <LesInnovationsTech>
              Les innovations technologiques liées à l’informatique obligent régulièrement les secteurs et les
              entreprises à revoir leurs façons de fonctionner en intégrant ces évolutions dans leurs systèmes
              d’information. Cela soulève ainsi la question des infrastructures, des processus, mais aussi de la
              sécurité. Vectrice d’emploi, l’informatique propose aujourd’hui un large panel de métiers accessibles via
              nos différents programmes de formation en informatique.
              <br />
              <br />
              Une Formation informatique, un cursus complet pour toutes les ambitions
              <br />
              L’EPSI est une école d’informatique qui propose des programmes de Bac à Bac+5 et de la formation continue.
              Quel que soit votre profil ou votre situation, vous pouvez accéder à la formation informatique et à un des
              programmes EPSI en admission directe ou en admission parallèle. La formation informatique de l’EPSI se
              compose de deux cycles :<br />
              <br />
              1er CYCLE : Le parcours Socle Numérique en 2 ans pour maîtriser les bases de l’informatique et du digital.
              Les apprenants peuvent également présenter le BTS SIO (Services Informatiques aux Organisations) afin de
              sécuriser leur parcours.
              <br />
              2nd CYCLE : Le&nbsp;&nbsp;programme Bachelor informatique, prépare les apprenants à un titre de niveau 6
              (Bac +3/4) inscrit au RNCP.
              <br />
              3ème CYCLE : Le programme Ingénierie&nbsp;&nbsp;informatique&nbsp;&nbsp;prépare les apprenants à un titre
              de niveau 7 (Bac+5) « Expert en informatique et système d’information » inscrit au RNCP.
              <br />À partir de la 3ème année, les apprenants peuvent suivre leur formation informatique en initial ou
              en alternance.
            </LesInnovationsTech>
            <EPSILCOLEQUIF>{epsiLcoleQuiF}</EPSILCOLEQUIF>
            <Link to="/inscription">
              <Rectangle681></Rectangle681>
            </Link>
            <Candidater>{candidater}</Candidater>
          </OverlapGroup6>
        </Groupe2009>
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
  z-index: 4;
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

const Groupe2009 = styled.div`
  width: 1498px;
  z-index: 2;
  position: relative;
  margin-top: 186px;
  margin-right: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1819px;
`;

const OverlapGroup6 = styled.div`
  width: 1498px;
  height: 1533px;
  position: relative;
  margin-top: 143px;
  border-radius: 20px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1498px;
  height: 348px;
  top: 1107px;
  left: 0;
  border-radius: 20px;
`;

const Groupe2005 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  height: 348px;
  top: 0;
  left: 0;
  display: flex;
  padding: 47px 136px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1498px;
  background-color: var(--white);
  border-radius: 20px;
`;

const Ligne15 = styled.img`
  width: 3px;
  height: 229px;
  object-fit: cover;
`;

const FlexCol1 = styled.div`
  width: 927px;
  margin-left: 18px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 215px;
`;

const MasterProfessionnel = styled.div`
  ${SegoeuiRegularNormalOrange20px}
  width: 490px;
  height: 31px;
  -webkit-text-stroke: 1px var(--ff5d22);
  letter-spacing: 0;
  line-height: 20px;
`;

const UneFilireDeForma = styled.div`
  ${SegoeuiRegularNormalDoveGray26px}
  width: 927px;
  height: 119px;
  margin-top: 18px;
  letter-spacing: 0;
  line-height: 26px;
`;

const FlexRow = styled.div`
  margin-top: 18px;
  margin-left: 18.73px;
  display: flex;
  align-items: flex-start;
  min-width: 142px;
`;

const TracContainer = styled.div`
  width: 29px;
  height: 29px;
  position: relative;
`;

const Trac2010 = styled.img`
  position: absolute;
  width: 16px;
  height: 9px;
  top: 11px;
  left: 7px;
  object-fit: cover;
`;

const Trac2011 = styled.img`
  position: absolute;
  width: 29px;
  height: 29px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const PlusDinfos = styled.div`
  ${SegoeuiRegularNormalBlack20px}
  width: 105px;
  height: 29px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Image19 = styled.img`
  position: absolute;
  width: 225px;
  height: 225px;
  top: 62px;
  left: 100px;
  object-fit: cover;
`;

const Rectangle680 = styled.div`
  position: absolute;
  width: 84px;
  height: 34px;
  top: 72px;
  left: 171px;
  background-color: var(--alizarin-crimson);
  border-radius: 17px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 1498px;
  height: 756px;
  top: 369px;
  left: 0;
`;

const Rectangle678 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 1498px;
  height: 348px;
  top: 369px;
  left: 0;
  background-color: var(--white);
  border-radius: 20px;
`;

const MasterProfessionnel1 = styled.div`
  ${SegoeuiRegularNormalOrange20px}
  position: absolute;
  width: 490px;
  height: 31px;
  top: 410px;
  left: 435px;
  -webkit-text-stroke: 1px var(--ff5d22);
  letter-spacing: 0;
  line-height: 20px;
`;

const Image18 = styled.img`
  position: absolute;
  width: 211px;
  height: 67px;
  top: 510px;
  left: 100px;
  object-fit: cover;
`;

const Groupe2003 = styled.div`
  position: absolute;
  width: 1498px;
  height: 695px;
  top: 0;
  left: 0;
  display: flex;
`;

const Groupe2002 = styled.div`
  flex: 1;
  width: 1498px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const OverlapGroup2 = styled.div`
  ${Border1pxDoveGray}
  height: 348px;
  display: flex;
  padding: 13.4px 9px;
  align-items: center;
  min-width: 1498px;
  background-color: var(--white);
  border-radius: 20px;
`;

const Image17 = styled.img`
  width: 394px;
  height: 169px;
  margin-bottom: 1px;
  object-fit: cover;
`;

const Ligne13 = styled.img`
  width: 3px;
  height: 229px;
  margin-left: 8px;
  margin-bottom: 25px;
  object-fit: cover;
`;

const FlexCol2 = styled.div`
  width: 847px;
  align-self: flex-end;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 287px;
`;

const OverlapGroup3 = styled.div`
  width: 847px;
  height: 226px;
  position: relative;
  margin-top: 30px;
`;

const FormationIntelligen = styled.div`
  ${SegoeuiRegularNormalDoveGray20px2}
  position: absolute;
  width: 847px;
  height: 225px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const TracContainer1 = styled.div`
  position: absolute;
  width: 29px;
  height: 29px;
  top: 196px;
  left: 19px;
`;

const TracContainer2 = styled.div`
  width: 29px;
  height: 29px;
  position: relative;
  margin-top: 317px;
  margin-right: 561.3px;
`;

const Ligne14 = styled.img`
  position: absolute;
  width: 3px;
  height: 229px;
  top: 417px;
  left: 414px;
  object-fit: cover;
`;

const X5AnsPourDevenirU = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 914px;
  height: 302px;
  top: 454px;
  left: 435px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Groupe2001 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  height: 1533px;
  top: 0;
  left: 0;
  display: flex;
  padding: 21.8px 40.2px;
  align-items: flex-start;
  min-width: 1498px;
  background-color: var(--white);
  border-radius: 20px;
`;

const GroupContainer = styled.div`
  width: 255px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1449px;
`;

const ImageContainer = styled.div`
  width: 225px;
  height: 225px;
  position: relative;
  align-self: flex-end;
  background-size: cover;
  background-position: 50% 50%;
`;

const Image16 = styled.img`
  position: absolute;
  width: 225px;
  height: 225px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Groupe2011 = styled.div`
  width: 164px;
  height: 30px;
  margin-top: 1194px;
  display: flex;
`;

const IconIonicIosArrowDropdown = styled.div`
  margin-top: 0.5px;
  margin-bottom: 0.5px;
  margin-left: 0.5px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 29.25px;
  transform: rotate(178deg);
`;

const TracContainer3 = styled.div`
  width: 31px;
  height: 31px;
  position: relative;
  margin-top: -1.02px;
`;

const Trac20101 = styled.img`
  position: absolute;
  width: 16px;
  height: 10px;
  top: 12px;
  left: 7px;
  transform: rotate(-178deg);
  object-fit: cover;
`;

const Trac20111 = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 1px;
  left: 1px;
  transform: rotate(-178deg);
  object-fit: cover;
`;

const MoinsDinfos = styled.div`
  ${SegoeuiRegularNormalBlack20px}
  margin-top: 1.1px;
  margin-bottom: 0.2px;
  margin-left: 8px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 20px;
`;

const Ligne11 = styled.img`
  width: 3px;
  height: 229px;
  margin-left: 114px;
  margin-top: 25.18px;
  object-fit: cover;
`;

const FlexCol3 = styled.div`
  width: 750px;
  margin-left: 22px;
  margin-top: 26.18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 175px;
`;

const ExpertEnInformat = styled.div`
  ${SegoeuiRegularNormalDoveGray20px2}
  width: 750px;
  height: 119px;
  margin-top: 25px;
  letter-spacing: 0;
  line-height: 20px;
`;

const LesInnovationsTech = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 1376px;
  height: 428px;
  top: 334px;
  left: 62px;
  letter-spacing: 0;
  line-height: 20px;
`;

const EPSILCOLEQUIF = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 1376px;
  height: 406px;
  top: 814px;
  left: 62px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Rectangle681 = styled.div`
  position: absolute;
  width: 666px;
  height: 134px;
  top: 1272px;
  left: 416px;
  background-color: var(--ff5d22);
  border-radius: 67px;
  cursor: pointer;
`;

const Candidater = styled.div`
  ${MontserratSemiBoldWhite50px}
  position: absolute;
  top: 1318px;
  left: 628px;
  -webkit-text-stroke: 1px var(--ff5d22);
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

export default TrouverCole111;
