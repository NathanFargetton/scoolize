import React from "react";
import styled from "styled-components";
import { Border1pxChicago } from "../../styledMixins";


function TextFieldOutlinedUnfilledEnabled2(props) {
  const { className } = props;

  return (
    <TextFieldOutlinedUnfilledEnabled
      className={`text-field-outlined-unfilled-enabled-2 ${className || ""}`}
    ></TextFieldOutlinedUnfilledEnabled>
  );
}

const TextFieldOutlinedUnfilledEnabled = styled.div`
  ${Border1pxChicago}
  position: absolute;
  width: 632px;
  height: 56px;
  top: 406px;
  left: 56px;
  border-radius: 4px;

  &.text-field-outlined-unfilled-enabled-2.text-field-outlined-unfilled-enabled-3 {
    top: 328px;
  }
`;

export default TextFieldOutlinedUnfilledEnabled2;
