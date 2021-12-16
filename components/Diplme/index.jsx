import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeeboBoldLicorice16px } from "../../styledMixins";


function Diplme(props) {
  const { className } = props;

  return (
    <Link to="/diplomes">
      <Diplme1 className={`diplme ${className || ""}`}>
        <Diplme2 className="diplme-1">Diplômes</Diplme2>
      </Diplme1>
    </Link>
  );
}

const Diplme1 = styled.div`
  width: 70px;
  height: 24px;
  margin-top: 21px;
  display: flex;
  cursor: pointer;

  &.diplme.diplme-3 {
    cursor: unset;
  }

  &.diplme.diplme-4 {
    cursor: unset;
  }

  &.diplme.diplme-5 {
    cursor: unset;
  }

  &.diplme.diplme-6 {
    cursor: unset;
  }
`;

const Diplme2 = styled.div`
  ${HeeboBoldLicorice16px}
  margin-top: 4px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -6px;
  width: 70px;
  opacity: 0.7;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Diplme;
