import React from "react";
import Menu from "../Menu";
import Stats from "../Stats";
import UserInfo from "../UserInfo";
import Item from "../Item";
import Item2 from "../Item2";
import Groupe1994 from "../Groupe1994";
import Bouton from "../Bouton";
import styled from "styled-components";
import { HeeboBoldStarDust14px, HeeboBoldWhite14px } from "../../styledMixins";


function Navigation(props) {
  const { userInfoProps, userInfoProps2, boutonProps } = props;

  return (
    <Navigation1>
      <OverlapGroup9>
        <OverlapGroup4>
          <OverlapGroup4>
            <NavigationBackground></NavigationBackground>
            <OverlapGroup2>
              <MenuBase></MenuBase>
              <Menu countProps={userInfoProps.countProps} />
              <Stats />
              <UserInfo userpic={userInfoProps2.userpic} nameProps={userInfoProps2.nameProps} />
              <Item />
              <MyTasks>Mes voeux</MyTasks>
              <MyTasks1>Éligibilité bourse étudiante</MyTasks1>
              <Item2 />
            </OverlapGroup2>
          </OverlapGroup4>
          <IconAwesomeCompass src="/img/icon-awesome-compass-1@1x.png" />
        </OverlapGroup4>
        <Groupe1994 />
        <MyTasks2>Langue</MyTasks2>
        <Groupe1997></Groupe1997>
        <Groupe1996></Groupe1996>
        <Groupe1995></Groupe1995>
        <Bouton src={boutonProps.src} className={boutonProps.className} />
      </OverlapGroup9>
    </Navigation1>
  );
}

const Navigation1 = styled.div`
  position: fixed;
  height: 1080px;
  top: 0;
  left: 0;
  z-index: 4;
  display: flex;
  align-items: flex-start;
  min-width: 283px;
`;

const OverlapGroup9 = styled.div`
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
  background-image: url(/img/icon-awesome-globe-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1996 = styled.div`
  position: absolute;
  width: 28px;
  height: 20px;
  top: 470px;
  left: 226px;
  background-image: url(/img/icon-awesome-money-bill-wave-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Groupe1995 = styled.div`
  position: absolute;
  width: 27px;
  height: 18px;
  top: 439px;
  left: 227px;
  background-image: url(/img/icon-awesome-newspaper-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

export default Navigation;
