import React from "react";
import styled from "styled-components";
import { HeeboBoldBlack15px } from "../../styledMixins";


function ChoisirLeDomaineDtude2() {
  return (
    <ChoisirLeDomaineDtude>
      <LobtentionDuDiplome src="/img/lobtention-du-diplome-1@1x.png" />
      <Next>Trouver un diplôme</Next>
    </ChoisirLeDomaineDtude>
  );
}

const ChoisirLeDomaineDtude = styled.div`
  height: 47px;
  margin-top: 21px;
  margin-right: 41px;
  display: flex;
  padding: 7px 16.5px;
  align-items: center;
  min-width: 207px;
  background-image: url(/img/base-2@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const LobtentionDuDiplome = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 0.99px;
  object-fit: cover;
`;

const Next = styled.div`
  ${HeeboBoldBlack15px}
  min-height: 24px;
  align-self: flex-end;
  margin-left: 10px;
  min-width: 133px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const ChoisirLeDomaineDtude1 = styled.div`
  height: 47px;
  margin-top: 21px;
  margin-right: 41px;
  display: flex;
  padding: 7px 16.5px;
  align-items: center;
  min-width: 207px;
  background-image: url(/img/base-2@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const LobtentionDuDiplome1 = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 0.99px;
  object-fit: cover;
`;

const Next1 = styled.div`
  ${HeeboBoldBlack15px}
  min-height: 24px;
  align-self: flex-end;
  margin-left: 10px;
  min-width: 133px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

export default ChoisirLeDomaineDtude2;
