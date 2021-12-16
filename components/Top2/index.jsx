import React from "react";
import ProjectHeader from "../ProjectHeader";
import Diplme from "../Diplme";
import Coles from "../Coles";
import Fillires from "../Fillires";
import Formation from "../Formation";
import Filtre from "../Filtre";
import Groupe1882 from "../Groupe1882";
import styled from "styled-components";


function Top2(props) {
  const {
    projectHeader2Props,
    projectHeader2Props2,
    filliresProps,
    filliresProps2,
    fillires2Props,
    groupe1882Props,
  } = props;

  return (
    <Top>
      <OverlapGroup6>
        <ProjectHeader
          className={projectHeader2Props.className}
          projectHeader2Props={projectHeader2Props.projectHeader2Props}
        />
        <Tabs>
          <FlexCol>
            <X12 src="/img/12-10@1x.png" />
            <Diplme className={projectHeader2Props2.className} />
          </FlexCol>
          <Coles className={filliresProps.className} />
          <Fillires className={filliresProps2.className}>{filliresProps2.children}</Fillires>
          <Fillires className={fillires2Props.className}>{fillires2Props.children}</Fillires>
          <Formation />
          <Filtre />
        </Tabs>
        <Groupe1882 className={groupe1882Props.className} />
      </OverlapGroup6>
    </Top>
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

const OverlapGroup6 = styled.div`
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
  min-width: 422px;
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

const Top1 = styled.div`
  position: fixed;
  height: 136px;
  top: 0;
  left: 270px;
  z-index: 4;
  display: flex;
  align-items: flex-start;
  min-width: 1650px;
`;

const OverlapGroup61 = styled.div`
  width: 1650px;
  height: 136px;
  position: relative;
`;

const Tabs1 = styled.div`
  position: absolute;
  height: 92px;
  top: 34px;
  left: 34px;
  display: flex;
  align-items: flex-end;
  min-width: 422px;
`;

const FlexCol1 = styled.div`
  width: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 92px;
`;

const X121 = styled.img`
  width: 47px;
  height: 47px;
  object-fit: cover;
`;

export default Top2;
