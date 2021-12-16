import React from "react";
import { Link } from "react-router-dom";
import Groupe2036 from "../Groupe2036";
import Menu22 from "../Menu22";
import Stats from "../Stats";
import Item32 from "../Item32";
import Item2 from "../Item2";
import Groupe1994 from "../Groupe1994";
import Bouton from "../Bouton";
import Top2 from "../Top2";
import Footer2 from "../Footer2";
import styled from "styled-components";
import {
  MontserratBoldWhite36px,
  MontserratBoldBlack30px,
  Border1pxBlack,
  MontserratBoldBlackcurrant99px,
  HeeboBlackOrange28px,
  HeeboBoldWhite14px,
  MontserratBoldOrange30px,
  HeeboBoldStarDust14px,
  HeeboBoldStarDust12px,
  MontserratBoldWhite48px,
} from "../../styledMixins";
import "./Liste3.css";

function Liste3(props) {
  const {
    souhait,
    rponse,
    classement,
    x1smd7,
    kF2t3,
    trac2009,
    gfny8,
    eB9dV,
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
    colePolytechniquePalaiseau,
    dfavorable,
    enAttente,
    favorable,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    ligne12,
    sorbonneUniversit,
    ufrInformatiqueUniversitDeParis,
    x1828739,
    x4225636,
    x18287392,
    x42256362,
    x18287393,
    x42256363,
    myTasks,
    iconAwesomeGlobe,
    iconAwesomeMoneyBillWave,
    iconAwesomeNewspaper,
    iconAwesomeCompass,
    epsiLyon,
    dfavorable2,
    spanText7,
    spanText8,
    x42256364,
    x18287394,
    menuBase,
    moreIcon,
    userpic,
    productOwner,
    emileeSimchenko,
    myTasks2,
    myTasks3,
    iconAwesomeCompass2,
    myTasks4,
    groupe1997,
    groupe1996,
    groupe1995,
    boutonProps,
    top2Props,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="liste-3 screen">
        <Groupe2030>
          <Groupe2036 />
          <Groupe2028>
            <Souhait>{souhait}</Souhait>
            <Rponse>{rponse}</Rponse>
            <Classement>{classement}</Classement>
          </Groupe2028>
          <Groupe2029>
            <OverlapGroup1>
              <X14>{x1smd7}</X14>
              <X14>{kF2t3}</X14>
            </OverlapGroup1>
            <OverlapGroup>
              <Trac2009 src={trac2009} />
              <X2>{gfny8}</X2>
              <X2>{eB9dV}</X2>
              <Rectangle653></Rectangle653>
              <Rectangle654></Rectangle654>
              <Rectangle655></Rectangle655>
              <Rectangle656></Rectangle656>
              <Rectangle657></Rectangle657>
              <Rectangle658></Rectangle658>
              <Rectangle659></Rectangle659>
              <Rectangle660></Rectangle660>
              <Rectangle661></Rectangle661>
              <Rectangle662></Rectangle662>
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
              <Rectangle667></Rectangle667>
              <Rectangle668></Rectangle668>
              <ColePolytechniquePalaiseau>{colePolytechniquePalaiseau}</ColePolytechniquePalaiseau>
              <Dfavorable>{dfavorable}</Dfavorable>
              <EnAttente>{enAttente}</EnAttente>
              <Favorable>{favorable}</Favorable>
              <Text2>
                <span className="montserrat-bold-orange-30px">{spanText}</span>
                <span className="montserrat-bold-black-30px-2">{spanText2}</span>
              </Text2>
              <Phone>
                <Span08>{spanText3}</Span08>
                <span className="montserrat-bold-black-30px-2">{spanText4}</span>
              </Phone>
              <Text3>
                <span className="montserrat-bold-red-30px">{spanText5}</span>
                <span className="montserrat-bold-black-30px-2">{spanText6}</span>
              </Text3>
              <Ligne12 src={ligne12} />
              <SorbonneUniversit>{sorbonneUniversit}</SorbonneUniversit>
              <UFRInformatiqueUniversitDeParis>{ufrInformatiqueUniversitDeParis}</UFRInformatiqueUniversitDeParis>
              <X1828739 src={x1828739} />
              <X4225636 src={x4225636} />
              <X18287391 src={x18287392} />
              <X42256361 src={x42256362} />
              <Link to="/liste-2">
                <X18287392 src={x18287393} />
              </Link>
              <X42256362 src={x42256363} />
              <MyTasks>{myTasks}</MyTasks>
              <IconAwesomeGlobe src={iconAwesomeGlobe} />
              <IconAwesomeMoneyBillWave src={iconAwesomeMoneyBillWave} />
              <IconAwesomeNewspaper src={iconAwesomeNewspaper} />
              <IconAwesomeCompass src={iconAwesomeCompass} />
              <EPSILyon>{epsiLyon}</EPSILyon>
              <Dfavorable1>{dfavorable2}</Dfavorable1>
              <Text4>
                <span className="montserrat-bold-red-30px">{spanText7}</span>
                <span className="montserrat-bold-black-30px-2">{spanText8}</span>
              </Text4>
              <X42256363 src={x42256364} />
              <X18287393 src={x18287394} />
            </OverlapGroup>
          </Groupe2029>
        </Groupe2030>
        <Navigation>
          <OverlapGroup5>
            <OverlapGroup4>
              <Navigation1>
                <Navigation2>
                  <OverlapGroup3>
                    <MenuBase src={menuBase} />
                    <Menu22 />
                    <Stats />
                    <OverlapGroup2>
                      <Link to="/validation-2">
                        <Base></Base>
                      </Link>
                      <MoreIcon src={moreIcon} />
                      <Userpic src={userpic} />
                      <OverlapGroup6>
                        <ProductOwner>{productOwner}</ProductOwner>
                        <EmileeSimchenko>{emileeSimchenko}</EmileeSimchenko>
                      </OverlapGroup6>
                    </OverlapGroup2>
                    <Item32 />
                    <MyTasks1>{myTasks2}</MyTasks1>
                    <MyTasks2>{myTasks3}</MyTasks2>
                    <Item2 />
                  </OverlapGroup3>
                </Navigation2>
              </Navigation1>
              <IconAwesomeCompass1 src={iconAwesomeCompass2} />
            </OverlapGroup4>
            <Groupe1994 />
            <MyTasks3>{myTasks4}</MyTasks3>
            <Groupe1997 style={{ backgroundImage: `url(${groupe1997})` }}></Groupe1997>
            <Groupe1996 style={{ backgroundImage: `url(${groupe1996})` }}></Groupe1996>
            <Groupe1995 style={{ backgroundImage: `url(${groupe1995})` }}></Groupe1995>
            <Bouton src={boutonProps.src} className={boutonProps.className} />
          </OverlapGroup5>
        </Navigation>
        <Top2
          projectHeader2Props={top2Props.projectHeader2Props}
          projectHeader2Props2={top2Props.projectHeader2Props2}
          filliresProps={top2Props.filliresProps}
          filliresProps2={top2Props.filliresProps2}
          fillires2Props={top2Props.fillires2Props}
          groupe1882Props={top2Props.groupe1882Props}
        />
        <Footer2 {...footer2Props} />
      </div>
    </div>
  );
}

