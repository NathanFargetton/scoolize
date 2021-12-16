import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeeboBoldBlack15px } from "../../styledMixins";


function TrouverMoncole() {
  return (
    <Link to="/trouver-ecole-1">
      <TrouverMonCole>
        <Ecole1 src="/img/ecole--1--1@1x.png" />
        <Next>Trouver mon école</Next>
      </TrouverMonCole>
    </Link>
  );
}

const TrouverMonCole = styled.div`
  width: 198px;
  height: 47px;
  margin-left: 130px;
  display: flex;
  background-color: var(--ff5d22);
  border-radius: 25px;
  cursor: pointer;
`;

const Ecole1 = styled.img`
  margin-top: -10.6px;
  width: 22px;
  height: 22px;
  margin-left: 17px;
  object-fit: cover;
`;

const Next = styled.div`
  ${HeeboBoldBlack15px}
  align-self: flex-end;
  margin-bottom: -7.3px;
  width: 128px;
  height: 24px;
  margin-left: 10px;
  margin-right: 21px;
  flex: 1;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const TrouverMonCole1 = styled.div`
  width: 198px;
  height: 47px;
  margin-left: 130px;
  display: flex;
  background-color: var(--ff5d22);
  border-radius: 25px;
  cursor: pointer;
`;

const Ecole11 = styled.img`
  margin-top: -10.6px;
  width: 22px;
  height: 22px;
  margin-left: 17px;
  object-fit: cover;
`;

const Next1 = styled.div`
  ${HeeboBoldBlack15px}
  align-self: flex-end;
  margin-bottom: -7.3px;
  width: 128px;
  height: 24px;
  margin-left: 10px;
  margin-right: 21px;
  flex: 1;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

export default TrouverMoncole;
