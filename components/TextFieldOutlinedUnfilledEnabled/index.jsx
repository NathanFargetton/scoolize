import React from "react";
import IconVisibilityFilled from "../IconVisibilityFilled";
import styled from "styled-components";
import { RobotoNormalBlack16px } from "../../styledMixins";


function TextFieldOutlinedUnfilledEnabled(props) {
  const { motDePasse, iconVisibilityFilledProps } = props;

  return (
    <TextFieldOutlinedUnfilledEnabled1>
      <FlexRow>
        <MotDePasse>{motDePasse}</MotDePasse>
        <IconVisibilityFilled className={iconVisibilityFilledProps.className} />
      </FlexRow>
      <Surface></Surface>
    </TextFieldOutlinedUnfilledEnabled1>
  );
}

const TextFieldOutlinedUnfilledEnabled1 = styled.div`
  width: 632px;
  margin-top: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
`;

const FlexRow = styled.div`
  height: 28px;
  position: relative;
  margin-top: 2px;
  margin-left: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 602px;
`;

const MotDePasse = styled.div`
  ${RobotoNormalBlack16px}
  min-height: 23px;
  min-width: 100px;
  letter-spacing: 0.15px;
  line-height: 16px;
  white-space: nowrap;
`;

const Surface = styled.div`
  width: 632px;
  height: 56px;
  margin-top: 33px;
  border-radius: 4px;
  border: 1px solid #605d5d;
  opacity: 0.5;
`;

export default TextFieldOutlinedUnfilledEnabled;
