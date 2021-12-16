import React from "react";
import ProjectHeader from "../ProjectHeader";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Mtiers from "../Mtiers";
import Formation from "../Formation";
import Groupe1882 from "../Groupe1882";
import Menu22 from "../Menu22";
import Stats from "../Stats";
import UserInfo from "../UserInfo";
import Item32 from "../Item32";
import Item2 from "../Item2";
import Groupe1994 from "../Groupe1994";
import styled from "styled-components";
import {
  HeeboBoldWhite14px,
  Border1pxDoveGray,
  MontserratBoldOrange60px,
  HeeboBoldStarDust14px,
  MontserratBoldOrange41px,
} from "../../styledMixins";
import "./Web192010.css";

function Web192010(props) {
  const {
    x12,
    myTasks,
    myTasks2,
    iconAwesomeCompass,
    myTasks3,
    groupe1997,
    groupe1996,
    groupe1995,
    image8,
    sorbonneUniversit,
    text1,
    iconAwesomePen,
    projectHeaderProps,
    filliresProps,
    groupe1882Props,
    userInfoProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="web-1920-10 screen">
        <Top>
          <OverlapGroup1>
            <ProjectHeader
              className={projectHeaderProps.className}
              projectHeader2Props={projectHeaderProps.projectHeader2Props}
            />
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
          </OverlapGroup1>
        </Top>
        <Groupe1998>
          <OverlapGroup4>
            <OverlapGroup3>
              <Navigation>
                <Navigation1>
                  <OverlapGroup2>
                    <MenuBase></MenuBase>
                    <Menu22 />
                    <Stats />
                    <UserInfo userpic={userInfoProps.userpic} nameProps={userInfoProps.nameProps} />
                    <Item32 />
                    <MyTasks>{myTasks}</MyTasks>
                    <MyTasks1>{myTasks2}</MyTasks1>
                    <Item2 />
                  </OverlapGroup2>
                </Navigation1>
              </Navigation>
              <IconAwesomeCompass src={iconAwesomeCompass} />
            </OverlapGroup3>
            <Groupe1994 />
            <MyTasks2>{myTasks3}</MyTasks2>
            <Groupe1997 style={{ backgroundImage: `url(${groupe1997})` }}></Groupe1997>
            <Groupe1996 style={{ backgroundImage: `url(${groupe1996})` }}></Groupe1996>
            <Groupe1995 style={{ backgroundImage: `url(${groupe1995})` }}></Groupe1995>
          </OverlapGroup4>
        </Groupe1998>
        <Image8 src={image8} />
        <SorbonneUniversit>{sorbonneUniversit}</SorbonneUniversit>
        <OverlapGroup5>
          <Text1>{text1}</Text1>
          <IconAwesomePen src={iconAwesomePen} />
        </OverlapGroup5>
      </div>
    </div>
  );
}

const Top = styled.div`
  position: fixed;
  height: 136px;
  top: 0;
  left: 270px;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  min-width: 1650px;
`;

const OverlapGroup1 = styled.div`
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

const Groupe1998 = styled.div`
  position: fixed;
  height: 1080px;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: flex-start;
  min-width: 272px;
`;

const OverlapGroup4 = styled.div`
  width: 272px;
  height: 1080px;
  position: relative;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 272px;
  height: 1080px;
  top: 0;
  left: 0;
`;

const Navigation = styled.div`
  position: absolute;
  width: 272px;
  height: 1080px;
  top: 0;
  left: 0;
  display: flex;
`;

const Navigation1 = styled.div`
  margin-top: 1.5px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  min-width: 272px;
`;

const OverlapGroup2 = styled.div`
  width: 272px;
  height: 1079px;
  position: relative;
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

const Image8 = styled.img`
  width: 382px;
  height: 153px;
  z-index: 4;
  align-self: center;
  margin-top: 356px;
  margin-right: 598px;
  object-fit: cover;
`;

const SorbonneUniversit = styled.div`
  ${MontserratBoldOrange60px}
  z-index: 3;
  min-height: 75px;
  margin-top: 52px;
  margin-right: 150px;
  min-width: 1300px;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const OverlapGroup5 = styled.div`
  ${Border1pxDoveGray}
  height: 427px;
  z-index: 1;
  margin-top: 16px;
  margin-right: 40px;
  display: flex;
  padding: 6.5px 7px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1415px;
  background-color: var(--white);
`;

const Text1 = styled.div`
  ${MontserratBoldOrange41px}
  min-height: 52px;
  min-width: 34px;
  letter-spacing: 0;
  line-height: 41px;
  white-space: nowrap;
`;

const IconAwesomePen = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 2px;
  margin-top: 9.89px;
  object-fit: cover;
`;

export default Web192010;
