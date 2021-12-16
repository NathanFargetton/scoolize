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
import Groupe1944 from "../Groupe1944";
import Composant1031 from "../Composant1031";
import Composant961 from "../Composant961";
import Groupe1968 from "../Groupe1968";
import Composant951 from "../Composant951";
import Footer from "../Footer";
import styled from "styled-components";
import {
  HeeboBoldOrange14px,
  HeeboBoldBlack30px,
  Border1pxFf5d22,
  HeeboBoldOrange25px,
  SegoeuiRegularNormalDoveGray15px,
  SegoeuiRegularNormalDoveGray20px,
} from "../../styledMixins";
import "./TrouverCole1.css";

function TrouverCole1(props) {
  const {
    lesConditionsGnr,
    x12,
    quelDiplmeSouhaitezVousPrparer,
    capOuQuivalent,
    bp,
    brevetProfessionnel,
    place,
    certificatDAptitudeProfessionnelle,
    bac1Bac2,
    bp2,
    brevetDeTechnicienSuprieur,
    dut,
    diplmeDeTechnicienSuprieur,
    prpa,
    classePrparatoire,
    bac3,
    dcg,
    diplmeDeComptabilitEtDeGestion,
    licence,
    licencePro,
    bac4Bac5,
    dscg,
    diplmeSuprieurDe,
    master,
    bac6EtPlus,
    mba,
    masterOfBusinessAdministration,
    autres,
    cqr,
    certificatsDeQuali,
    formationQualifiante,
    buttonProps,
    boutonProps,
    projectHeader3Props,
    filliresProps,
    groupe1882Props,
    groupe1944Props,
    composant1031Props,
    composant961Props,
    composant9612Props,
    composant951Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="trouver-ecole-1 screen">
        <Navigation>
          <OverlapGroup13>
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
          </OverlapGroup13>
        </Navigation>
        <Top>
          <OverlapGroup14>
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
          </OverlapGroup14>
        </Top>
        <Groupe1970>
          <OverlapGroup12>
            <QuelDiplmeSouhaitezVousPrparer>{quelDiplmeSouhaitezVousPrparer}</QuelDiplmeSouhaitezVousPrparer>
            <Groupe1944 lycen={groupe1944Props.lycen} className={groupe1944Props.className} />
          </OverlapGroup12>
          <Groupe1969>
            <FlexCol1>
              <OverlapGroup11>
                <CAPOuQuivalent>{capOuQuivalent}</CAPOuQuivalent>
                <Groupe1948>
                  <OverlapGroup>
                    <BP>{bp}</BP>
                    <BrevetProfessionnel>{brevetProfessionnel}</BrevetProfessionnel>
                  </OverlapGroup>
                </Groupe1948>
                <Groupe1949>
                  <OverlapGroup1>
                    <Place>{place}</Place>
                    <CertificatDaptitudeProfessionnelle>
                      {certificatDAptitudeProfessionnelle}
                    </CertificatDaptitudeProfessionnelle>
                  </OverlapGroup1>
                </Groupe1949>
              </OverlapGroup11>
              <GroupContainer>
                <OverlapGroup10>
                  <Bac1Bac2>{bac1Bac2}</Bac1Bac2>
                  <Groupe1952>
                    <OverlapGroup2>
                      <BP1>{bp2}</BP1>
                      <BrevetDeTechnicienSuprieur>{brevetDeTechnicienSuprieur}</BrevetDeTechnicienSuprieur>
                    </OverlapGroup2>
                  </Groupe1952>
                  <Groupe1953>
                    <OverlapGroup3>
                      <DUT>{dut}</DUT>
                      <DiplmeDeTechnicienSuprieur>{diplmeDeTechnicienSuprieur}</DiplmeDeTechnicienSuprieur>
                    </OverlapGroup3>
                  </Groupe1953>
                </OverlapGroup10>
                <Groupe1954>
                  <PrpaContainer>
                    <PRPA>{prpa}</PRPA>
                    <ClassePrparatoire>{classePrparatoire}</ClassePrparatoire>
                  </PrpaContainer>
                </Groupe1954>
              </GroupContainer>
              <GroupContainer1>
                <OverlapGroup9>
                  <Bac1Bac2>{bac3}</Bac1Bac2>
                  <Composant1031 className={composant1031Props.className}>{composant1031Props.children}</Composant1031>
                  <OverlapGroup5>
                    <Rectangle649></Rectangle649>
                    <DCG>{dcg}</DCG>
                    <DiplmeDeComptabilitEtDeGestion>{diplmeDeComptabilitEtDeGestion}</DiplmeDeComptabilitEtDeGestion>
                  </OverlapGroup5>
                </OverlapGroup9>
                <Groupe1957>
                  <Licence>{licence}</Licence>
                </Groupe1957>
              </GroupContainer1>
              <Groupe1958>
                <LicencePro>{licencePro}</LicencePro>
              </Groupe1958>
              <Bac4Bac5>{bac4Bac5}</Bac4Bac5>
              <GroupeContainer>
                <Composant961>{composant961Props.children}</Composant961>
                <Groupe1960>
                  <OverlapGroup6>
                    <DSCG>{dscg}</DSCG>
                    <DiplmeSuprieurDe>{diplmeSuprieurDe}</DiplmeSuprieurDe>
                  </OverlapGroup6>
                </Groupe1960>
                <Groupe1961>
                  <Licence>{master}</Licence>
                </Groupe1961>
              </GroupeContainer>
              <Bac4Bac5>{bac6EtPlus}</Bac4Bac5>
              <GroupeContainer1>
                <Composant961>{composant9612Props.children}</Composant961>
                <Groupe1963>
                  <OverlapGroup7>
                    <MBA>{mba}</MBA>
                    <MasterOfBusinessAdministration>{masterOfBusinessAdministration}</MasterOfBusinessAdministration>
                  </OverlapGroup7>
                </Groupe1963>
              </GroupeContainer1>
              <Bac4Bac5>{autres}</Bac4Bac5>
            </FlexCol1>
            <FlexRow>
              <GroupeContainer2>
                <Groupe1965>
                  <OverlapGroup8>
                    <CQR>{cqr}</CQR>
                    <CertificatsDeQuali>{certificatsDeQuali}</CertificatsDeQuali>
                  </OverlapGroup8>
                </Groupe1965>
                <Groupe1968 />
              </GroupeContainer2>
              <Composant951 className={composant951Props.className}>{composant951Props.children}</Composant951>
              <Groupe1966>
                <FormationQualifiante>{formationQualifiante}</FormationQualifiante>
              </Groupe1966>
            </FlexRow>
          </Groupe1969>
        </Groupe1970>
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
  z-index: 3;
  display: flex;
  align-items: flex-start;
  min-width: 294px;
`;

const OverlapGroup13 = styled.div`
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

const OverlapGroup14 = styled.div`
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

const Groupe1970 = styled.div`
  width: 1136px;
  z-index: 2;
  align-self: center;
  margin-top: 186px;
  margin-left: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1633px;
`;

const OverlapGroup12 = styled.div`
  width: 1098px;
  height: 139px;
  position: relative;
  margin-top: 9px;
`;

const QuelDiplmeSouhaitezVousPrparer = styled.div`
  position: absolute;
  width: 736px;
  height: 98px;
  top: 0;
  left: 182px;
  font-family: var(--font-family-heebo);
  font-weight: 700;
  color: var(--black);
  font-size: 40px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Groupe1969 = styled.div`
  width: 1136px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1415px;
`;

const FlexCol1 = styled.div`
  width: 1136px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1160px;
`;

const OverlapGroup11 = styled.div`
  width: 916px;
  height: 143px;
  position: relative;
  margin-left: 19px;
`;

const CAPOuQuivalent = styled.div`
  ${HeeboBoldBlack30px}
  position: absolute;
  width: 736px;
  height: 98px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 22px;
`;

const Groupe1948 = styled.div`
  ${Border1pxFf5d22}
  position: absolute;
  height: 64px;
  top: 79px;
  left: 182px;
  display: flex;
  padding: 0 68px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const OverlapGroup = styled.div`
  width: 193px;
  height: 62px;
  position: relative;
`;

const BP = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 38px;
  height: 34px;
  top: 0;
  left: 77px;
  letter-spacing: 0;
  line-height: 22px;
`;

const BrevetProfessionnel = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 193px;
  height: 34px;
  top: 28px;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const Groupe1949 = styled.div`
  ${Border1pxFf5d22}
  position: absolute;
  height: 64px;
  top: 79px;
  left: 584px;
  display: flex;
  padding: 0 6px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const OverlapGroup1 = styled.div`
  width: 318px;
  height: 64px;
  position: relative;
  margin-bottom: -2px;
`;

const Place = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 56px;
  height: 34px;
  top: 0;
  left: 132px;
  letter-spacing: 0;
  line-height: 22px;
`;

const CertificatDaptitudeProfessionnelle = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 318px;
  height: 34px;
  top: 30px;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const GroupContainer = styled.div`
  margin-top: 39px;
  display: flex;
  align-items: flex-end;
  min-width: 1136px;
`;

const OverlapGroup10 = styled.div`
  width: 755px;
  height: 138px;
  position: relative;
`;

const Bac1Bac2 = styled.div`
  ${HeeboBoldBlack30px}
  position: absolute;
  width: 736px;
  height: 98px;
  top: 0;
  left: 19px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Groupe1952 = styled.div`
  ${Border1pxFf5d22}
  position: absolute;
  height: 64px;
  top: 74px;
  left: 0;
  display: flex;
  padding: 0 27px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const OverlapGroup2 = styled.div`
  width: 275px;
  height: 62px;
  position: relative;
`;

const BP1 = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 38px;
  height: 34px;
  top: 0;
  left: 118px;
  letter-spacing: 0;
  line-height: 22px;
`;

const BrevetDeTechnicienSuprieur = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 275px;
  height: 34px;
  top: 28px;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const Groupe1953 = styled.div`
  ${Border1pxFf5d22}
  position: absolute;
  height: 64px;
  top: 74px;
  left: 402px;
  display: flex;
  padding: 0 20px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const OverlapGroup3 = styled.div`
  width: 289px;
  height: 62px;
  position: relative;
`;

const DUT = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 56px;
  height: 34px;
  top: 0;
  left: 117px;
  letter-spacing: 0;
  line-height: 22px;
`;

const DiplmeDeTechnicienSuprieur = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 289px;
  height: 34px;
  top: 28px;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const Groupe1954 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-left: 49px;
  display: flex;
  padding: 0 77px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const PrpaContainer = styled.div`
  width: 175px;
  height: 62px;
  position: relative;
`;

const PRPA = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 88px;
  height: 34px;
  top: 0;
  left: 43px;
  letter-spacing: 0;
  line-height: 22px;
`;

const ClassePrparatoire = styled.div`
  ${SegoeuiRegularNormalDoveGray20px}
  position: absolute;
  width: 175px;
  height: 34px;
  top: 28px;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const GroupContainer1 = styled.div`
  margin-top: 74px;
  display: flex;
  align-items: flex-end;
  min-width: 1136px;
`;

const OverlapGroup9 = styled.div`
  width: 755px;
  height: 143px;
  position: relative;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 332px;
  height: 69px;
  top: 74px;
  left: 402px;
`;

const Rectangle649 = styled.div`
  ${Border1pxFf5d22}
  position: absolute;
  width: 332px;
  height: 64px;
  top: 0;
  left: 0;
  background-color: var(--white);
  border-radius: 18px;
`;

const DCG = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 56px;
  height: 34px;
  top: 2px;
  left: 140px;
  letter-spacing: 0;
  line-height: 22px;
`;

const DiplmeDeComptabilitEtDeGestion = styled.p`
  ${SegoeuiRegularNormalDoveGray15px}
  position: absolute;
  width: 261px;
  height: 34px;
  top: 35px;
  left: 38px;
  letter-spacing: 0;
  line-height: 15px;
`;

const Groupe1957 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-left: 49px;
  margin-bottom: 5px;
  display: flex;
  padding: 13.5px 117px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const Licence = styled.div`
  ${HeeboBoldOrange25px}
  width: 97px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Groupe1958 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-top: 8px;
  display: flex;
  padding: 13.5px 96px;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const LicencePro = styled.div`
  ${HeeboBoldOrange25px}
  width: 140px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Bac4Bac5 = styled.div`
  ${HeeboBoldBlack30px}
  width: 736px;
  height: 53px;
  margin-top: 74px;
  margin-left: 19px;
  letter-spacing: 0;
  line-height: 22px;
`;

const GroupeContainer = styled.div`
  position: relative;
  margin-top: 21px;
  display: flex;
  align-items: flex-start;
  min-width: 1136px;
`;

const Groupe1960 = styled.div`
  ${Border1pxFf5d22}
  margin-left: 70px;
  display: flex;
  padding: 0 7px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const OverlapGroup6 = styled.div`
  width: 316px;
  height: 64px;
  position: relative;
  margin-bottom: -2px;
`;

const DSCG = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 72px;
  height: 34px;
  top: 0;
  left: 131px;
  letter-spacing: 0;
  line-height: 22px;
`;

const DiplmeSuprieurDe = styled.p`
  ${SegoeuiRegularNormalDoveGray15px}
  position: absolute;
  width: 316px;
  height: 34px;
  top: 30px;
  left: 0;
  letter-spacing: 0;
  line-height: 15px;
`;

const Groupe1961 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-left: 70px;
  display: flex;
  padding: 13.5px 117px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const GroupeContainer1 = styled.div`
  position: relative;
  margin-top: 21px;
  display: flex;
  align-items: flex-start;
  min-width: 734px;
`;

const Groupe1963 = styled.div`
  ${Border1pxFf5d22}
  margin-left: 70px;
  display: flex;
  padding: 0 47px;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const OverlapGroup7 = styled.div`
  width: 229px;
  height: 64px;
  position: relative;
  margin-bottom: -2px;
`;

const MBA = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 60px;
  height: 34px;
  top: 0;
  left: 84px;
  letter-spacing: 0;
  line-height: 22px;
`;

const MasterOfBusinessAdministration = styled.div`
  ${SegoeuiRegularNormalDoveGray15px}
  position: absolute;
  width: 229px;
  height: 34px;
  top: 30px;
  left: 0;
  letter-spacing: 0;
  line-height: 15px;
`;

const FlexRow = styled.div`
  height: 230px;
  position: relative;
  margin-top: 21px;
  display: flex;
  align-items: flex-start;
  min-width: 1136px;
`;

const GroupeContainer2 = styled.div`
  width: 332px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 230px;
`;

const Groupe1965 = styled.div`
  ${Border1pxFf5d22}
  display: flex;
  padding: 0 23px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const OverlapGroup8 = styled.div`
  width: 283px;
  height: 64px;
  position: relative;
  margin-bottom: -2px;
`;

const CQR = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 72px;
  height: 34px;
  top: 0;
  left: 114px;
  letter-spacing: 0;
  line-height: 22px;
`;

const CertificatsDeQuali = styled.div`
  ${SegoeuiRegularNormalDoveGray15px}
  position: absolute;
  width: 283px;
  height: 34px;
  top: 30px;
  left: 0;
  letter-spacing: 0;
  line-height: 15px;
`;

const Groupe1966 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-left: 70px;
  display: flex;
  padding: 13.5px 39px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;
`;

const FormationQualifiante = styled.div`
  ${HeeboBoldOrange25px}
  width: 253px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default TrouverCole1;
