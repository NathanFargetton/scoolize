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
import Composant891 from "../Composant891";
import Composant971 from "../Composant971";
import Composant1011 from "../Composant1011";
import Composant951 from "../Composant951";
import Composant1061 from "../Composant1061";
import Composant961 from "../Composant961";
import Composant1001 from "../Composant1001";
import Composant1031 from "../Composant1031";
import Composant896 from "../Composant896";
import Groupe1991 from "../Groupe1991";
import Footer from "../Footer";
import styled from "styled-components";
import {
  Border1pxFf5d22,
  SegoeuiLightBlack25px,
  SegoeuiRegularNormalDoveGray20px,
  HeeboBoldBlack35px,
} from "../../styledMixins";
import "./TrouverCole110.css";

function TrouverCole110(props) {
  const {
    x12,
    enQuelleTerminaleTesVous,
    gnraleSlectionn,
    jeValideMaSlection,
    technologique,
    navigation2Props,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    composant891Props,
    composant971Props,
    composant1011Props,
    composant8912Props,
    composant951Props,
    composant9512Props,
    composant8913Props,
    composant1061Props,
    composant961Props,
    composant1001Props,
    composant1031Props,
    composant10312Props,
    composant896Props,
    composant8914Props,
    groupe1991Props,
    composant10313Props,
    composant8915Props,
    composant8916Props,
    composant8917Props,
    composant10314Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1-10 screen">
        <Navigation2
          className={navigation2Props.className}
          boutonProps={navigation2Props.boutonProps}
          boutonProps2={navigation2Props.boutonProps2}
        />
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
        <Groupe2060>
          <Groupe1992>
            <EnQuelleTerminaleTesVous>{enQuelleTerminaleTesVous}</EnQuelleTerminaleTesVous>
            <GnraleSlectionn>{gnraleSlectionn}</GnraleSlectionn>
            <Groupe2058>
              <ComposantContainer>
                <Composant891 className={composant891Props.className}>{composant891Props.children}</Composant891>
                <Composant971 humanits={composant971Props.humanits} />
                <Composant1011>{composant1011Props.children}</Composant1011>
                <Composant891 className={composant8912Props.className}>{composant8912Props.children}</Composant891>
              </ComposantContainer>
              <ComposantContainer1>
                <Composant951 className={composant951Props.className}>{composant951Props.children}</Composant951>
                <Composant951 className={composant9512Props.className}>{composant9512Props.children}</Composant951>
                <Composant891 className={composant8913Props.className}>{composant8913Props.children}</Composant891>
                <Composant1061 sciencesDeLIngnieur={composant1061Props.sciencesDeLIngnieur} />
              </ComposantContainer1>
              <ComposantContainer1>
                <Composant961>{composant961Props.children}</Composant961>
                <Composant1001 littratures={composant1001Props.littratures} />
                <Composant1031 className={composant1031Props.className}>{composant1031Props.children}</Composant1031>
                <Composant1031 className={composant10312Props.className}>{composant10312Props.children}</Composant1031>
              </ComposantContainer1>
            </Groupe2058>
            <Link to="/trouver-ecole-1-7">
              <Groupe1968>
                <JeValideMaSlection>{jeValideMaSlection}</JeValideMaSlection>
              </Groupe1968>
            </Link>
          </Groupe1992>
          <Technologique>{technologique}</Technologique>
          <Groupe2059>
            <GroupeContainer>
              <Groupe2042>
                <Composant896 src={composant896Props.src} />
                <Composant891 className={composant8914Props.className}>{composant8914Props.children}</Composant891>
              </Groupe2042>
              <Groupe1991
                composant891Props={groupe1991Props.composant891Props}
                composant8912Props={groupe1991Props.composant8912Props}
              />
              <Groupe2044>
                <Composant1031 className={composant10313Props.className}>{composant10313Props.children}</Composant1031>
                <Composant891 className={composant8915Props.className}>{composant8915Props.children}</Composant891>
              </Groupe2044>
            </GroupeContainer>
            <Groupe2045>
              <ComposantContainer2>
                <Composant891 className={composant8916Props.className}>{composant8916Props.children}</Composant891>
                <Composant891 className={composant8917Props.className}>{composant8917Props.children}</Composant891>
              </ComposantContainer2>
              <Composant1031 className={composant10314Props.className}>{composant10314Props.children}</Composant1031>
            </Groupe2045>
          </Groupe2059>
        </Groupe2060>
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

const Groupe2060 = styled.div`
  width: 1056px;
  z-index: 2;
  align-self: center;
  margin-top: 186px;
  margin-left: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1239px;
`;

const Groupe1992 = styled.div`
  width: 1056px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 744px;
`;

const EnQuelleTerminaleTesVous = styled.div`
  ${HeeboBoldBlack35px}
  width: 736px;
  height: 107px;
  margin-top: -2px;
  align-self: center;
  margin-left: 82px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
`;

const GnraleSlectionn = styled.div`
  ${SegoeuiLightBlack25px}
  width: 384px;
  height: 107px;
  margin-top: 36px;
  letter-spacing: 0;
  line-height: 25px;
`;

const Groupe2058 = styled.div`
  height: 314px;
  margin-top: 51px;
  display: flex;
  align-items: flex-start;
  min-width: 1056px;
`;

const ComposantContainer = styled.div`
  width: 332px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 314px;
`;

const ComposantContainer1 = styled.div`
  width: 332px;
  position: relative;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 314px;
`;

const Groupe1968 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-top: 68px;
  display: flex;
  padding: 0 68px;
  justify-content: flex-end;
  align-items: center;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
  cursor: pointer;
`;

const JeValideMaSlection = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  width: 195px;
  height: 34px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Technologique = styled.div`
  ${SegoeuiLightBlack25px}
  width: 384px;
  height: 40px;
  margin-top: 23px;
  margin-left: 10px;
  letter-spacing: 0;
  line-height: 25px;
`;

const Groupe2059 = styled.div`
  width: 1056px;
  margin-top: 67px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 365px;
`;

const GroupeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 1056px;
`;

const Groupe2042 = styled.div`
  width: 332px;
  height: 148px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Groupe2044 = styled.div`
  width: 332px;
  height: 148px;
  position: relative;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Groupe2045 = styled.div`
  height: 198px;
  position: relative;
  margin-top: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 694px;
`;

const ComposantContainer2 = styled.div`
  width: 332px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 198px;
`;

export default TrouverCole110;
