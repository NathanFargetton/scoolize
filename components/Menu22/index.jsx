import React from "react";
import Count from "../Count";
import styled from "styled-components";
import { HeeboBoldSuvaGray12px, HeeboBoldWhite14px, Border1pxDoveGray } from "../../styledMixins";


function Menu22() {
  return (
    <Menu>
      <Menu1>MENU</Menu1>
      <Item></Item>
      <Item1>
        <Notifications>Notifications</Notifications>
        <Count />
      </Item1>
    </Menu>
  );
}

const Menu = styled.div`
  position: absolute;
  width: 270px;
  top: 250px;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 138px;
`;

const Menu1 = styled.div`
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
  height: 61px;
  position: relative;
  margin-top: 23px;
  display: flex;
  padding: 0 27px;
  align-items: flex-start;
  min-width: 270px;
`;

const Notifications = styled.div`
  ${HeeboBoldWhite14px}
  min-height: 23px;
  margin-top: -0.5px;
  min-width: 83px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Menu2 = styled.div`
  position: absolute;
  width: 270px;
  top: 250px;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 138px;
`;

const Menu3 = styled.div`
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
  height: 61px;
  position: relative;
  margin-top: 23px;
  display: flex;
  padding: 0 27px;
  align-items: flex-start;
  min-width: 270px;
`;

const Notifications1 = styled.div`
  ${HeeboBoldWhite14px}
  min-height: 23px;
  margin-top: -0.5px;
  min-width: 83px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Menu4 = styled.div`
  position: absolute;
  width: 270px;
  top: 250px;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 138px;
`;

const Menu5 = styled.div`
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
  height: 61px;
  position: relative;
  margin-top: 23px;
  display: flex;
  padding: 0 27px;
  align-items: flex-start;
  min-width: 270px;
`;

const Notifications2 = styled.div`
  ${HeeboBoldWhite14px}
  min-height: 23px;
  margin-top: -0.5px;
  min-width: 83px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Menu22;
