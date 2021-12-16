import React from "react";
import { Link } from "react-router-dom";
import ProjectHeader5 from "../ProjectHeader5";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import styled from "styled-components";
import {
  MontserratBoldWhite36px,
  MontserratBoldBlack30px,
  Border1pxBlack,
  MontserratBoldWhite75px,
  HeeboBlackOrange28px,
  Border1pxDoveGray,
  MontserratBoldOrange30px,
  MontserratBoldBlackcurrant99px,
  MontserratBoldWhite48px,
} from "../../styledMixins";
import "./Liste1.css";

function Liste1(props) {
  const {
    trac1993,
    bzzus,
    teXV5,
    number,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
    number10,
    number11,
    number12,
    number13,
    number14,
    rponse,
    colePolytechniquePalaiseau,
    dfavorable,
    enAttente,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    ligne10,
    ufrInformatiqueUniversitDeParis,
    x1828739,
    x4225636,
    x18287392,
    x42256362,
    x12,
    listeDesVoeux,
    aprtI,
    gk3o2,
    souhait,
    classement,
    projectHeader5Props,
    diplmeProps,
    colesProps,
    filliresProps,
    fillires2Props,
    groupe1882Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="liste-1 screen">
        <OverlapGroup2>
          <OverlapGroup3>
            <Rectangle634></Rectangle634>
            <Trac1993 src={trac1993} />
            <X32>{bzzus}</X32>
            <X32>{teXV5}</X32>
            <Rectangle613></Rectangle613>
            <Rectangle614></Rectangle614>
            <Rectangle615></Rectangle615>
            <Rectangle616></Rectangle616>
            <Rectangle617></Rectangle617>
            <Rectangle618></Rectangle618>
            <Rectangle619></Rectangle619>
            <Rectangle620></Rectangle620>
            <Rectangle621></Rectangle621>
            <Rectangle622></Rectangle622>
            <Rectangle623></Rectangle623>
            <Rectangle624></Rectangle624>
            <Rectangle625></Rectangle625>
            <Number>{number}</Number>
            <Number1>{number2}</Number1>
            <Number2>{number3}</Number2>
            <Number3>{number4}</Number3>
            <Number4>{number5}</Number4>
            <Number5>{number6}</Number5>
            <Number6>{number7}</Number6>
            <Number7>{number8}</Number7>
            <Number8>{number9}</Number8>
            <Number9>{number10}</Number9>
            <Number10>{number11}</Number10>
            <Number11>{number12}</Number11>
            <Number12>{number13}</Number12>
            <Rectangle627></Rectangle627>
            <Number13>{number14}</Number13>
            <Rectangle629></Rectangle629>
            <Rectangle630></Rectangle630>
            <Rectangle631></Rectangle631>
            <Rponse>{rponse}</Rponse>
            <ColePolytechniquePalaiseau>{colePolytechniquePalaiseau}</ColePolytechniquePalaiseau>
            <Dfavorable>{dfavorable}</Dfavorable>
            <EnAttente>{enAttente}</EnAttente>
            <Text5>
              <span className="montserrat-bold-orange-30px">{spanText}</span>
              <span className="montserrat-bold-black-30px-2">{spanText2}</span>
            </Text5>
            <Text6>
              <span className="montserrat-bold-red-30px">{spanText3}</span>
              <span className="montserrat-bold-black-30px-2">{spanText4}</span>
            </Text6>
            <Ligne10 src={ligne10} />
            <UFRInformatiqueUniversitDeParis>{ufrInformatiqueUniversitDeParis}</UFRInformatiqueUniversitDeParis>
            <X1828739 src={x1828739} />
            <X4225636 src={x4225636} />
            <X18287391 src={x18287392} />
            <X42256361 src={x42256362} />
            <Groupe1950></Groupe1950>
            <Groupe1951>
              <Link to="/page-d-accueil">
                <Top>
                  <OverlapGroup1>
                    <ProjectHeader5
                      websiteRedesign={projectHeader5Props.websiteRedesign}
                      iconProps={projectHeader5Props.iconProps}
                      moreProps={projectHeader5Props.moreProps}
                    />
                    <Tabs>
                      <FlexCol>
                        <Link to="/page-d-accueil">
                          <X12 src={x12} />
                        </Link>
                        <Diplme className={diplmeProps.className} />
                      </FlexCol>
                      <Coles className={colesProps.className} />
                      <Fillires className={filliresProps.className}>{filliresProps.children}</Fillires>
                      <Fillires className={fillires2Props.className}>{fillires2Props.children}</Fillires>
                      <Formation />
                    </Tabs>
                  </OverlapGroup1>
                  <Groupe1882 className={groupe1882Props.className} />
                </Top>
              </Link>
            </Groupe1951>
            <Rectangle633></Rectangle633>
            <ListeDesVoeux>{listeDesVoeux}</ListeDesVoeux>
          </OverlapGroup3>
          <OverlapGroup4>
            <X181>{aprtI}</X181>
            <X181>{gk3o2}</X181>
          </OverlapGroup4>
          <Souhait>{souhait}</Souhait>
          <Classement>{classement}</Classement>
        </OverlapGroup2>
      </div>
    </div>
  );
}

