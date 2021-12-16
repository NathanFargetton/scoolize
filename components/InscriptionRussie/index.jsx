import React from "react";
import Navigation62 from "../Navigation62";
import ProjectHeader from "../ProjectHeader";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Groupe1880 from "../Groupe1880";
import Footer from "../Footer";
import styled from "styled-components";
import { RobotoMediumWhite14px, HeeboBoldOrange30px } from "../../styledMixins";
import "./InscriptionRussie.css";

function InscriptionRussie(props) {
  const {
    x12,
    groupe2022,
    x3388631,
    textH5Sele,
    overlapGroup,
    suivant,
    navigation62Props,
    projectHeaderProps,
    filliresProps,
    groupe1882Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inscription-reussie screen">
        <Navigation62 boutonProps={navigation62Props.boutonProps} />
        <Top>
          <OverlapGroup3>
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
          </OverlapGroup3>
        </Top>
        <Groupe2022 style={{ backgroundImage: `url(${groupe2022})` }}>
          <Groupe2021>
            <OverlapGroup1>
              <Groupe1880 />
              <X3388631 src={x3388631} />
              <TextH5SelectedOnSurfaceHighEmphasis>
                <TextH5Sele>{textH5Sele}</TextH5Sele>
              </TextH5SelectedOnSurfaceHighEmphasis>
              <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                <Suivant>{suivant}</Suivant>
              </OverlapGroup>
            </OverlapGroup1>
          </Groupe2021>
        </Groupe2022>
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

const OverlapGroup3 = styled.div`
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

const Groupe2022 = styled.div`
  width: 1650px;
  height: 929px;
  z-index: 2;
  margin-top: 136px;
  display: flex;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe2021 = styled.div`
  margin-top: 33px;
  margin-left: 458px;
  margin-bottom: 37px;
  display: flex;
  align-items: flex-start;
  min-width: 734px;
`;

const OverlapGroup1 = styled.div`
  width: 734px;
  height: 859px;
  position: relative;
`;

const X3388631 = styled.img`
  position: absolute;
  width: 512px;
  height: 512px;
  top: 141px;
  left: 111px;
  object-fit: cover;
`;

const TextH5SelectedOnSurfaceHighEmphasis = styled.div`
  position: absolute;
  width: 703px;
  height: 44px;
  top: 53px;
  left: 16px;
  display: flex;
`;

const TextH5Sele = styled.div`
  ${HeeboBoldOrange30px}
  margin-top: 11px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -13px;
  width: 703px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 73px;
  top: 725px;
  left: 251px;
  display: flex;
  padding: 2.1px 80px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 232px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Suivant = styled.div`
  ${RobotoMediumWhite14px}
  min-height: 40px;
  min-width: 68px;
  text-align: center;
  letter-spacing: 1.25px;
  line-height: 14px;
  white-space: nowrap;
`;

export default InscriptionRussie;
