import React from "react";
import Navigation52 from "../Navigation52";
import ProjectHeader3 from "../ProjectHeader3";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Groupe19702 from "../Groupe19702";
import Composant1031 from "../Composant1031";
import Composant951 from "../Composant951";
import Footer32 from "../Footer32";
import styled from "styled-components";
import "./TrouverCole15.css";

function TrouverCole15(props) {
  const {
    x12,
    navigation52Props,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    groupe19702Props,
    composant1031Props,
    composant10312Props,
    composant951Props,
    footer32Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1-5 screen">
        <Navigation52
          className={navigation52Props.className}
          boutonProps={navigation52Props.boutonProps}
          boutonProps2={navigation52Props.boutonProps2}
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
            className={groupe19702Props.className}
            groupe1944Props={groupe19702Props.groupe1944Props}
          />
          <ComposantContainer>
            <Composant1031 className={composant1031Props.className}>{composant1031Props.children}</Composant1031>
            <Composant1031 className={composant10312Props.className}>{composant10312Props.children}</Composant1031>
            <Composant951 className={composant951Props.className}>{composant951Props.children}</Composant951>
          </ComposantContainer>
        </Groupe1987>
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
  z-index: 2;
  position: relative;
  align-self: center;
  margin-top: 186px;
  margin-left: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 272px;
`;

const ComposantContainer = styled.div`
  height: 64px;
  position: relative;
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  min-width: 1136px;
`;

export default TrouverCole15;