const Groupe2030 = styled.div`
  width: 1920px;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 33px 51px;
  align-items: center;
  min-height: 1728px;
  background-color: var(--east-bay-2);
`;

const Groupe2028 = styled.div`
  height: 58px;
  margin-top: 31px;
  margin-left: 349px;
  display: flex;
  align-items: flex-start;
  min-width: 915px;
`;

const Souhait = styled.div`
  ${MontserratBoldWhite48px}
  min-height: 60px;
  margin-top: -20.5px;
  min-width: 208px;
  text-align: center;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Rponse = styled.div`
  ${MontserratBoldWhite36px}
  min-height: 46px;
  margin-left: 238px;
  margin-top: -24.5px;
  min-width: 166px;
  text-align: center;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Classement = styled.div`
  ${MontserratBoldWhite36px}
  min-height: 46px;
  margin-left: 79px;
  margin-top: -20.5px;
  min-width: 224px;
  text-align: center;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Groupe2029 = styled.div`
  width: 1421px;
  align-self: flex-end;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1190px;
  background-color: var(--east-bay);
  border-radius: 57px;
`;

const OverlapGroup1 = styled.div`
  ${MontserratBoldBlackcurrant99px}
  width: 2px;
  height: 2px;
  position: relative;
  margin-top: -30px;
  margin-right: 279px;
