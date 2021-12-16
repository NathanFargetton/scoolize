import React from "react";
import Count from "../Count";
import styled from "styled-components";
import { HeeboBoldSuvaGray12px, HeeboBoldWhite14px, Border1pxDoveGray } from "../../styledMixins";


function Menu(props) {
  const { countProps } = props;

  return (
    <Menu1>
      <Menu2>MENU</Menu2>
      <Item></Item>
      <Item1>
        <OverlapGroup>
          <InvisibleBase></InvisibleBase>
          <Notifications>Notifications</Notifications>
        </OverlapGroup>
        <Count className={countProps.className} />
      </Item1>
    </Menu1>
  );
}

const Menu1 = styled.div`
  position: absolute;
  width: 270px;
  top: 250px;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 138px;
`;

const Menu2 = styled.div`
  ${HeeboBoldSuvaGray12px}
  min-height: 20px;
  margin-left: 28px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Item = styled.div`
  ${Border1pxDoveGray}
  width: 2px;
  height: 1px;
  align-self: center;
  margin-top: 33px;
  margin-right: 130px;
  background-color: var(--white);
  border-radius: 1px/0.5px;
`;

const Item1 = styled.div`
  width: 270px;
  height: 61px;
  position: relative;
  margin-top: 23px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 270px;
  height: 62px;
  top: 0;
  left: 0;
`;

const InvisibleBase = styled.div`
  position: absolute;
  width: 270px;
  height: 40px;
  top: 22px;
  left: 0;
`;

const Notifications = styled.div`
  ${HeeboBoldWhite14px}
  position: absolute;
  top: 0;
  left: 27px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Menu3 = styled.div`
  position: absolute;
  width: 270px;
  top: 250px;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 138px;
`;

const Menu4 = styled.div`
  ${HeeboBoldSuvaGray12px}
  min-height: 20px;
  margin-left: 28px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Item2 = styled.div`
  ${Border1pxDoveGray}
  width: 2px;
  height: 1px;
  align-self: center;
  margin-top: 33px;
  margin-right: 130px;
  background-color: var(--white);
  border-radius: 1px/0.5px;
`;

const Item3 = styled.div`
  width: 270px;
  height: 61px;
  position: relative;
  margin-top: 23px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 270px;
  height: 62px;
  top: 0;
  left: 0;
`;

const InvisibleBase1 = styled.div`
  position: absolute;
  width: 270px;
  height: 40px;
  top: 22px;
  left: 0;
`;

const Notifications1 = styled.div`
  ${HeeboBoldWhite14px}
  position: absolute;
  top: 0;
  left: 27px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Menu5 = styled.div`
  position: absolute;
  width: 270px;
  top: 250px;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 138px;
`;

const Menu6 = styled.div`
  ${HeeboBoldSuvaGray12px}
  min-height: 20px;
  margin-left: 28px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Item4 = styled.div`
  ${Border1pxDoveGray}
  width: 2px;
  height: 1px;
  align-self: center;
  margin-top: 33px;
  margin-right: 130px;
  background-color: var(--white);
  border-radius: 1px/0.5px;
`;

const Item5 = styled.div`
  width: 270px;
  height: 61px;
  position: relative;
  margin-top: 23px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 270px;
  height: 62px;
  top: 0;
  left: 0;
`;

const InvisibleBase2 = styled.div`
  position: absolute;
  width: 270px;
  height: 40px;
  top: 22px;
  left: 0;
`;

const Notifications2 = styled.div`
  ${HeeboBoldWhite14px}
  position: absolute;
  top: 0;
  left: 27px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Menu;
