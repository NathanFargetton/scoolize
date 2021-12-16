import React from "react";
import styled from "styled-components";
import { HeeboBoldBlack15px } from "../../styledMixins";


function ChoisirLaVilleOutudier() {
  return (
    <ChoisirLaVilleOuTudier>
      <Ecole src="/img/ecole-1@1x.png" />
      <Next>Choisir la ville où étudier</Next>
    </ChoisirLaVilleOuTudier>
  );
}

const ChoisirLaVilleOuTudier = styled.div`
  width: 251px;
  height: 47px;
  margin-left: 130px;
  display: flex;
  background-color: var(--ff5d22);
  border-radius: 25px;
`;

const Ecole = styled.img`
  margin-top: -10.6px;
  width: 22px;
  height: 22px;
  margin-left: 17px;
  object-fit: cover;
`;

const Next = styled.p`
  ${HeeboBoldBlack15px}
  align-self: flex-end;
  margin-bottom: -7.3px;
  width: 169px;
  height: 24px;
  margin-left: 10px;
  margin-right: 33px;
  flex: 1;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const ChoisirLaVilleOuTudier1 = styled.div`
  width: 251px;
  height: 47px;
  margin-left: 130px;
  display: flex;
  background-color: var(--ff5d22);
  border-radius: 25px;
`;

const Ecole1 = styled.img`
  margin-top: -10.6px;
  width: 22px;
  height: 22px;
  margin-left: 17px;
  object-fit: cover;
`;

const Next1 = styled.p`
  ${HeeboBoldBlack15px}
  align-self: flex-end;
  margin-bottom: -7.3px;
  width: 169px;
  height: 24px;
  margin-left: 10px;
  margin-right: 33px;
  flex: 1;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

export default ChoisirLaVilleOutudier;
