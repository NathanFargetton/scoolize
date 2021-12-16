import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeeboBoldLicorice16px } from "../../styledMixins";


function Formation(props) {
  const { className } = props;

  return (
    <Formation1 className={`formation ${className || ""}`}>
      <Formation2 className="formation-1">Formations</Formation2>
    </Formation1>
  );
}

const Formation1 = styled.div`
  width: 84px;
  height: 24px;
  margin-left: 12px;
  display: flex;

  &.formation.formation-2 {
    margin-bottom: 2px;
  }

  &.formation.formation-3 {
    cursor: pointer;
  }

  &.formation.formation-4 {
    cursor: pointer;
  }

  &.formation.formation-5 {
    cursor: pointer;
  }
`;

const Formation2 = styled.div`
  ${HeeboBoldLicorice16px}
  margin-top: 4px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -6px;
  width: 84px;
  opacity: 0.7;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Formation;