`;

const X14 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  -webkit-text-stroke: 1px var(--black);
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 1365px;
  height: 1131px;
  position: relative;
  margin-top: 48px;
`;

const Trac2009 = styled.img`
  position: absolute;
  width: 114px;
  height: 1060px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const X2 = styled.div`
  ${MontserratBoldBlackcurrant99px}
  position: absolute;
  top: 6px;
  left: 542px;
  -webkit-text-stroke: 1px var(--black);
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Rectangle653 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 0;
  left: 1px;
  background-color: var(--white);
`;

const Rectangle654 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 113px;
  left: 1px;
  background-color: var(--white);
`;

const Rectangle655 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 226px;
  left: 1px;
  background-color: var(--white);
`;

const Rectangle656 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 339px;
  left: 1px;
  background-color: var(--white);
`;

const Rectangle657 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 452px;
  left: 1px;
  background-color: var(--white);
`;

const Rectangle658 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 565px;
  left: 1px;
  background-color: var(--white);
`;

const Rectangle659 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 678px;
  left: 1px;
  background-color: var(--white);
`;

const Rectangle660 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 791px;
  left: 1px;
  background-color: var(--white);
`;

const Rectangle661 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 904px;
  left: 1px;
  background-color: var(--white);
`;

const Rectangle662 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1364px;
  height: 113px;
  top: 1017px;
  left: 1px;
  background-color: var(--white);
`;

const Number = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 42px;
  left: 49px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number1 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 154px;
  left: 49px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number2 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 268px;
  left: 49px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number3 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 380px;
  left: 49px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number4 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 494px;
  left: 49px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number5 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 606px;
  left: 49px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number6 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 720px;
  left: 49px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number7 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 832px;
  left: 49px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number8 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 946px;
  left: 49px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Number9 = styled.div`
  ${HeeboBlackOrange28px}
  position: absolute;
  top: 1062px;
  left: 41px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Rectangle667 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1130px;
  height: 413px;
  top: 359px;
  left: -245px;
  transform: rotate(-90deg);
`;

const Rectangle668 = styled.div`
  ${Border1pxBlack}
  position: absolute;
  width: 1130px;
  height: 448px;
  top: 341px;
  left: 576px;
  transform: rotate(-90deg);
`;

const ColePolytechniquePalaiseau = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 32px;
  left: 157px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Dfavorable = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 3px;
  left: 634px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const EnAttente = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 134px;
  left: 647px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Favorable = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 242px;
  left: 652px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Text2 = styled.div`
  ${MontserratBoldBlack30px}
  position: absolute;
  top: 120px;
  left: 941px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Phone = styled.div`
  ${MontserratBoldBlack30px}
  position: absolute;
  top: 233px;
  left: 937px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Span08 = styled.span`
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: #77d87d;
  font-size: 30px;
`;

const Text3 = styled.div`
  ${MontserratBoldBlack30px}
  position: absolute;
  top: 7px;
  left: 940px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Ligne12 = styled.img`
  position: absolute;
  width: 6px;
  height: 1130px;
  top: 0;
  left: 1094px;
  object-fit: cover;
`;

const SorbonneUniversit = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 242px;
  left: 157px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const UFRInformatiqueUniversitDeParis = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 130px;
  left: 157px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const X1828739 = styled.img`
  position: absolute;
  width: 84px;
  height: 84px;
  top: 11px;
  left: 1268px;
  object-fit: cover;
`;

const X4225636 = styled.img`
  position: absolute;
  width: 99px;
  height: 99px;
  top: 1px;
  left: 1133px;
  object-fit: cover;
`;

const X18287391 = styled.img`
  position: absolute;
  width: 84px;
  height: 84px;
  top: 128px;
  left: 1268px;
  object-fit: cover;
`;

const X42256361 = styled.img`
  position: absolute;
  width: 99px;
  height: 99px;
  top: 118px;
  left: 1133px;
  object-fit: cover;
