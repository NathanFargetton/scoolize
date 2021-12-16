import React from "react";
import Composant1081 from "../Composant1081";
import styled from "styled-components";
import { HeeboBoldOrange25px } from "../../styledMixins";


function Composant1061(props) {
  const { sciencesDeLIngnieur } = props;

  return (
    <Composant10611>
      <OverlapGroup2>
        <Composant1081 />
        <SciencesDeLingnieur>{sciencesDeLIngnieur}</SciencesDeLingnieur>
      </OverlapGroup2>
    </Composant10611>
  );
}

const Composant10611 = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 332px;
`;

const OverlapGroup2 = styled.div`
  width: 332px;
  height: 64px;
  position: relative;
  border-radius: 18px;
`;

const SciencesDeLingnieur = styled.div`
  ${HeeboBoldOrange25px}
  position: absolute;
  width: 266px;
  height: 34px;
  top: 18px;
  left: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

export default Composant1061;
