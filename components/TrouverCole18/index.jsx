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
import Groupe1991 from "../Groupe1991";
import Footer from "../Footer";
import styled from "styled-components";
import "./TrouverCole18.css";

function TrouverCole18(props) {
  const {
    x12,
    rentreScolaire,
    navigation2Props,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    groupe19702Props,
    groupe1991Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1-8 screen">
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
          <Groupe19702
            quandSouhaitezVous={groupe19702Props.quandSouhaitezVous}
            className={groupe19702Props.className}
            groupe1944Props={groupe19702Props.groupe1944Props}
          />
          <RentreScolaire>{rentreScolaire}</RentreScolaire>
          <Groupe1991
            className={groupe1991Props.className}
            composant891Props={groupe1991Props.composant891Props}
            composant8912Props={groupe1991Props.composant8912Props}
          />
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
  width: 1117px;
  z-index: 2;
  position: relative;
  align-self: center;
  margin-top: 186px;
  margin-left: 251px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 446px;
`;

const RentreScolaire = styled.div`
  height: 28px;
  margin-top: 76px;
  font-family: var(--font-family-segoeui-black);
  font-weight: 900;
  color: var(--black);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

export default TrouverCole18;
