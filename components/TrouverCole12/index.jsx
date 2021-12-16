import React from "react";
import Navigation2 from "../Navigation2";
import ProjectHeader3 from "../ProjectHeader3";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Groupe19702 from "../Groupe19702";
import Composant1031 from "../Composant1031";
import Composant891 from "../Composant891";
import Composant951 from "../Composant951";
import Composant751 from "../Composant751";
import Groupe1968 from "../Groupe1968";
import Footer from "../Footer";
import styled from "styled-components";
import "./TrouverCole12.css";

function TrouverCole12(props) {
  const {
    x12,
    navigation2Props,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    groupe19702Props,
    composant1031Props,
    composant891Props,
    composant951Props,
    composant751Props,
    groupe1968Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1-2 screen">
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
        <Groupe1987>
          <Groupe19702
            quandSouhaitezVous={groupe19702Props.quandSouhaitezVous}
            groupe1944Props={groupe19702Props.groupe1944Props}
          />
          <ComposantContainer>
            <Composant1031 className={composant1031Props.className}>{composant1031Props.children}</Composant1031>
            <Composant891 className={composant891Props.className}>{composant891Props.children}</Composant891>
            <Composant951 className={composant951Props.className}>{composant951Props.children}</Composant951>
          </ComposantContainer>
          <Composant751>{composant751Props.children}</Composant751>
          <Groupe1968 className={groupe1968Props.className} />
        </Groupe1987>
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

const Groupe1987 = styled.div`
  width: 1136px;
  z-index: 1;
  position: relative;
  align-self: center;
  margin-top: 186px;
  margin-left: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 598px;
`;

const ComposantContainer = styled.div`
  height: 64px;
  position: relative;
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  min-width: 1136px;
`;

export default TrouverCole12;
