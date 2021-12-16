import React from "react";
import Navigation2 from "../Navigation2";
import ProjectHeader3 from "../ProjectHeader3";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Groupe1992 from "../Groupe1992";
import Layer2 from "../Layer2";
import Groupe2004 from "../Groupe2004";
import Footer from "../Footer";
import styled from "styled-components";
import {
  SegoeuiRegularNormalBlack20px,
  SegoeuiRegularNormalDoveGray20px2,
  SegoeuiRegularNormalDoveGray26px,
  Border1pxDoveGray,
  SegoeuiRegularNormalOrange20px,
  SegoeuiRegularNormalDoveGray20px,
} from "../../styledMixins";
import "./TrouverCole19.css";

function TrouverCole19(props) {
  const {
    x12,
    imageContainer,
    image16,
    image162,
    image163,
    ligne11,
    masterProfessionnel,
    expertEnInformat,
    plusDInfos,
    trac2010,
    trac2011,
    plusDInfos2,
    plusDInfos3,
    plusDInfos4,
    iconIonicIosArrowDropdown,
    ligne15,
    masterProfessionnel2,
    uneFilireDeForma,
    trac20102,
    trac20112,
    plusDInfos5,
    image19,
    masterProfessionnel3,
    image18,
    image17,
    ligne13,
    masterProfessionnel4,
    formationIntelligen,
    trac20103,
    trac20113,
    trac20104,
    trac20114,
    ligne14,
    x5AnsPourDevenirU,
    navigation2Props,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    groupe1992Props,
    layer2Props,
    groupe2004Props,
    layer22Props,
    layer23Props,
    layer24Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1-9 screen">
        <Navigation2
          className={navigation2Props.className}
          boutonProps={navigation2Props.boutonProps}
          boutonProps2={navigation2Props.boutonProps2}
        />
        <Top>
          <OverlapGroup7>
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
          </OverlapGroup7>
        </Top>
        <Groupe2009>
          <Groupe1992 groupe1970Props={groupe1992Props.groupe1970Props} />
          <Groupe2001>
            <ImageContainer style={{ backgroundImage: `url(${imageContainer})` }}>
              <Image16 src={image16} />
              <Image16 src={image162} />
              <Image16 src={image163} />
            </ImageContainer>
            <Ligne11 src={ligne11} />
            <FlexCol1>
              <MasterProfessionnel>{masterProfessionnel}</MasterProfessionnel>
              <ExpertEnInformat>{expertEnInformat}</ExpertEnInformat>
              <OverlapGroup2>
                <PlusDinfos>{plusDInfos}</PlusDinfos>
                <Groupe2010>
                  <IconIonicIosArrowDropdown>
                    <TracContainer>
                      <Trac2010 src={trac2010} />
                      <Trac2011 src={trac2011} />
                    </TracContainer>
                  </IconIonicIosArrowDropdown>
                  <PlusDinfos1>{plusDInfos2}</PlusDinfos1>
                </Groupe2010>
                <PlusDinfos>{plusDInfos3}</PlusDinfos>
                <PlusDinfos>{plusDInfos4}</PlusDinfos>
                <IconIonicIosArrowDropdown1
                  style={{ backgroundImage: `url(${iconIonicIosArrowDropdown})` }}
                ></IconIonicIosArrowDropdown1>
              </OverlapGroup2>
            </FlexCol1>
            <Layer2 src={layer2Props.src} className={layer2Props.className} />
          </Groupe2001>
          <OverlapGroup5>
            <OverlapGroup3>
              <Groupe2005>
                <Ligne15 src={ligne15} />
                <FlexCol2>
                  <MasterProfessionnel>{masterProfessionnel2}</MasterProfessionnel>
                  <UneFilireDeForma>{uneFilireDeForma}</UneFilireDeForma>
                  <FlexRow>
                    <TracContainer>
                      <Trac2010 src={trac20102} />
                      <Trac2011 src={trac20112} />
                    </TracContainer>
                    <PlusDinfos2>{plusDInfos5}</PlusDinfos2>
                  </FlexRow>
                </FlexCol2>
              </Groupe2005>
              <Image19 src={image19} />
              <Rectangle680></Rectangle680>
            </OverlapGroup3>
            <OverlapGroup4>
              <Rectangle678></Rectangle678>
              <MasterProfessionnel1>{masterProfessionnel3}</MasterProfessionnel1>
              <Image18 src={image18} />
              <Groupe2003>
                <Groupe2002>
                  <OverlapGroup21>
                    <Image17 src={image17} />
                    <Ligne13 src={ligne13} />
                    <FlexCol3>
                      <MasterProfessionnel>{masterProfessionnel4}</MasterProfessionnel>
                      <OverlapGroup31>
                        <FormationIntelligen>{formationIntelligen}</FormationIntelligen>
                        <Groupe2004 />
                        <TracContainer1>
                          <Trac2010 src={trac20103} />
                          <Trac2011 src={trac20113} />
                        </TracContainer1>
                      </OverlapGroup31>
                    </FlexCol3>
                  </OverlapGroup21>
                  <TracContainer2>
                    <Trac2010 src={trac20104} />
                    <Trac2011 src={trac20114} />
                  </TracContainer2>
                </Groupe2002>
              </Groupe2003>
              <Ligne14 src={ligne14} />
              <Groupe2004 className={groupe2004Props.className} />
              <X5AnsPourDevenirU>{x5AnsPourDevenirU}</X5AnsPourDevenirU>
            </OverlapGroup4>
            <Layer2 src={layer22Props.src} className={layer22Props.className} />
            <Layer2 src={layer23Props.src} className={layer23Props.className} />
            <Layer2 src={layer24Props.src} className={layer24Props.className} />
          </OverlapGroup5>
        </Groupe2009>
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

const OverlapGroup7 = styled.div`
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

const Groupe2009 = styled.div`
  width: 1498px;
  z-index: 2;
  position: relative;
  margin-top: 186px;
  margin-right: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1741px;
`;

const Groupe2001 = styled.div`
  ${Border1pxDoveGray}
  height: 348px;
  position: relative;
  margin-top: 143px;
  display: flex;
  padding: 23.5px 37.1px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1498px;
  background-color: var(--white);
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  width: 225px;
  height: 225px;
  position: relative;
  margin-top: 1px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Image16 = styled.img`
  position: absolute;
  width: 225px;
  height: 225px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Ligne11 = styled.img`
  width: 3px;
  height: 229px;
  margin-left: 114px;
  margin-bottom: 25px;
  object-fit: cover;
`;

const FlexCol1 = styled.div`
  width: 750px;
  margin-left: 22px;
  margin-bottom: 36.75px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 215px;
`;

const MasterProfessionnel = styled.div`
  ${SegoeuiRegularNormalOrange20px}
  width: 490px;
  height: 31px;
  -webkit-text-stroke: 1px var(--ff5d22);
  letter-spacing: 0;
  line-height: 20px;
`;

const ExpertEnInformat = styled.div`
  ${SegoeuiRegularNormalDoveGray20px2}
  width: 750px;
  height: 119px;
  margin-top: 18px;
  letter-spacing: 0;
  line-height: 20px;
`;

const OverlapGroup2 = styled.div`
  ${SegoeuiRegularNormalBlack20px}
  width: 142px;
  height: 29px;
  position: relative;
  margin-top: 18px;
  margin-left: 18.73px;
`;

const PlusDinfos = styled.div`
  position: absolute;
  width: 105px;
  height: 29px;
  top: 0;
  left: 37px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Groupe2010 = styled.div`
  position: absolute;
  width: 142px;
  height: 29px;
  top: 0;
  left: 0;
  display: flex;
`;

const IconIonicIosArrowDropdown = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 29.25px;
`;

const TracContainer = styled.div`
  width: 29px;
  height: 29px;
  position: relative;
`;

const Trac2010 = styled.img`
  position: absolute;
  width: 16px;
  height: 9px;
  top: 11px;
  left: 7px;
  object-fit: cover;
`;

const Trac2011 = styled.img`
  position: absolute;
  width: 29px;
  height: 29px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const PlusDinfos1 = styled.div`
  ${SegoeuiRegularNormalBlack20px}
  margin-bottom: 0.2px;
  margin-left: 8px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 20px;
`;

const IconIonicIosArrowDropdown1 = styled.div`
  position: absolute;
  width: 16px;
  height: 9px;
  top: 11px;
  left: 7px;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup5 = styled.div`
  width: 1498px;
  height: 1086px;
  position: relative;
  margin-top: 21px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 1498px;
  height: 348px;
  top: 738px;
  left: 0;
  border-radius: 20px;
`;

const Groupe2005 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  height: 348px;
  top: 0;
  left: 0;
  display: flex;
  padding: 47px 136px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1498px;
  background-color: var(--white);
  border-radius: 20px;
`;

const Ligne15 = styled.img`
  width: 3px;
  height: 229px;
  object-fit: cover;
`;

const FlexCol2 = styled.div`
  width: 927px;
  margin-left: 18px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 215px;
`;

const UneFilireDeForma = styled.div`
  ${SegoeuiRegularNormalDoveGray26px}
  width: 927px;
  height: 119px;
  margin-top: 18px;
  letter-spacing: 0;
  line-height: 26px;
`;

const FlexRow = styled.div`
  margin-top: 18px;
  margin-left: 18.73px;
  display: flex;
  align-items: flex-start;
  min-width: 142px;
`;

const PlusDinfos2 = styled.div`
  ${SegoeuiRegularNormalBlack20px}
  width: 105px;
  height: 29px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Image19 = styled.img`
  position: absolute;
  width: 225px;
  height: 225px;
  top: 62px;
  left: 100px;
  object-fit: cover;
`;

const Rectangle680 = styled.div`
  position: absolute;
  width: 84px;
  height: 34px;
  top: 72px;
  left: 171px;
  background-color: var(--alizarin-crimson);
  border-radius: 17px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 1498px;
  height: 756px;
  top: 0;
  left: 0;
`;

const Rectangle678 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 1498px;
  height: 348px;
  top: 369px;
  left: 0;
  background-color: var(--white);
  border-radius: 20px;
`;

const MasterProfessionnel1 = styled.div`
  ${SegoeuiRegularNormalOrange20px}
  position: absolute;
  width: 490px;
  height: 31px;
  top: 410px;
  left: 435px;
  -webkit-text-stroke: 1px var(--ff5d22);
  letter-spacing: 0;
  line-height: 20px;
`;

const Image18 = styled.img`
  position: absolute;
  width: 211px;
  height: 67px;
  top: 510px;
  left: 100px;
  object-fit: cover;
`;

const Groupe2003 = styled.div`
  position: absolute;
  width: 1498px;
  height: 695px;
  top: 0;
  left: 0;
  display: flex;
`;

const Groupe2002 = styled.div`
  flex: 1;
  width: 1498px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const OverlapGroup21 = styled.div`
  ${Border1pxDoveGray}
  height: 348px;
  display: flex;
  padding: 13.4px 9px;
  align-items: center;
  min-width: 1498px;
  background-color: var(--white);
  border-radius: 20px;
`;

const Image17 = styled.img`
  width: 394px;
  height: 169px;
  margin-bottom: 1px;
  object-fit: cover;
`;

const Ligne13 = styled.img`
  width: 3px;
  height: 229px;
  margin-left: 8px;
  margin-bottom: 25px;
  object-fit: cover;
`;

const FlexCol3 = styled.div`
  width: 847px;
  align-self: flex-end;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 287px;
`;

const OverlapGroup31 = styled.div`
  width: 847px;
  height: 226px;
  position: relative;
  margin-top: 30px;
`;

const FormationIntelligen = styled.div`
  ${SegoeuiRegularNormalDoveGray20px2}
  position: absolute;
  width: 847px;
  height: 225px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const TracContainer1 = styled.div`
  position: absolute;
  width: 29px;
  height: 29px;
  top: 196px;
  left: 19px;
`;

const TracContainer2 = styled.div`
  width: 29px;
  height: 29px;
  position: relative;
  margin-top: 317px;
  margin-right: 561.3px;
`;

const Ligne14 = styled.img`
  position: absolute;
  width: 3px;
  height: 229px;
  top: 417px;
  left: 414px;
  object-fit: cover;
`;

const X5AnsPourDevenirU = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 914px;
  height: 302px;
  top: 454px;
  left: 435px;
  letter-spacing: 0;
  line-height: 20px;
`;

export default TrouverCole19;