`;

const X18287392 = styled.img`
  position: absolute;
  width: 84px;
  height: 84px;
  top: 241px;
  left: 1268px;
  object-fit: cover;
  cursor: pointer;
`;

const X42256362 = styled.img`
  position: absolute;
  width: 99px;
  height: 99px;
  top: 235px;
  left: 1133px;
  object-fit: cover;
`;

const MyTasks = styled.div`
  position: absolute;
  top: 496px;
  left: 711px;
  font-family: var(--font-family-heebo);
  font-weight: 700;
  color: var(--white);
  font-size: 11px;
  letter-spacing: 0;
  line-height: 17px;
  white-space: nowrap;
`;

const IconAwesomeGlobe = styled.img`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 495px;
  left: 759px;
  object-fit: cover;
`;

const IconAwesomeMoneyBillWave = styled.img`
  position: absolute;
  width: 28px;
  height: 20px;
  top: 458px;
  left: 756px;
  object-fit: cover;
`;

const IconAwesomeNewspaper = styled.img`
  position: absolute;
  width: 27px;
  height: 18px;
  top: 427px;
  left: 757px;
  object-fit: cover;
`;

const IconAwesomeCompass = styled.img`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 538px;
  left: 759px;
  object-fit: cover;
`;

const EPSILyon = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 376px;
  left: 227px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const Dfavorable1 = styled.div`
  ${MontserratBoldOrange30px}
  position: absolute;
  top: 351px;
  left: 634px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const Text4 = styled.div`
  ${MontserratBoldBlack30px}
  position: absolute;
  top: 351px;
  left: 941px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const X42256363 = styled.img`
  position: absolute;
  width: 99px;
  height: 99px;
  top: 345px;
  left: 1133px;
  object-fit: cover;
`;

const X18287393 = styled.img`
  position: absolute;
  width: 84px;
  height: 84px;
  top: 354px;
  left: 1265px;
  object-fit: cover;
`;

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

const OverlapGroup5 = styled.div`
  width: 294px;
  height: 1080px;
  position: relative;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 272px;
  height: 1080px;
  top: 0;
  left: 0;
`;

const Navigation1 = styled.div`
  position: absolute;
  width: 272px;
  height: 1080px;
  top: 0;
  left: 0;
  display: flex;
`;

const Navigation2 = styled.div`
  margin-top: 1.5px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  min-width: 272px;
`;

const OverlapGroup3 = styled.div`
  width: 272px;
  height: 1079px;
  position: relative;
`;

const MenuBase = styled.img`
  position: absolute;
  width: 270px;
  height: 1079px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 270px;
  height: 80px;
  top: 53px;
  left: 0;
`;

const Base = styled.div`
  position: absolute;
  width: 270px;
  height: 80px;
  top: 0;
  left: 0;
  background-color: var(--eerie-black);
  cursor: pointer;
`;

const MoreIcon = styled.img`
  position: absolute;
  width: 16px;
  height: 4px;
  top: 41px;
  left: 234px;
  object-fit: cover;
`;

const Userpic = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 19px;
  left: 30px;
  border-radius: 24px;
  object-fit: cover;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 80px;
  height: 40px;
  top: 26px;
  left: 93px;
`;

const ProductOwner = styled.div`
  ${HeeboBoldStarDust12px}
  position: absolute;
  top: 20px;
  left: 0;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const EmileeSimchenko = styled.div`
  ${HeeboBoldWhite14px}
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const MyTasks1 = styled.div`
  ${HeeboBoldStarDust14px}
  position: absolute;
  top: 353px;
  left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const MyTasks2 = styled.div`
  ${HeeboBoldWhite14px}
  position: absolute;
  top: 467px;
  left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const IconAwesomeCompass1 = styled.img`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 550px;
  left: 218px;
  object-fit: cover;
`;

const MyTasks3 = styled.div`
  ${HeeboBoldWhite14px}
  position: absolute;
  top: 508px;
  left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Groupe1997 = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 507px;
  left: 218px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1996 = styled.div`
  position: absolute;
  width: 28px;
  height: 20px;
  top: 470px;
  left: 215px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1995 = styled.div`
  position: absolute;
  width: 27px;
  height: 18px;
  top: 439px;
  left: 216px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default Liste3;
