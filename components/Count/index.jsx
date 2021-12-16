import React from "react";
import styled from "styled-components";
import { HeeboBoldLicorice13px } from "../../styledMixins";


function Count(props) {
  const { className } = props;

  return (
    <Count1 className={`count ${className || ""}`}>
      <Number className="number-6">3</Number>
    </Count1>
  );
}

const Count1 = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-top: 0.5px;
  display: flex;
  background-color: var(--ff5d22);
  border-radius: 10px;

  &.count.count-2 {
    position: absolute;
    top: 0;
    left: 125px;
    margin-left: unset;
    margin-top: unset;
  }

  &.count.count-3 {
    position: absolute;
    top: 0;
    left: 125px;
    margin-left: unset;
    margin-top: unset;
  }

  &.count.count-4 {
    position: absolute;
    top: 0;
    left: 125px;
    margin-left: unset;
    margin-top: unset;
  }
`;

const Number = styled.div`
  ${HeeboBoldLicorice13px}
  width: 9px;
  height: 21px;
  margin-left: 30%;
  margin-right: 25%;
  flex: 1;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

export default Count;
