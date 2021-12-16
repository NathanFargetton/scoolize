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
import Groupe19702 from "../Groupe19702";
import Groupe1971 from "../Groupe1971";
import Composant501 from "../Composant501";
import Composant511 from "../Composant511";
import Composant521 from "../Composant521";
import Composant531 from "../Composant531";
import Composant541 from "../Composant541";
import Composant551 from "../Composant551";
import Composant561 from "../Composant561";
import Composant571 from "../Composant571";
import Composant581 from "../Composant581";
import Composant591 from "../Composant591";
import Composant601 from "../Composant601";
import Composant621 from "../Composant621";
import Composant631 from "../Composant631";
import Groupe1968 from "../Groupe1968";
import Footer from "../Footer";
import styled from "styled-components";
import { Border1pxBlack2, HeeboBoldOrange14px } from "../../styledMixins";
import "./TrouverCole11.css";

function TrouverCole11(props) {
  const {
    lesConditionsGnr,
    x12,
    buttonProps,
    boutonProps,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    groupe19702Props,
    groupe1971Props,
    composant501Props,
    composant511Props,
    composant521Props,
    composant531Props,
    composant541Props,
    composant551Props,
    composant561Props,
    composant571Props,
    composant581Props,
    composant591Props,
    composant601Props,
    groupe19712Props,
    composant621Props,
    composant631Props,
    groupe1968Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1-1 screen">
        <Navigation>
          <OverlapGroup>
            <NavigationBackground></NavigationBackground>
            <Navigation1>
              <Groupe1936>
                <Groupe1876 />
                <Button className={buttonProps.className} />
              </Groupe1936>
            </Navigation1>
            <Bouton src={boutonProps.src} />
            <LesConditionsGnr>{lesConditionsGnr}</LesConditionsGnr>
            <Composant4410 />
          </OverlapGroup>
        </Navigation>
        <Top>
          <OverlapGroup2>
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
          </OverlapGroup2>
        </Top>
        <Groupe1987>
          <Groupe19702
            quandSouhaitezVous={groupe19702Props.quandSouhaitezVous}
            className={groupe19702Props.className}
            groupe1944Props={groupe19702Props.groupe1944Props}
          />
          <Groupe1986>
            <Groupe1971 composant491Props={groupe1971Props.composant491Props} />
            <Groupe1972>
              <Composant501>{composant501Props.children}</Composant501>
            </Groupe1972>
            <Groupe1973>
              <Composant511>{composant511Props.children}</Composant511>
            </Groupe1973>
            <Groupe1972>
              <Composant521>{composant521Props.children}</Composant521>
            </Groupe1972>
            <Groupe1975>
              <Composant531>{composant531Props.children}</Composant531>
            </Groupe1975>
            <Groupe1972>
              <Composant541>{composant541Props.children}</Composant541>
            </Groupe1972>
            <Groupe1972>
              <Composant551>{composant551Props.children}</Composant551>
            </Groupe1972>
            <Groupe1972>
              <Composant561>{composant561Props.children}</Composant561>
            </Groupe1972>
            <Groupe1972>
              <Composant571>{composant571Props.children}</Composant571>
            </Groupe1972>
            <Groupe1972>
              <Composant581>{composant581Props.children}</Composant581>
            </Groupe1972>
            <Groupe1972>
              <Composant591>{composant591Props.children}</Composant591>
            </Groupe1972>
            <Groupe1972>
              <Composant601>{composant601Props.children}</Composant601>
            </Groupe1972>
            <Groupe1971 className={groupe19712Props.className} composant491Props={groupe19712Props.composant491Props} />
            <Groupe1972>
              <Composant621>{composant621Props.children}</Composant621>
            </Groupe1972>
            <Groupe1972>
              <Composant631>{composant631Props.children}</Composant631>
            </Groupe1972>
          </Groupe1986>
          <Groupe1968 className={groupe1968Props.className} />
        </Groupe1987>
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
  z-index: 1;
  display: flex;
  align-items: flex-start;
  min-width: 294px;
`;

const OverlapGroup = styled.div`
  width: 294px;
  height: 1080px;
  position: relative;
`;

const NavigationBackground = styled.div`
  position: absolute;
  width: 270px;
  height: 1080px;
  top: 0;
  left: 0;
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
  z-index: 4;
  display: flex;
  align-items: flex-start;
  min-width: 1650px;
`;

const OverlapGroup2 = styled.div`
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
  width: 1098px;
  z-index: 2;
  position: relative;
  align-self: center;
  margin-top: 186px;
  margin-left: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1313px;
`;

const Groupe1986 = styled.div`
  width: 1098px;
  position: relative;
  margin-top: 51px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 980px;
`;

const Groupe1972 = styled.div`
  ${Border1pxBlack2}
  height: 56px;
  position: relative;
  margin-top: 10px;
  display: flex;
  padding: 13px 24px;
  align-items: flex-start;
  min-width: 1098px;
  background-color: var(--white);
`;

const Groupe1973 = styled.div`
  ${Border1pxBlack2}
  height: 56px;
  position: relative;
  margin-top: 9px;
  display: flex;
  padding: 13px 24px;
  align-items: flex-start;
  min-width: 1098px;
  background-color: var(--white);
`;

const Groupe1975 = styled.div`
  ${Border1pxBlack2}
  height: 56px;
  position: relative;
  margin-top: 11px;
  display: flex;
  padding: 13px 24px;
  align-items: flex-start;
  min-width: 1098px;
  background-color: var(--white);
`;

export default TrouverCole11;
