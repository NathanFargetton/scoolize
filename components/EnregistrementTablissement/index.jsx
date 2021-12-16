import React from "react";
import Navigation62 from "../Navigation62";
import ProjectHeader from "../ProjectHeader";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Composant202 from "../Composant202";
import SelectionControlCheckboxOffEnabled from "../SelectionControlCheckboxOffEnabled";
import Footer from "../Footer";
import styled from "styled-components";
import {
  RobotoNormalOrange14px2,
  RobotoNormalBlack16px,
  RobotoNormalOrange14px,
  RobotoNormalEastBay14px,
} from "../../styledMixins";
import "./EnregistrementTablissement.css";

function EnregistrementTablissement(props) {
  const {
    x12,
    overlapGroup5,
    vrificationDuMotDePasse,
    spanText,
    spanText2,
    textSubtitle,
    image13,
    navigation62Props,
    projectHeaderProps,
    filliresProps,
    groupe1882Props,
    composant202Props,
    selectionControlCheckboxOffEnabledProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="enregistrement-etablissement screen">
        <Navigation62 boutonProps={navigation62Props.boutonProps} />
        <Top>
          <OverlapGroup6>
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
              <Formation />
            </Tabs>
            <Groupe1882 className={groupe1882Props.className} />
          </OverlapGroup6>
        </Top>
        <Groupe2018>
          <OverlapGroup5 style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <Composant202
              groupe1879={composant202Props.groupe1879}
              numroDeSiret={composant202Props.numroDeSiret}
              composant141Props={composant202Props.composant141Props}
              textFieldOutlinedUnfilledEnabled2Props={composant202Props.textFieldOutlinedUnfilledEnabled2Props}
            />
            <VrificationDuMotDePasse>{vrificationDuMotDePasse}</VrificationDuMotDePasse>
            <Groupe6>
              <SelectionControlCheckboxOffEnabled src={selectionControlCheckboxOffEnabledProps.src} />
              <TextSubtitle>
                <span className="roboto-normal-black-14px">{spanText}</span>
                <Span13>{spanText2}</Span13>
              </TextSubtitle>
            </Groupe6>
            <TextSubtitle1>{textSubtitle}</TextSubtitle1>
          </OverlapGroup5>
          <Groupe2012>
            <Groupe2016>
              <OverlapGroup>
                <Rectangle639></Rectangle639>
                <Image13 src={image13} />
              </OverlapGroup>
            </Groupe2016>
          </Groupe2012>
        </Groupe2018>
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

const OverlapGroup6 = styled.div`
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

const Groupe2018 = styled.div`
  width: 1839px;
  z-index: 2;
  margin-top: 136px;
  margin-right: -26px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 1197px;
`;

const OverlapGroup5 = styled.div`
  width: 1664px;
  height: 936px;
  position: relative;
  margin-right: 26px;
  background-size: cover;
  background-position: 50% 50%;
`;

const VrificationDuMotDePasse = styled.p`
  ${RobotoNormalBlack16px}
  position: absolute;
  top: 556px;
  left: 546px;
  letter-spacing: 0.15px;
  line-height: 16px;
  white-space: nowrap;
`;

const Groupe6 = styled.div`
  position: absolute;
  width: 241px;
  height: 19px;
  top: 616px;
  left: 530px;
  display: flex;
`;

const TextSubtitle = styled.p`
  ${RobotoNormalOrange14px}
  margin-top: 2.5px;
  margin-bottom: -4.5px;
  margin-left: 8px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0.13px;
  line-height: 14px;
  white-space: nowrap;
`;

const Span13 = styled.span`
  ${RobotoNormalOrange14px2}
  text-decoration: underline;
`;

const TextSubtitle1 = styled.p`
  ${RobotoNormalEastBay14px}
  position: absolute;
  top: 789px;
  left: 730px;
  letter-spacing: 0.13px;
  line-height: 14px;
  text-decoration: underline;
  white-space: nowrap;
`;

const Groupe2012 = styled.div`
  width: 1839px;
  height: 261px;
  display: flex;
`;

const Groupe2016 = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  min-width: 1839px;
`;

const OverlapGroup = styled.div`
  width: 1839px;
  height: 261px;
  position: relative;
`;

const Rectangle639 = styled.div`
  position: absolute;
  width: 1804px;
  height: 261px;
  top: 0;
  left: 0;
  background-color: var(--black-haze);
`;

const Image13 = styled.img`
  position: absolute;
  width: 1650px;
  height: 260px;
  top: 0;
  left: 189px;
  object-fit: cover;
`;

export default EnregistrementTablissement;
