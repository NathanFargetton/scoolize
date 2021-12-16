import React from "react";
import styled from "styled-components";
import { HeeboNormalBlack48px } from "../../styledMixins";


function Composant1091(props) {
  const { trac2012, trac2013, trac2014, tlchargerLesBulletins } = props;

  return (
    <Composant10911>
      <IconFeatherDownload>
        <TracContainer>
          <Trac2012 src={trac2012} />
          <Trac2013 src={trac2013} />
          <Trac2014 src={trac2014} />
        </TracContainer>
      </IconFeatherDownload>
      <TlchargerLesBulletins>{tlchargerLesBulletins}</TlchargerLesBulletins>
    </Composant10911>
  );
}

const Composant10911 = styled.div`
  width: 646px;
  height: 78px;
  margin-top: 182px;
  margin-right: 14px;
  display: flex;
  justify-content: space-between;
`;

const IconFeatherDownload = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 78px;
`;

const TracContainer = styled.div`
  width: 81px;
  height: 81px;
  position: relative;
  margin-top: -1.5px;
`;

const Trac2012 = styled.img`
  position: absolute;
  width: 81px;
  height: 29px;
  top: 52px;
  left: 0;
  object-fit: cover;
`;

const Trac2013 = styled.img`
  position: absolute;
  width: 48px;
  height: 25px;
  top: 30px;
  left: 17px;
  object-fit: cover;
`;

const Trac2014 = styled.img`
  position: absolute;
  width: 3px;
  height: 55px;
  top: 0;
  left: 39px;
  object-fit: cover;
`;

const TlchargerLesBulletins = styled.div`
  ${HeeboNormalBlack48px}
  margin-top: 18px;
  margin-bottom: -12px;
  width: 523px;
  margin-right: -2px;
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

export default Composant1091;
