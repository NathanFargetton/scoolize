import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function Composant1101(props) {
  const { iconAwesomeArrowAltCircleLeft, laisserPourAprs } = props;

  return (
    <Composant11011>
      <IconAwesomeArrowAltCircleLeft src={iconAwesomeArrowAltCircleLeft} />
      <Link to="/page-d-accueil">
        <LaisserPourAprs>{laisserPourAprs}</LaisserPourAprs>
      </Link>
    </Composant11011>
  );
}

const Composant11011 = styled.div`
  width: 522px;
  height: 82px;
  align-self: flex-start;
  margin-top: 84px;
  margin-left: 66px;
  display: flex;
  justify-content: space-between;
`;

const IconAwesomeArrowAltCircleLeft = styled.img`
  margin-top: 0;
  margin-bottom: 0;
  width: 81.6484375px;
  margin-left: 0;
  object-fit: cover;
`;

const LaisserPourAprs = styled.div`
  margin-top: 17px;
  margin-bottom: -7.4px;
  width: 397px;
  margin-right: -2px;
  font-family: var(--font-family-heebo);
  font-weight: 400;
  color: #151817;
  font-size: 48px;
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
  cursor: pointer;
`;

export default Composant1101;
