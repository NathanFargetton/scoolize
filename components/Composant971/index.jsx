import React from "react";
import Composant1081 from "../Composant1081";
import styled from "styled-components";
import { HeeboBoldOrange25px } from "../../styledMixins";


function Composant971(props) {
  const { humanits } = props;

  return (
    <Composant9711>
      <OverlapGroup>
        <Composant1081 />
        <Humanits>{humanits}</Humanits>
      </OverlapGroup>
    </Composant9711>
  );
}

const Composant9711 = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 332px;
`;

const OverlapGroup = styled.div`
  width: 332px;
  height: 64px;
  position: relative;
  border-radius: 18px;
`;

const Humanits = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 125px;
  height: 34px;
  top: 18px;
  left: 102px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default Composant971;
