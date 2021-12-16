import React from "react";
import IconVisibilityFilled from "../IconVisibilityFilled";
import Composant141 from "../Composant141";
import TextFieldOutlinedUnfilledEnabled2 from "../TextFieldOutlinedUnfilledEnabled2";
import styled from "styled-components";
import { RobotoNormalBlack16px } from "../../styledMixins";


function Composant202(props) {
  const { groupe1879, numroDeSiret, composant141Props, textFieldOutlinedUnfilledEnabled2Props } = props;

  return (
    <Composant2021>
      <OverlapGroup3>
        <Groupe1879 style={{ backgroundImage: `url(${groupe1879})` }}>
          <IconVisibilityFilled />
        </Groupe1879>
        <Composant141
          overlapGroup2={composant141Props.overlapGroup2}
          adresseLctronique={composant141Props.adresseLctronique}
          iconPermIdentityFilledProps={composant141Props.iconPermIdentityFilledProps}
          textFieldOutlinedUnfilledEnabledProps={composant141Props.textFieldOutlinedUnfilledEnabledProps}
          buttonsContainedEnabledProps={composant141Props.buttonsContainedEnabledProps}
        />
        <TextFieldOutlinedUnfilledEnabled2 />
        <TextFieldOutlinedUnfilledEnabled2 className={textFieldOutlinedUnfilledEnabled2Props.className} />
        <NumroDeSiret>{numroDeSiret}</NumroDeSiret>
      </OverlapGroup3>
    </Composant2021>
  );
}

const Composant2021 = styled.div`
  position: absolute;
  height: 789px;
  top: 50px;
  left: 472px;
  display: flex;
  align-items: flex-start;
  min-width: 734px;
`;

const OverlapGroup3 = styled.div`
  width: 734px;
  height: 789px;
  position: relative;
`;

const Groupe1879 = styled.div`
  position: absolute;
  height: 789px;
  top: 0;
  left: 0;
  display: flex;
  padding: 262.3px 57.9px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 734px;
  background-size: cover;
  background-position: 50% 50%;
`;

const NumroDeSiret = styled.div`
  ${RobotoNormalBlack16px}
  position: absolute;
  top: 348px;
  left: 76px;
  letter-spacing: 0.15px;
  line-height: 16px;
  white-space: nowrap;
`;

export default Composant202;
