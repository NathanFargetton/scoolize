import React from "react";
import styled from "styled-components";
import {
  HeeboBoldBlack16px,
  SegoeuiRegularNormalOrange18px,
  HeeboNormalBlack14px,
  SegoeuiRegularNormalDoveGray12px,
} from "../../styledMixins";


function Objectifs(props) {
  const { className } = props;

  return (
    <Objectifs1 className={`objectifs ${className || ""}`}>
      <OverlapGroup6 className="overlap-group6-1">
        <LesObjectifsDeDiplomeDocus className="les-objectifs-de-diplome-docus">
          Les objectifs de Diplome-Docus
        </LesObjectifsDeDiplomeDocus>
        <OverlapGroup className="overlap-group-15">
          <X123 className="x123" src="/img/123-1@1x.png" />
          <Trac1997 className="trac-1997" src="/img/trac--1997-1@1x.png" />
          <RecherchesToutesEnUn className="recherches-toutes-en-un">Recherches toutes en un</RecherchesToutesEnUn>
          <DiplomeDocusRfre className="diplome-docus-rfre">
            Diplome-Docus référence toutes les écoles privées comme publiques
          </DiplomeDocusRfre>
          <LesColesParlentD className="les-coles-parlent-d">
            Les écoles parlent d&#39;elles-mêmes et vous propose leurs formations, les avis, les accréditations, les
            campus, les brochures, les vidéos, les témoignages, les articles, etc.
          </LesColesParlentD>
        </OverlapGroup>
      </OverlapGroup6>
      <OverlapGroup1 className="overlap-group1-13">
        <School className="school" src="/img/school-1@1x.png" />
        <Trac1998 className="trac-1998" src="/img/trac--1997-1@1x.png" />
        <AccompagnementEtRponses className="accompagnement-et-rponses">
          Accompagnement et réponses
        </AccompagnementEtRponses>
        <OnVousAccompagne className="on-vous-accompagne">
          On vous&nbsp;&nbsp;accompagne dans vos projets et&nbsp;&nbsp;vos démarches !
        </OnVousAccompagne>
        <NotrePartieUtilisa className="notre-partie-utilisa">
          Notre partie Utilisateur développée spécialement pour vous permettre d&#39;être au top dans vos
          recherches,&nbsp;&nbsp;dans vos démarches et vos poursuites d&#39;études.
        </NotrePartieUtilisa>
      </OverlapGroup1>
    </Objectifs1>
  );
}

const Objectifs1 = styled.div`
  height: 404px;
  z-index: 6;
  align-self: center;
  margin-top: 150px;
  margin-left: 127px;
  display: flex;
  align-items: flex-end;
  min-width: 1071px;

  &.objectifs.objectifs-1 {
    align-self: unset;
  }
`;

const OverlapGroup6 = styled.div`
  width: 606px;
  height: 409px;
  position: relative;
  margin-bottom: -2px;
`;

const LesObjectifsDeDiplomeDocus = styled.div`
  ${HeeboBoldBlack16px}
  position: absolute;
  width: 302px;
  height: 51px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 22px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 424px;
  height: 381px;
  top: 28px;
  left: 182px;
`;

const X123 = styled.img`
  position: absolute;
  width: 323px;
  height: 323px;
  top: 0;
  left: 101px;
  object-fit: cover;
`;

const Trac1997 = styled.img`
  position: absolute;
  width: 290px;
  height: 53px;
  top: 203px;
  left: 0;
  object-fit: cover;
`;

const RecherchesToutesEnUn = styled.div`
  ${HeeboNormalBlack14px}
  position: absolute;
  width: 158px;
  height: 21px;
  top: 216px;
  left: 118px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const DiplomeDocusRfre = styled.div`
  ${SegoeuiRegularNormalOrange18px}
  position: absolute;
  width: 302px;
  height: 87px;
  top: 256px;
  left: 113px;
  letter-spacing: 0;
  line-height: 18px;
`;

const LesColesParlentD = styled.p`
  ${SegoeuiRegularNormalDoveGray12px}
  position: absolute;
  width: 289px;
  height: 69px;
  top: 312px;
  left: 113px;
  letter-spacing: 0;
  line-height: 12px;
`;

const OverlapGroup1 = styled.div`
  width: 422px;
  height: 379px;
  position: relative;
  margin-left: 43px;
`;

const School = styled.img`
  position: absolute;
  width: 323px;
  height: 323px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Trac1998 = styled.img`
  position: absolute;
  width: 290px;
  height: 53px;
  top: 201px;
  left: 132px;
  object-fit: cover;
`;

const AccompagnementEtRponses = styled.div`
  ${HeeboNormalBlack14px}
  position: absolute;
  width: 158px;
  height: 51px;
  top: 206px;
  left: 156px;
  letter-spacing: 0;
  line-height: 18px;
`;

const OnVousAccompagne = styled.div`
  ${SegoeuiRegularNormalOrange18px}
  position: absolute;
  width: 307px;
  height: 87px;
  top: 254px;
  left: 7px;
  text-align: right;
  letter-spacing: 0;
  line-height: 18px;
`;

const NotrePartieUtilisa = styled.p`
  ${SegoeuiRegularNormalDoveGray12px}
  position: absolute;
  width: 289px;
  height: 69px;
  top: 310px;
  left: 25px;
  text-align: right;
  letter-spacing: 0;
  line-height: 12px;
`;

export default Objectifs;
