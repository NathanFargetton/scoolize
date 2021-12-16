import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation42 from "../Navigation42";
import ProjectHeader from "../ProjectHeader";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Composant371 from "../Composant371";
import Composant381 from "../Composant381";
import Composant391 from "../Composant391";
import Composant301 from "../Composant301";
import Composant321 from "../Composant321";
import Composant331 from "../Composant331";
import Composant361 from "../Composant361";
import Composant401 from "../Composant401";
import Composant411 from "../Composant411";
import Composant421 from "../Composant421";
import Composant431 from "../Composant431";
import Title3 from "../Title3";
import * as mdc from "material-components-web";
import styled from "styled-components";
import {
  SegoeuiRegularNormalWhite20px,
  RobotoNormalEastBay14px,
  HeeboBoldWhite18px,
  RobotoNormalOrange14px2,
  RobotoNormalOrange14px,
} from "../../styledMixins";
import "./Inscription.css";

function Inscription(props) {
  const {
    x12,
    overlapGroup1,
    groupe1880,
    groupe1877,
    textSubtitle,
    spanText,
    spanText2,
    image13,
    propos,
    accsDirect,
    tablissements,
    connect,
    copyright,
    navigation42Props,
    projectHeaderProps,
    filliresProps,
    composant301Props,
    composant3012Props,
    composant321Props,
    composant3013Props,
    composant3212Props,
    composant3014Props,
    composant3015Props,
    composant401Props,
    composant411Props,
    composant421Props,
    composant4112Props,
  } = props;

  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-1 .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-2 .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-3 .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-4 .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-5 .mdc-text-field"));
    mdc.autoInit();
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised .mdc-button"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="inscription screen">
        <Navigation42 boutonProps={navigation42Props.boutonProps} />
        <Top>
          <OverlapGroup3>
            <ProjectHeader projectHeader2Props={projectHeaderProps.projectHeader2Props} />
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
            <Groupe1882 />
          </OverlapGroup3>
        </Top>
        <OverlapGroup4>
          <Groupe2024>
            <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <Groupe1880 style={{ backgroundImage: `url(${groupe1880})` }}>
                <Groupe1877 src={groupe1877} />
                <div className="text-field-filled">
                  <label className="mdc-text-field mdc-text-field--filled">
                    <span className="mdc-text-field__ripple"></span>
                    <span className="mdc-floating-label" id="my-label-id">
                      Nom complet
                    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                    <span className="mdc-line-ripple"></span>
                  </label>
                </div>
                <div className="text-field-filled-1">
                  <label className="mdc-text-field mdc-text-field--filled">
                    <span className="mdc-text-field__ripple"></span>
                    <span className="mdc-floating-label" id="my-label-id">
                      Adresse électronique
                    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                    <span className="mdc-line-ripple"></span>
                  </label>
                </div>
                <div className="text-field-filled-2">
                  <label className="mdc-text-field mdc-text-field--filled">
                    <span className="mdc-text-field__ripple"></span>
                    <span className="mdc-floating-label" id="my-label-id">
                      Mot de passe
                    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                    <span className="mdc-line-ripple"></span>
                  </label>
                </div>
                <div className="text-field-filled-3">
                  <label className="mdc-text-field mdc-text-field--filled">
                    <span className="mdc-text-field__ripple"></span>
                    <span className="mdc-floating-label" id="my-label-id">
                      Vérification du mot de passe
                    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                    <span className="mdc-line-ripple"></span>
                  </label>
                </div>
                <div className="text-field-filled-4">
                  <label className="mdc-text-field mdc-text-field--filled">
                    <span className="mdc-text-field__ripple"></span>
                    <span className="mdc-floating-label" id="my-label-id">
                      Numéros INE
                    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                    <span className="mdc-line-ripple"></span>
                  </label>
                </div>
                <div className="text-field-filled-5">
                  <label className="mdc-text-field mdc-text-field--filled">
                    <span className="mdc-text-field__ripple"></span>
                    <span className="mdc-floating-label" id="my-label-id">
                      Numéros de téléphone
                    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                    <span className="mdc-line-ripple"></span>
                  </label>
                </div>
                <div className="checkbox-unselected">
                  <div className="mdc-checkbox" data-mdc-auto-init="MDCCheckbox" data-id="anima-widget">
                    <input type="checkbox" className="mdc-checkbox__native-control" />
                    <div className="mdc-checkbox__background">
                      <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                        <path
                          className="mdc-checkbox__checkmark-path"
                          fill="none"
                          d="M1.73,12.91 8.1,19.28 22.79,4.59"
                        />
                      </svg>
                      <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                    <div className="mdc-checkbox__ripple"></div>
                  </div>
                </div>
                <Link to="/enregistrement-etablissement">
                  <TextSubtitle>{textSubtitle}</TextSubtitle>
                </Link>
              </Groupe1880>
              <TextSubtitle1>
                <span className="roboto-normal-black-14px">{spanText}</span>
                <Span1>{spanText2}</Span1>
              </TextSubtitle1>
            </OverlapGroup1>
            <Groupe2023>
              <Image13 src={image13} />
            </Groupe2023>
          </Groupe2024>
          <div className="button-raised">
            <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
              <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Inscription</span>
            </button>
          </div>
        </OverlapGroup4>
        <Footer>
          <FlexRow>
            <APropos>
              <PROPOS>{propos}</PROPOS>
              <Composant371 />
              <Composant381 />
              <Composant391 />
            </APropos>
            <AccsDirect>
              <ACCSDIRECT>{accsDirect}</ACCSDIRECT>
              <Composant301>{composant301Props.children}</Composant301>
              <Composant301 className={composant3012Props.className}>{composant3012Props.children}</Composant301>
              <Composant321>{composant321Props.children}</Composant321>
              <Composant331 />
              <Composant301 className={composant3013Props.className}>{composant3013Props.children}</Composant301>
              <Composant321>{composant3212Props.children}</Composant321>
              <Composant361 />
            </AccsDirect>
            <Etablissements>
              <TABLISSEMENTS>{tablissements}</TABLISSEMENTS>
              <Composant301 className={composant3014Props.className}>{composant3014Props.children}</Composant301>
              <Composant301 className={composant3015Props.className}>{composant3015Props.children}</Composant301>
            </Etablissements>
            <RseauxSociaux>
              <TABLISSEMENTS>{connect}</TABLISSEMENTS>
              <FlexRow1>
                <Composant401 src={composant401Props.src} />
                <Composant411 src={composant411Props.src} />
                <Composant421 src={composant421Props.src} />
                <Composant431 />
                <Composant411 src={composant4112Props.src} className={composant4112Props.className} />
              </FlexRow1>
            </RseauxSociaux>
          </FlexRow>
          <ProjectHeader1>
            <Title3 />
            <Copyright>{copyright}</Copyright>
          </ProjectHeader1>
        </Footer>
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
  min-width: 1696px;
`;

const OverlapGroup3 = styled.div`
  width: 1696px;
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

const OverlapGroup4 = styled.div`
  width: 1738px;
  height: 1264px;
  z-index: 2;
  position: relative;
  margin-top: 136px;
  margin-right: 2px;
`;

const Groupe2024 = styled.div`
  position: absolute;
  width: 1738px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1264px;
`;

const OverlapGroup1 = styled.div`
  width: 1738px;
  height: 978px;
  position: relative;
  margin-left: 0;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1880 = styled.div`
  position: absolute;
  width: 734px;
  top: 37px;
  left: 503px;
  display: flex;
  flex-direction: column;
  padding: 34.4px 64px;
  align-items: center;
  min-height: 928px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1877 = styled.img`
  width: 504px;
  height: 178px;
  align-self: flex-start;
  margin-top: 2px;
  object-fit: cover;
`;

const TextSubtitle = styled.p`
  ${RobotoNormalEastBay14px}
  min-height: 21px;
  margin-top: 124px;
  margin-left: 2px;
  min-width: 306px;
  letter-spacing: 0.13px;
  line-height: 14px;
  text-decoration: underline;
  white-space: nowrap;
  cursor: pointer;
`;

const TextSubtitle1 = styled.p`
  ${RobotoNormalOrange14px}
  position: absolute;
  top: 768px;
  left: 606px;
  letter-spacing: 0.13px;
  line-height: 14px;
  white-space: nowrap;
`;

const Span1 = styled.span`
  ${RobotoNormalOrange14px2}
  text-decoration: underline;
`;

const Groupe2023 = styled.div`
  width: 1696px;
  height: 251px;
  margin-top: 35px;
  display: flex;
  background-color: var(--black-haze);
`;

const Image13 = styled.img`
  height: 210px;
  margin-left: 153px;
  margin-right: 208px;
  flex: 1;
  object-fit: cover;
`;

const Footer = styled.div`
  width: 1704px;
  z-index: 1;
  margin-top: 94px;
  display: flex;
  flex-direction: column;
  padding: 7px 147.2px;
  align-items: flex-end;
  min-height: 353px;
  background-color: var(--east-bay);
`;

const FlexRow = styled.div`
  height: 219px;
  margin-top: 31px;
  display: flex;
  align-items: flex-start;
  min-width: 1409px;
`;

const APropos = styled.div`
  width: 170px;
  position: relative;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 107px;
`;

const PROPOS = styled.div`
  ${HeeboBoldWhite18px}
  width: 100px;
  height: 34px;
  margin-top: -2px;
  margin-left: 2px;
  letter-spacing: 0;
  line-height: 22px;
`;

const AccsDirect = styled.div`
  width: 167px;
  position: relative;
  margin-left: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 219px;
`;

const ACCSDIRECT = styled.div`
  ${HeeboBoldWhite18px}
  width: 131px;
  height: 34px;
  margin-top: -2px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Etablissements = styled.div`
  width: 203px;
  position: relative;
  margin-left: 186px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 82px;
`;

const TABLISSEMENTS = styled.div`
  ${HeeboBoldWhite18px}
  height: 25px;
  margin-top: -2px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const RseauxSociaux = styled.div`
  width: 298px;
  margin-left: 195px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 82px;
`;

const FlexRow1 = styled.div`
  height: 47px;
  position: relative;
  margin-top: 12px;
  margin-left: 1px;
  display: flex;
  align-items: center;
  min-width: 297px;
`;

const ProjectHeader1 = styled.div`
  width: 641px;
  height: 49px;
  position: relative;
  align-self: center;
  margin-top: 40px;
  margin-left: 91px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Copyright = styled.div`
  ${SegoeuiRegularNormalWhite20px}
  margin-bottom: -9.5px;
  width: 302px;
  height: 30px;
  margin-right: -2px;
  letter-spacing: 0;
  line-height: 20px;
`;

export default Inscription;
