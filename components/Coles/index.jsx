import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeeboBoldLicorice16px } from "../../styledMixins";


function Coles(props) {
  const { className } = props;

  return (
    <Link to="/ecoles">
      <Coles1 className={`coles ${className || ""}`}>
        <Coles2 className="coles-1">Écoles</Coles2>
      </Coles1>
    </Link>
  );
}

const Coles1 = styled.div`
  width: 50px;
  height: 24px;
  margin-left: 12px;
  display: flex;
  cursor: pointer;

  &.coles.coles-2 {
    margin-bottom: 2px;
  }

  &.coles.coles-3 {
    cursor: unset;
  }

  &.coles.coles-4 {
    cursor: unset;
  }

  &.coles.coles-5 {
    cursor: unset;
  }

  &.coles.coles-6 {
    cursor: unset;
  }
`;

const Coles2 = styled.div`
  ${HeeboBoldLicorice16px}
  margin-top: 4px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -6px;
  width: 50px;
  opacity: 0.7;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Coles;
