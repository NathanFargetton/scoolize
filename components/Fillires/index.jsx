import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeeboBoldLicorice16px } from "../../styledMixins";


function Fillires(props) {
  const { children, className } = props;

  return (
    <Link to="/filieres">
      <Fillires1 className={`fillires ${className || ""}`}>
        <Link to="/filieres">
          <Fillires2 className="fillires-1">{children}</Fillires2>
        </Link>
      </Fillires1>
    </Link>
  );
}

const Fillires1 = styled.div`
  width: 55px;
  height: 24px;
  margin-left: 12px;
  display: flex;
  cursor: pointer;

  &.fillires.fillires-2 {
    margin-bottom: 2px;
  }

  &.fillires.fillires-3 {
    cursor: unset;
  }

  &.fillires.mtiers {
    width: 57px;
    cursor: unset;
  }

  &.fillires.fillires-4 {
    cursor: unset;
  }

  &.fillires.mtiers-1 {
    width: 57px;
    cursor: unset;
  }

  &.fillires.fillires-5 {
    cursor: unset;
  }

  &.fillires.mtiers-2 {
    width: 57px;
    cursor: unset;
  }

  &.fillires.fillires-6 {
    cursor: unset;
  }

  &.fillires.mtiers-3 {
    width: 57px;
    cursor: unset;
  }
`;

const Fillires2 = styled.div`
  ${HeeboBoldLicorice16px}
  margin-top: 4px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -6px;
  width: 55px;
  opacity: 0.7;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
  cursor: pointer;
`;

const Fillires3 = styled.div`
  ${HeeboBoldLicorice16px}

  .fillires.fillires-3  & {
    cursor: unset;
  }
`;

const Mtiers = styled.div`
  ${HeeboBoldLicorice16px}

  .fillires.mtiers  & {
    width: 57px;
    cursor: unset;
  }
`;

const Fillires4 = styled.div`
  ${HeeboBoldLicorice16px}

  .fillires.fillires-4  & {
    cursor: unset;
  }
`;

const Mtiers1 = styled.div`
  ${HeeboBoldLicorice16px}

  .fillires.mtiers-1  & {
    width: 57px;
    cursor: unset;
  }
`;

const Fillires5 = styled.div`
  ${HeeboBoldLicorice16px}

  .fillires.fillires-5  & {
    cursor: unset;
  }
`;

const Mtiers2 = styled.div`
  ${HeeboBoldLicorice16px}

  .fillires.mtiers-2  & {
    width: 57px;
    cursor: unset;
  }
`;

const Fillires6 = styled.div`
  ${HeeboBoldLicorice16px}

  .fillires.fillires-6  & {
    cursor: unset;
  }
`;

const Mtiers3 = styled.div`
  ${HeeboBoldLicorice16px}

  .fillires.mtiers-3  & {
    width: 57px;
    cursor: unset;
  }
`;

export default Fillires;
