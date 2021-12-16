import React from "react";
import styled from "styled-components";


function SelectionControlCheckboxOffEnabled(props) {
  const { src } = props;

  return (
    <SelectionControlCheckboxOffEnabled1
      style={{ backgroundImage: `url(${src})` }}
    ></SelectionControlCheckboxOffEnabled1>
  );
}

const SelectionControlCheckboxOffEnabled1 = styled.div`
  margin-top: 1px;
  width: 18px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default SelectionControlCheckboxOffEnabled;
