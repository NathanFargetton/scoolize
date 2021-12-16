import React from "react";
import Composant1081 from "../Composant1081";
import styled from "styled-components";
import { HeeboBoldOrange25px } from "../../styledMixins";


function Composant1001(props) {
  const { littratures } = props;

  return (
    <Composant10011>
      <OverlapGroup1>
        <Composant1081 />
        <Littratures>{littratures}</Littratures>
      </OverlapGroup1>
    </Composant10011>
  );
}

const Composant10011 = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 332px;
`;

const OverlapGroup1 = styled.div`
  width: 332px;
  height: 64px;
  position: relative;
  border-radius: 18px;
`;

const Littratures = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 141px;
  height: 34px;
  top: 18px;
  left: 97px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default Composant1001;
