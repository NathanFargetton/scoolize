import React from "react";
import Composant371 from "../Composant371";
import Composant381 from "../Composant381";
import Composant391 from "../Composant391";
import Composant301 from "../Composant301";
import Composant321 from "../Composant321";
import Composant331 from "../Composant331";
import Composant361 from "../Composant361";
import Composant401 from "../Composant401";
import Composant411 from "../Composant411";
import Composant421 from "../Composant421";
import Composant431 from "../Composant431";
import Title3 from "../Title3";
import styled from "styled-components";
import { SegoeuiRegularNormalWhite20px, HeeboBoldWhite18px } from "../../styledMixins";


function Footer(props) {
  const {
    className,
    composant301Props,
    composant3012Props,
    composant321Props,
    composant3013Props,
    composant3212Props,
    composant3014Props,
    composant3015Props,
    composant401Props,
    composant411Props,
    composant421Props,
    composant4112Props,
    composant401Props2,
  } = props;

  return (
    <Footer1 className={`footer-1 ${className || ""}`}>
      <FlexRow className="flex-row-2">
        <APropos className="a-propos-1">
          <PROPOS className="propos-1">À PROPOS</PROPOS>
          <Composant371 />
          <Composant381 />
          <Composant391 />
        </APropos>
        <AccsDirect className="accs-direct-2">
          <ACCSDIRECT className="accs-direct-3">ACCÈS DIRECT</ACCSDIRECT>
          <Composant301>{composant301Props.children}</Composant301>
          <Composant301 className={composant3012Props.className}>{composant3012Props.children}</Composant301>
          <Composant321>{composant321Props.children}</Composant321>
          <Composant331 />
          <Composant301 className={composant3013Props.className}>{composant3013Props.children}</Composant301>
          <Composant321>{composant3212Props.children}</Composant321>
          <Composant361 />
        </AccsDirect>
        <Etablissements className="etablissements-1">
          <TABLISSEMENTS className="tablissements-1">ÉTABLISSEMENTS</TABLISSEMENTS>
          <Composant301 className={composant3014Props.className}>{composant3014Props.children}</Composant301>
          <Composant301 className={composant3015Props.className}>{composant3015Props.children}</Composant301>
        </Etablissements>
        <RseauxSociaux className="rseaux-sociaux-1">
          <TABLISSEMENTS className="connect-1">CONNECT</TABLISSEMENTS>
          <FlexRow1 className="flex-row-3">
            <Composant401 src={composant401Props.src} />
            <Composant411 src={composant411Props.src} className={composant411Props.className} />
            <Composant421 src={composant421Props.src} className={composant421Props.className} />
            <Composant431 />
            <Composant411 src={composant4112Props.src} className={composant4112Props.className} />
          </FlexRow1>
        </RseauxSociaux>
      </FlexRow>
      <OverlapGroup1 className="overlap-group1-2">
        <Title3 className={composant401Props2.className} />
        <Copyright className="copyright-1">© 2021</Copyright>
      </OverlapGroup1>
    </Footer1>
  );
}

const Footer1 = styled.div`
  width: 1658px;
  z-index: 1;
  margin-top: 57px;
  display: flex;
  flex-direction: column;
  padding: 7px 147.2px;
  align-items: flex-end;
  min-height: 353px;
  background-color: var(--east-bay);
`;

const FlexRow = styled.div`
  height: 219px;
  margin-top: 31px;
  display: flex;
  align-items: flex-start;
  min-width: 1363px;
`;

const APropos = styled.div`
  width: 170px;
  position: relative;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 107px;
`;

const PROPOS = styled.div`
  ${HeeboBoldWhite18px}
  width: 100px;
  height: 34px;
  margin-top: -2px;
  margin-left: 2px;
  letter-spacing: 0;
  line-height: 22px;
`;

const AccsDirect = styled.div`
  width: 167px;
  position: relative;
  margin-left: 175px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 219px;
`;

const ACCSDIRECT = styled.div`
  ${HeeboBoldWhite18px}
  width: 131px;
  height: 34px;
  margin-top: -2px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Etablissements = styled.div`
  width: 203px;
  position: relative;
  margin-left: 175px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 82px;
`;

const TABLISSEMENTS = styled.div`
  ${HeeboBoldWhite18px}
  height: 25px;
  margin-top: -2px;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const RseauxSociaux = styled.div`
  width: 298px;
  margin-left: 175px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 82px;
`;

const FlexRow1 = styled.div`
  height: 47px;
  position: relative;
  margin-top: 12px;
  margin-left: 1px;
  display: flex;
  align-items: center;
  min-width: 297px;
`;

const OverlapGroup1 = styled.div`
  width: 595px;
  height: 49px;
  position: relative;
  align-self: center;
  margin-top: 40px;
  margin-left: 91px;
`;

const Copyright = styled.div`
  ${SegoeuiRegularNormalWhite20px}
  position: absolute;
  width: 302px;
  height: 30px;
  top: 13px;
  left: 293px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Footer2 = styled.div`
  .footer-1 & {
    margin-top: 72px;
  }
`;

const Footer3 = styled.div`
  .footer-1 & {
    z-index: 2;
    margin-top: 99px;
  }
`;

const Footer4 = styled.div`
  .footer-1 & {
    z-index: 2;
    margin-top: 66px;
  }
`;

const Footer5 = styled.div`
  .footer-1 & {
    z-index: 8;
    margin-top: 150px;
  }
`;

const Footer6 = styled.div`
  .footer-1 & {
    margin-top: 48px;
  }
`;

const Footer7 = styled.div`
  .footer-1 & {
    margin-top: 48px;
  }
`;

const Footer8 = styled.div`
  .footer-1 & {
    z-index: 3;
    margin-top: 404px;
  }
`;

const Footer9 = styled.div`
  .footer-1 & {
    z-index: 5;
    align-self: flex-end;
    margin-top: 234px;
  }
`;

const Footer10 = styled.div`
  .footer-1 & {
    margin-top: 70px;
  }
`;

const Footer11 = styled.div`
  .footer-1 & {
    margin-top: 64px;
  }
`;

const Footer12 = styled.div`
  .footer-1 & {
    z-index: 3;
    margin-top: 118px;
  }
`;

const Footer13 = styled.div`
  .footer-1 & {
    z-index: 2;
    margin-top: 326px;
  }
`;

const Footer14 = styled.div`
  .footer-1 & {
    z-index: 8;
    align-self: flex-end;
    margin-top: 150px;
  }
`;

const Footer15 = styled.div`
  .footer-1 & {
    margin-top: 130px;
  }
`;

const Footer16 = styled.div`
  .footer-1 & {
    margin-top: 402px;
  }
`;

const Footer17 = styled.div`
  .footer-1 & {
    margin-top: 126px;
  }
`;

const Footer18 = styled.div`
  .footer-1 & {
    margin-top: 465px;
  }
`;

export default Footer;
