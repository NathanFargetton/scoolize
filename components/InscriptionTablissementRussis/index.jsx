import React from "react";
import { Link } from "react-router-dom";
import Navigation42 from "../Navigation42";
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
import { RobotoMediumWhite14px, SegoeuiRegularNormalDoveGray20px, HeeboBoldOrange30px } from "../../styledMixins";
import "./InscriptionTablissementRussis.css";

function InscriptionTablissementRussis(props) {
  const {
    x12,
    groupe2020,
    x3388631,
    textH5Sele,
    overlapGroup,
    modifierLeProfilDTablissement,
    lienDuFormulaire,
    navigation42Props,
    projectHeaderProps,
    filliresProps,
    groupe1882Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="inscription-etablissement-reussis screen">
        <Navigation42 className={navigation42Props.className} boutonProps={navigation42Props.boutonProps} />
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
        <Groupe2020 style={{ backgroundImage: `url(${groupe2020})` }}>
          <Groupe2019>
            <OverlapGroup1>
              <Groupe1880 />
              <X3388631 src={x3388631} />
              <TextH5SelectedOnSurfaceHighEmphasis>
                <TextH5Sele>{textH5Sele}</TextH5Sele>
              </TextH5SelectedOnSurfaceHighEmphasis>
              <Link to="/web-1920-10">
                <ButtonsContainedEnabled>
                  <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                    <ModifierLeProfilDtablissement>{modifierLeProfilDTablissement}</ModifierLeProfilDtablissement>
                  </OverlapGroup>
                </ButtonsContainedEnabled>
              </Link>
              <LienDuFormulaire>{lienDuFormulaire}</LienDuFormulaire>
            </OverlapGroup1>
          </Groupe2019>
        </Groupe2020>
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

const Groupe2020 = styled.div`
  height: 929px;
  z-index: 2;
  margin-top: 136px;
  display: flex;
  padding: 33px 458px;
  align-items: flex-start;
  min-width: 1650px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe2019 = styled.div`
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
  top: 157px;
  left: 111px;
  object-fit: cover;
`;

const TextH5SelectedOnSurfaceHighEmphasis = styled.div`
  position: absolute;
  width: 692px;
  height: 104px;
  top: 53px;
  left: 17px;
  display: flex;
`;

const TextH5Sele = styled.div`
  ${HeeboBoldOrange30px}
  margin-top: 7px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -9px;
  width: 692px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const ButtonsContainedEnabled = styled.div`
  position: absolute;
  height: 64px;
  top: 728px;
  left: 173px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 387px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  height: 73px;
  margin-top: -3.5px;
  display: flex;
  padding: 23.6px 46.1px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 396px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ModifierLeProfilDtablissement = styled.div`
  ${RobotoMediumWhite14px}
  min-height: 21px;
  min-width: 300px;
  text-align: center;
  letter-spacing: 1.25px;
  line-height: 14px;
  white-space: nowrap;
`;

const LienDuFormulaire = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 515px;
  height: 32px;
  top: 688px;
  left: 111px;
  letter-spacing: 0;
  line-height: 20px;
`;

export default InscriptionTablissementRussis;
