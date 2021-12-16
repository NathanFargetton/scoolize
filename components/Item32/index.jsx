import React from "react";
import styled from "styled-components";
import { HeeboBoldWhite14px } from "../../styledMixins";


function Item32() {
  return (
    <Item>
      <MyTasks>CROUS</MyTasks>
    </Item>
  );
}

const Item = styled.div`
  position: absolute;
  width: 270px;
  height: 150px;
  top: 303px;
  left: 0;
  display: flex;
`;

const MyTasks = styled.div`
  ${HeeboBoldWhite14px}
  margin-top: 128.1px;
  width: 48px;
  height: 23px;
  margin-left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Item1 = styled.div`
  position: absolute;
  width: 270px;
  height: 150px;
  top: 303px;
  left: 0;
  display: flex;
`;

const MyTasks1 = styled.div`
  ${HeeboBoldWhite14px}
  margin-top: 128.1px;
  width: 48px;
  height: 23px;
  margin-left: 30px;
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
`;

const MyTasks2 = styled.div`
  ${HeeboBoldWhite14px}
  margin-top: 128.1px;
  width: 48px;
  height: 23px;
  margin-left: 30px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Item32;
