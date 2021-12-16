import React from "react";
import Navigation2 from "../Navigation2";
import ProjectHeader3 from "../ProjectHeader3";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Groupe1970 from "../Groupe1970";
import Composant911 from "../Composant911";
import Composant921 from "../Composant921";
import Footer from "../Footer";
import styled from "styled-components";
import {
  SegoeuiRegularNormalDoveGray15px,
  SegoeuiRegularNormalDoveGray20px,
  Border1pxFf5d22,
} from "../../styledMixins";
import "./TrouverCole17.css";

function TrouverCole17(props) {
  const {
    x12,
    gnraleSlectionn,
    jeNeSaisPas,
    navigation2Props,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    groupe1970Props,
    composant911Props,
    composant921Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1-7 screen">
        <Navigation2
          className={navigation2Props.className}
          boutonProps={navigation2Props.boutonProps}
          boutonProps2={navigation2Props.boutonProps2}
        />
        <Top>
          <OverlapGroup3>
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
          </OverlapGroup3>
        </Top>
        <Groupe1992>
          <Groupe1970 className={groupe1970Props.className}>{groupe1970Props.children}</Groupe1970>
          <GnraleSlectionn>{gnraleSlectionn}</GnraleSlectionn>
          <Groupe1991>
            <FlexCol1>
              <Composant911>{composant911Props.children}</Composant911>
              <Groupe1990>
                <JeNeSaisPas>{jeNeSaisPas}</JeNeSaisPas>
              </Groupe1990>
            </FlexCol1>
            <Composant921>{composant921Props.children}</Composant921>
          </Groupe1991>
        </Groupe1992>
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

const Groupe1992 = styled.div`
  width: 935px;
  z-index: 2;
  position: relative;
  align-self: center;
  margin-top: 186px;
  margin-left: 69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 509px;
`;

const GnraleSlectionn = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  width: 302px;
  height: 85px;
  margin-top: 78px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Groupe1991 = styled.div`
  height: 211px;
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 734px;
`;

const FlexCol1 = styled.div`
  width: 332px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 211px;
`;

const Groupe1990 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-top: 83px;
  display: flex;
  padding: 9px 119px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const JeNeSaisPas = styled.div`
  ${SegoeuiRegularNormalDoveGray15px}
  width: 93px;
  height: 34px;
  letter-spacing: 0;
  line-height: 15px;
`;

export default TrouverCole17;
