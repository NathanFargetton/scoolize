import React from "react";
import styled from "styled-components";
import { HeeboBoldBlack15px } from "../../styledMixins";


function ChoisirLeDomaineDtude() {
  return (
    <ChoisirLeDomaineDtude1>
      <EtudeDeMarche src="/img/etude-de-marche-1@1x.png" />
      <Next>Choisir le domaine d&#39;étude</Next>
    </ChoisirLeDomaineDtude1>
  );
}

const ChoisirLeDomaineDtude1 = styled.div`
  width: 251px;
  height: 47px;
  margin-left: 130px;
  display: flex;
  background-color: var(--ff5d22);
  border-radius: 25px;
`;

const EtudeDeMarche = styled.img`
  margin-top: -10.6px;
  width: 22px;
  height: 22px;
  margin-left: 18px;
  object-fit: cover;
`;

const Next = styled.div`
  ${HeeboBoldBlack15px}
  align-self: flex-end;
  margin-bottom: -7.3px;
  width: 181px;
  height: 24px;
  margin-left: 9px;
  margin-right: 21px;
  flex: 1;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const ChoisirLeDomaineDtude2 = styled.div`
  width: 251px;
  height: 47px;
  margin-left: 130px;
  display: flex;
  background-color: var(--ff5d22);
  border-radius: 25px;
`;

const EtudeDeMarche1 = styled.img`
  margin-top: -10.6px;
  width: 22px;
  height: 22px;
  margin-left: 18px;
  object-fit: cover;
`;

const Next1 = styled.div`
  ${HeeboBoldBlack15px}
  align-self: flex-end;
  margin-bottom: -7.3px;
  width: 181px;
  height: 24px;
  margin-left: 9px;
  margin-right: 21px;
  flex: 1;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

export default ChoisirLeDomaineDtude;
