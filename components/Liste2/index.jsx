import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";
import Stats from "../Stats";
import Name from "../Name";
import Item from "../Item";
import Item2 from "../Item2";
import Groupe1994 from "../Groupe1994";
import Bouton from "../Bouton";
import Top2 from "../Top2";
import Groupe2036 from "../Groupe2036";
import Footer2 from "../Footer2";
import styled from "styled-components";
import { HeeboBoldStarDust14px, MontserratBoldOrange76px, HeeboBoldWhite14px } from "../../styledMixins";
import "./Liste2.css";

function Liste2(props) {
  const {
    userpic,
    moreIcon,
    myTasks,
    myTasks2,
    iconAwesomeCompass,
    myTasks3,
    groupe1997,
    groupe1996,
    groupe1995,
    vousAvezTRetenuPour,
    sorbonneUniversit,
    image8,
    voir,
    annuler,
    menuProps,
    nameProps,
    boutonProps,
    top2Props,
    groupe2036Props,
    footer2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="liste-2 screen">
        <Navigation>
          <OverlapGroup5>
            <OverlapGroup4>
              <OverlapGroup4>
                <NavigationBackground></NavigationBackground>
                <OverlapGroup2>
                  <MenuBase></MenuBase>
                  <Menu countProps={menuProps.countProps} />
                  <Stats />
                  <Link to="/validation-2">
                    <UserInfo>
                      <Userpic src={userpic} />
                      <Name productOwner={nameProps.productOwner} emileeSimchenko={nameProps.emileeSimchenko} />
                      <MoreIcon src={moreIcon} />
                    </UserInfo>
                  </Link>
                  <Item />
                  <MyTasks>{myTasks}</MyTasks>
                  <MyTasks1>{myTasks2}</MyTasks1>
                  <Item2 />
                </OverlapGroup2>
              </OverlapGroup4>
              <IconAwesomeCompass src={iconAwesomeCompass} />
            </OverlapGroup4>
            <Groupe1994 />
            <MyTasks2>{myTasks3}</MyTasks2>
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
        <Groupe2038>
          <Groupe2036 className={groupe2036Props.className} />
          <Groupe2037>
            <VousAvezTRetenuPour>{vousAvezTRetenuPour}</VousAvezTRetenuPour>
            <SorbonneUniversit>{sorbonneUniversit}</SorbonneUniversit>
            <Image8 src={image8} />
            <Groupe2032>
              <OverlapGroup1>
                <Rectangle669></Rectangle669>
                <Voir>{voir}</Voir>
              </OverlapGroup1>
            </Groupe2032>
            <Groupe2031>
              <OverlapGroup>
                <Rectangle6691></Rectangle6691>
                <Annuler>{annuler}</Annuler>
              </OverlapGroup>
            </Groupe2031>
          </Groupe2037>
        </Groupe2038>
        <Footer2 {...footer2Props} />
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
  min-width: 283px;
`;

const OverlapGroup5 = styled.div`
  width: 283px;
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

const NavigationBackground = styled.div`
  position: absolute;
  width: 270px;
  height: 1079px;
  top: 0;
  left: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 272px;
  height: 1079px;
  top: 2px;
  left: 0;
`;

const MenuBase = styled.div`
  position: absolute;
  width: 270px;
  height: 1079px;
  top: 0;
  left: 0;
  background-color: var(--east-bay);
`;

const UserInfo = styled.div`
  position: absolute;
  height: 80px;
  top: 53px;
  left: 0;
  display: flex;
  padding: 13px 20px;
  justify-content: flex-end;
  align-items: center;
  min-width: 270px;
  background-color: var(--eerie-black);
  cursor: pointer;
`;

const Userpic = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-end;
  border-radius: 24px;
  object-fit: cover;
`;

const MoreIcon = styled.img`
  width: 16px;
  height: 4px;
  margin-left: 61px;
  margin-top: 6px;
  object-fit: cover;
`;

const MyTasks = styled.div`
  ${HeeboBoldStarDust14px}
  position: absolute;
  top: 353px;
  left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const MyTasks1 = styled.div`
  ${HeeboBoldWhite14px}
  position: absolute;
  top: 467px;
  left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const IconAwesomeCompass = styled.img`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 550px;
  left: 229px;
  object-fit: cover;
`;

const MyTasks2 = styled.div`
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
  left: 229px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1996 = styled.div`
  position: absolute;
  width: 28px;
  height: 20px;
  top: 470px;
  left: 226px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1995 = styled.div`
  position: absolute;
  width: 27px;
  height: 18px;
  top: 439px;
  left: 227px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe2038 = styled.div`
  width: 1654px;
  z-index: 2;
  position: relative;
  margin-top: 136px;
  display: flex;
  flex-direction: column;
  padding: 81px 148px;
  align-items: flex-end;
  min-height: 2116px;
  background-color: var(--east-bay-2);
`;

const Groupe2037 = styled.div`
  ${MontserratBoldOrange76px}
  width: 1265px;
  margin-top: 61px;
  display: flex;
  flex-direction: column;
  padding: 154.5px 99px;
  align-items: center;
  min-height: 1712px;
  background-color: var(--east-bay);
  border-radius: 57px;
`;

const VousAvezTRetenuPour = styled.h1`
  margin-bottom: -5px;
  min-height: 95px;
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 100px;
  white-space: nowrap;
`;

const SorbonneUniversit = styled.div`
  min-height: 195px;
  margin-top: 59px;
  margin-left: 18px;
  min-width: 813px;
  letter-spacing: 0;
  line-height: 100px;
  white-space: nowrap;
`;

const Image8 = styled.img`
  width: 737px;
  height: 296px;
  margin-top: 204px;
  margin-right: 12px;
  object-fit: cover;
`;

const Groupe2032 = styled.div`
  margin-top: 10px;
  margin-right: 12.33px;
  display: flex;
  align-items: flex-end;
  min-width: 93px;
`;

const OverlapGroup1 = styled.div`
  width: 93px;
  height: 44px;
  position: relative;
  margin-bottom: 0;
`;

const Rectangle669 = styled.div`
  position: absolute;
  width: 44px;
  height: 93px;
  top: -25px;
  left: 25px;
  background-color: var(--mandarin-pearl);
  border-radius: 85px;
  transform: rotate(-90deg);
`;

const Voir = styled.div`
  position: absolute;
  top: 7px;
  left: 32px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxxs);
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Groupe2031 = styled.div`
  margin-top: 134px;
  margin-right: 12.35px;
  display: flex;
  align-items: flex-end;
  min-width: 290px;
`;

const OverlapGroup = styled.div`
  width: 290px;
  height: 135px;
  position: relative;
  margin-bottom: 0;
`;

const Rectangle6691 = styled.div`
  position: absolute;
  width: 135px;
  height: 290px;
  top: -77px;
  left: 77px;
  background-color: var(--mandarin-pearl);
  border-radius: 85px;
  transform: rotate(-90deg);
`;

const Annuler = styled.div`
  position: absolute;
  top: 19px;
  left: 48px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--white);
  font-size: 46px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

export default Liste2;
