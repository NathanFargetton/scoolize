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
import Footer from "../Footer";
import styled from "styled-components";
import { SegoeuiRegularNormalDoveGray15px, Border1pxFf5d22 } from "../../styledMixins";
import "./TrouverCole13.css";

function TrouverCole13(props) {
  const {
    x12,
    franceEntire,
    distanceMonRythme,
    navigation2Props,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    groupe19702Props,
    composant1031Props,
    composant10312Props,
    composant10313Props,
    composant10314Props,
    composant10315Props,
    composant10316Props,
    composant10317Props,
    composant891Props,
    composant951Props,
    composant10318Props,
    composant8912Props,
    composant10319Props,
    composant103110Props,
    composant8913Props,
    composant9512Props,
    composant103111Props,
    composant8914Props,
    composant8915Props,
    composant103112Props,
    composant103113Props,
    composant9513Props,
    composant103114Props,
    composant8916Props,
    composant103115Props,
    composant103116Props,
    composant8917Props,
    composant8918Props,
    composant103117Props,
    composant103118Props,
    composant8919Props,
    composant103119Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1-3 screen">
        <Navigation2 boutonProps={navigation2Props.boutonProps} boutonProps2={navigation2Props.boutonProps2} />
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
            groupe1944Props={groupe19702Props.groupe1944Props}
          />
          <ComposantContainer>
            <Composant1031>{composant1031Props.children}</Composant1031>
            <Composant1031 className={composant10312Props.className}>{composant10312Props.children}</Composant1031>
            <Composant1031 className={composant10313Props.className}>{composant10313Props.children}</Composant1031>
          </ComposantContainer>
          <ComposantContainer1>
            <Composant1031 className={composant10314Props.className}>{composant10314Props.children}</Composant1031>
            <Composant1031 className={composant10315Props.className}>{composant10315Props.children}</Composant1031>
            <Composant1031 className={composant10316Props.className}>{composant10316Props.children}</Composant1031>
          </ComposantContainer1>
          <ComposantContainer1>
            <Composant1031 className={composant10317Props.className}>{composant10317Props.children}</Composant1031>
            <Composant891>{composant891Props.children}</Composant891>
            <Composant951>{composant951Props.children}</Composant951>
          </ComposantContainer1>
          <ComposantContainer1>
            <Composant1031 className={composant10318Props.className}>{composant10318Props.children}</Composant1031>
            <Composant891 className={composant8912Props.className}>{composant8912Props.children}</Composant891>
            <Composant1031 className={composant10319Props.className}>{composant10319Props.children}</Composant1031>
          </ComposantContainer1>
          <ComposantContainer1>
            <Composant1031 className={composant103110Props.className}>{composant103110Props.children}</Composant1031>
            <Composant891 className={composant8913Props.className}>{composant8913Props.children}</Composant891>
            <Composant951 className={composant9512Props.className}>{composant9512Props.children}</Composant951>
          </ComposantContainer1>
          <ComposantContainer1>
            <Composant1031 className={composant103111Props.className}>{composant103111Props.children}</Composant1031>
            <Composant891>{composant8914Props.children}</Composant891>
            <Composant891 className={composant8915Props.className}>{composant8915Props.children}</Composant891>
          </ComposantContainer1>
          <ComposantContainer1>
            <Composant1031 className={composant103112Props.className}>{composant103112Props.children}</Composant1031>
            <Composant1031 className={composant103113Props.className}>{composant103113Props.children}</Composant1031>
            <Composant951 className={composant9513Props.className}>{composant9513Props.children}</Composant951>
          </ComposantContainer1>
          <ComposantContainer1>
            <Composant1031 className={composant103114Props.className}>{composant103114Props.children}</Composant1031>
            <Composant891 className={composant8916Props.className}>{composant8916Props.children}</Composant891>
            <Composant1031 className={composant103115Props.className}>{composant103115Props.children}</Composant1031>
          </ComposantContainer1>
          <ComposantContainer1>
            <Composant1031 className={composant103116Props.className}>{composant103116Props.children}</Composant1031>
            <Composant891 className={composant8917Props.className}>{composant8917Props.children}</Composant891>
            <Composant891 className={composant8918Props.className}>{composant8918Props.children}</Composant891>
          </ComposantContainer1>
          <ComposantContainer1>
            <Composant1031 className={composant103117Props.className}>{composant103117Props.children}</Composant1031>
            <Composant1031 className={composant103118Props.className}>{composant103118Props.children}</Composant1031>
            <Composant891 className={composant8919Props.className}>{composant8919Props.children}</Composant891>
          </ComposantContainer1>
          <Composant1031 className={composant103119Props.className}>{composant103119Props.children}</Composant1031>
          <GroupeContainer>
            <Groupe1968>
              <FranceEntire>{franceEntire}</FranceEntire>
            </Groupe1968>
            <Groupe1988>
              <DistanceMonRythme>{distanceMonRythme}</DistanceMonRythme>
            </Groupe1988>
          </GroupeContainer>
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
  width: 1136px;
  z-index: 2;
  position: relative;
  align-self: center;
  margin-top: 186px;
  margin-left: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1252px;
`;

const ComposantContainer = styled.div`
  height: 64px;
  position: relative;
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  min-width: 1136px;
`;

const ComposantContainer1 = styled.div`
  height: 64px;
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  min-width: 1136px;
`;

const GroupeContainer = styled.div`
  margin-top: 126px;
  margin-left: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 715px;
`;

const Groupe1968 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  display: flex;
  padding: 0 95px;
  align-items: center;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const FranceEntire = styled.div`
  ${SegoeuiRegularNormalDoveGray15px}
  width: 142px;
  height: 22px;
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
`;

const Groupe1988 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-left: 51px;
  display: flex;
  padding: 0 72px;
  align-items: center;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const DistanceMonRythme = styled.p`
  ${SegoeuiRegularNormalDoveGray15px}
  width: 188px;
  height: 22px;
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
`;

export default TrouverCole13;