const OverlapGroup2 = styled.div`
  width: 1920px;
  height: 2252px;
  position: relative;
  background-color: var(--east-bay-2);
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 2151px;
  height: 2764px;
  top: -58px;
  left: -231px;
`;

const Rectangle634 = styled.div`
  position: absolute;
  width: 1689px;
  height: 1712px;
  top: 561px;
  left: 346px;
  background-color: var(--east-bay);
  border-radius: 57px;
`;

const Trac1993 = styled.img`
  position: absolute;
  width: 114px;
  height: 1582px;
  top: 581px;
  left: 374px;
  object-fit: cover;
`;

const X32 = styled.div`
  ${MontserratBoldBlackcurrant99px}
  position: absolute;
  top: 587px;
  left: 1023px;
  -webkit-text-stroke: 1px var(--black);
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Rectangle613 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 581px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle614 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 694px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle615 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 807px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle616 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 920px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle617 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 1033px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle618 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 1146px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle619 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 1259px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle620 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 1372px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle621 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 1485px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle622 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 1598px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle623 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 1711px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle624 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 1824px;
  left: 375px;
  background-color: var(--white);
`;

const Rectangle625 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 1937px;
  left: 375px;
  background-color: var(--white);
`;

const Number = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 622px;
  left: 423px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number1 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 735px;
  left: 423px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number2 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 848px;
  left: 423px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number3 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 961px;
  left: 423px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number4 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1074px;
  left: 423px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number5 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1187px;
  left: 423px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number6 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1300px;
  left: 423px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number7 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1413px;
  left: 423px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number8 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1526px;
  left: 423px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number9 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1643px;
  left: 415px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number10 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1756px;
  left: 415px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number11 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1869px;
  left: 415px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number12 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1982px;
  left: 415px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Rectangle627 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1632px;
  height: 113px;
  top: 2050px;
  left: 375px;
  background-color: var(--white);
`;

const Number13 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 2095px;
  left: 415px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Rectangle629 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1582px;
  height: 606px;
  top: 1069px;
  left: 0;
  transform: rotate(-90deg);
`;

const Rectangle630 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1582px;
  height: 535px;
  top: 1104px;
  left: 949px;
  transform: rotate(-90deg);
`;

const Rectangle631 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1582px;
  height: 378px;
  top: 1182px;
  left: 492px;
  transform: rotate(-90deg);
`;

const Rponse = styled.div`
  ${MontserratBoldWhite36px}
  position: absolute;
  top: 482px;
  left: 1201px;
  text-align: center;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const ColePolytechniquePalaiseau = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 612px;
  left: 531px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Dfavorable = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 586px;
  left: 1181px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const EnAttente = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 701px;
  left: 1201px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Text5 = styled.div`
  ${MontserratBoldBlack30px}
  position: absolute;
  top: 701px;
  left: 1515px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Text6 = styled.div`
  ${MontserratBoldBlack30px}
  position: absolute;
  top: 588px;
  left: 1514px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Ligne10 = styled.img`
  position: absolute;
  width: 5px;
  height: 1582px;
  top: 581px;
  left: 1683px;
  object-fit: cover;
`;

const UFRInformatiqueUniversitDeParis = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 710px;
  left: 531px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const X1828739 = styled.img`
  position: absolute;
  width: 84px;
  height: 84px;
  top: 597px;
  left: 1856px;
  object-fit: cover;
`;

const X4225636 = styled.img`
  position: absolute;
  width: 99px;
  height: 99px;
  top: 589px;
  left: 1725px;
  object-fit: cover;
`;

const X18287391 = styled.img`
  position: absolute;
  width: 84px;
  height: 84px;
  top: 709px;
  left: 1856px;
  object-fit: cover;
`;

const X42256361 = styled.img`
  position: absolute;
  width: 99px;
  height: 99px;
  top: 701px;
  left: 1725px;
  object-fit: cover;
`;

const Groupe1950 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 1920px;
  height: 154px;
  top: 58px;
  left: 231px;
  background-color: var(--white);
`;

const Groupe1951 = styled.div`
  position: absolute;
  width: 1822px;
  height: 93px;
  top: 90px;
  left: 294px;
  display: flex;
`;

const Top = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 1822.146240234375px;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 363px;
  height: 93px;
  position: relative;
`;

const Tabs = styled.div`
  position: absolute;
  height: 92px;
  top: 1px;
  left: 1px;
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
  cursor: pointer;
`;

const Rectangle633 = styled.div`
  position: absolute;
  width: 170px;
  height: 725px;
  top: 0;
  left: 1106px;
  background-color: var(--mandarin-pearl);
  border-radius: 85px;
  transform: rotate(-90deg);
`;

const ListeDesVoeux = styled.div`
  ${MontserratBoldWhite75px}
  position: absolute;
  top: 313px;
  left: 889px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  ${MontserratBoldBlackcurrant99px}
  position: absolute;
  width: 2px;
  height: 2px;
  top: 474px;
  left: 792px;
`;

const X181 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  -webkit-text-stroke: 1px var(--black);
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Souhait = styled.div`
  ${MontserratBoldWhite48px}
  position: absolute;
  top: 426px;
  left: 396px;
  text-align: center;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Classement = styled.div`
  ${MontserratBoldWhite36px}
  position: absolute;
  top: 424px;
  left: 1235px;
  text-align: center;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

export default Liste1;
