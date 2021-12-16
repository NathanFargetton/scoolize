import React from "react";
import Composant1091 from "../Composant1091";
import Composant1101 from "../Composant1101";
import Composant1111 from "../Composant1111";
import styled from "styled-components";
import { MontserratBoldOrange41px, MontserratBoldOrange60px } from "../../styledMixins";
import "./Validation1.css";

function Validation1(props) {
  const {
    bulletinsScolaires,
    aucunBulletinTransmis,
    composant1091Props,
    composant1101Props,
    composant1111Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="validation-1 screen">
        <BulletinsScolaires>{bulletinsScolaires}</BulletinsScolaires>
        <AucunBulletinTransmis>{aucunBulletinTransmis}</AucunBulletinTransmis>
        <Composant1091
          trac2012={composant1091Props.trac2012}
          trac2013={composant1091Props.trac2013}
          trac2014={composant1091Props.trac2014}
          tlchargerLesBulletins={composant1091Props.tlchargerLesBulletins}
        />
        <Composant1101
          iconAwesomeArrowAltCircleLeft={composant1101Props.iconAwesomeArrowAltCircleLeft}
          laisserPourAprs={composant1101Props.laisserPourAprs}
        />
        <Composant1111
          iconAwesomePenNib={composant1111Props.iconAwesomePenNib}
          entrerLesDonnesLaMain={composant1111Props.entrerLesDonnesLaMain}
        />
      </div>
    </div>
  );
}

const BulletinsScolaires = styled.div`
  ${MontserratBoldOrange60px}
  min-height: 75px;
  margin-left: 2px;
  min-width: 572px;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const AucunBulletinTransmis = styled.div`
  ${MontserratBoldOrange41px}
  min-height: 52px;
  margin-top: 128px;
  margin-left: 2px;
  min-width: 518px;
  letter-spacing: 0;
  line-height: 41px;
  white-space: nowrap;
`;

export default Validation1;
