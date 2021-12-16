import React from "react";
import styled from "styled-components";
import { HeeboBoldWhite14px } from "../../styledMixins";


function Item() {
  return (
    <Item1>
      <InvisibleBase></InvisibleBase>
      <MyTasks>CROUS</MyTasks>
    </Item1>
  );
}

const Item1 = styled.div`
  position: absolute;
  width: 270px;
  height: 150px;
  top: 303px;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const InvisibleBase = styled.div`
  flex: 1;
  max-height: 40.10344696044922px;
`;

const MyTasks = styled.div`
  ${HeeboBoldWhite14px}
  margin-left: 30px;
  width: 48px;
  height: 23px;
  margin-top: 87.9px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Item2 = styled.div`
  position: absolute;
  width: 270px;
  height: 150px;
  top: 303px;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const InvisibleBase1 = styled.div`
  flex: 1;
  max-height: 40.10344696044922px;
`;

const MyTasks1 = styled.div`
  ${HeeboBoldWhite14px}
  margin-left: 30px;
  width: 48px;
  height: 23px;
  margin-top: 87.9px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Item3 = styled.div`
  position: absolute;
  width: 270px;
  height: 150px;
  top: 303px;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const InvisibleBase2 = styled.div`
  flex: 1;
  max-height: 40.10344696044922px;
`;

const MyTasks2 = styled.div`
  ${HeeboBoldWhite14px}
  margin-left: 30px;
  width: 48px;
  height: 23px;
  margin-top: 87.9px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Item;
