import React from "react";
import ChoisirLeDomaineDtude2 from "../ChoisirLeDomaineDtude2";
import styled from "styled-components";
import { SegoeuiBoldDoveGray15px, HeeboBlackBlack25px, HeeboBoldBlack30px } from "../../styledMixins";


function PartieOrientation(props) {
  const { className } = props;

  return (
    <PartieOrientation1 className={`partie-orientation ${className || ""}`}>
      <LorientationAvecDiplomeDocus className="lorientation-avec-diplome-docus">
        L’orientation avec Diplome-Docus
      </LorientationAvecDiplomeDocus>
      <OverlapGroupContainer className="overlap-group-container">
        <OverlapGroup className="overlap-group-13">
          <X16 className="x16" src="/img/16-1@1x.png" />
          <Number className="number-3">1</Number>
          <DfinissezVotrePar className="dfinissez-votre-par">
            Définissez votre parcours et votre projet d’orientation.
          </DfinissezVotrePar>
        </OverlapGroup>
        <OverlapGroup1 className="overlap-group1-12">
          <X17 className="x17" src="/img/17-1@1x.png" />
          <Number1 className="number-4">2</Number1>
          <RecherchezLesMeill className="recherchez-les-meill">
            Recherchez les meilleures formations. Et les différents établissements.
          </RecherchezLesMeill>
        </OverlapGroup1>
        <OverlapGroup2 className="overlap-group2-7">
          <X16 className="x18" src="/img/18-1@1x.png" />
          <Number className="number-5">3</Number>
          <EtEnvoyezVosCandidatures className="et-envoyez-vos-candidatures">
            Et envoyez vos candidatures !
          </EtEnvoyezVosCandidatures>
        </OverlapGroup2>
      </OverlapGroupContainer>
      <ChoisirLeDomaineDtude2 />
    </PartieOrientation1>
  );
}

const PartieOrientation1 = styled.div`
  width: 1658px;
  z-index: 4;
  position: relative;
  margin-top: 150px;
  margin-right: -10px;
  display: flex;
  flex-direction: column;
  padding: 38px 457px;
  align-items: center;
  min-height: 514px;
  background-color: var(--black-haze);

  &.partie-orientation.partie-orientation-1 {
    align-self: flex-end;
  }
`;

const LorientationAvecDiplomeDocus = styled.div`
  ${HeeboBoldBlack30px}
  width: 463px;
  height: 62px;
  margin-left: 1px;
  letter-spacing: 0;
  line-height: 22px;
`;

const OverlapGroupContainer = styled.div`
  align-self: flex-start;
  margin-top: 17px;
  display: flex;
  align-items: flex-start;
  min-width: 703px;
`;

const OverlapGroup = styled.div`
  width: 187px;
  height: 273px;
  position: relative;
`;

const X16 = styled.img`
  position: absolute;
  width: 187px;
  height: 187px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Number = styled.div`
  ${HeeboBlackBlack25px}
  position: absolute;
  width: 15px;
  height: 47px;
  top: 154px;
  left: 90px;
  letter-spacing: 0;
  line-height: 22px;
`;

const DfinissezVotrePar = styled.p`
  ${SegoeuiBoldDoveGray15px}
  position: absolute;
  width: 172px;
  height: 75px;
  top: 198px;
  left: 9px;
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
`;

const OverlapGroup1 = styled.div`
  width: 200px;
  height: 278px;
  position: relative;
  margin-left: 66px;
`;

const X17 = styled.img`
  position: absolute;
  width: 187px;
  height: 187px;
  top: 0;
  left: 5px;
  object-fit: cover;
`;

const Number1 = styled.div`
  ${HeeboBlackBlack25px}
  position: absolute;
  width: 15px;
  height: 47px;
  top: 154px;
  left: 95px;
  letter-spacing: 0;
  line-height: 22px;
`;

const RecherchezLesMeill = styled.p`
  ${SegoeuiBoldDoveGray15px}
  position: absolute;
  width: 200px;
  height: 80px;
  top: 198px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
`;

const OverlapGroup2 = styled.div`
  width: 187px;
  height: 243px;
  position: relative;
  margin-left: 63px;
`;

const EtEnvoyezVosCandidatures = styled.p`
  ${SegoeuiBoldDoveGray15px}
  position: absolute;
  width: 172px;
  height: 45px;
  top: 198px;
  left: 12px;
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
`;

export default PartieOrientation;
