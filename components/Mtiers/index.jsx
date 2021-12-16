import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeeboBoldLicorice16px } from "../../styledMixins";


function Mtiers(props) {
  const { className } = props;

  return (
    <Link to="/page-d-accueil-2">
      <Mtiers1 className={`mtiers-4 ${className || ""}`}>
        <Mtiers2 className="mtiers-5">Métiers</Mtiers2>
      </Mtiers1>
    </Link>
  );
}

const Mtiers1 = styled.div`
  width: 57px;
  height: 24px;
  margin-left: 12px;
  display: flex;
  cursor: pointer;

  &.mtiers-4.mtiers-6 {
    margin-bottom: 2px;
  }
`;

const Mtiers2 = styled.div`
  ${HeeboBoldLicorice16px}
  margin-top: 4px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -6px;
  width: 57px;
  opacity: 0.7;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Mtiers;
