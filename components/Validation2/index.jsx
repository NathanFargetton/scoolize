import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeeboNormalWhite14px, Border1pxDoveGray } from "../../styledMixins";
import "./Validation2.css";

function Validation2(props) {
  const {
    profil,
    userpic,
    productOwner,
    emileeSimchenko,
    base,
    changerDePhotoDeProfil,
    iconAwesomePen,
    iconAwesomeFolderPlus,
    ajouterDesDocuments,
    iconAwesomePowerOff,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="validation-2 screen">
        <OverlapGroup1>
          <FlexCol>
            <Profil>{profil}</Profil>
            <OverlapGroup2>
              <UserInfo>
                <FlexRow>
                  <Userpic src={userpic} />
                  <OverlapGroup>
                    <ProductOwner>{productOwner}</ProductOwner>
                    <EmileeSimchenko>{emileeSimchenko}</EmileeSimchenko>
                  </OverlapGroup>
                </FlexRow>
                <Base src={base} />
              </UserInfo>
              <ChangerDePhotoDeProfil>{changerDePhotoDeProfil}</ChangerDePhotoDeProfil>
              <IconAwesomePen src={iconAwesomePen} />
              <Link to="/validation-1">
                <IconAwesomeFolderPlus src={iconAwesomeFolderPlus} />
              </Link>
            </OverlapGroup2>
          </FlexCol>
          <Link to="/validation-1">
            <AjouterDesDocuments>{ajouterDesDocuments}</AjouterDesDocuments>
          </Link>
          <Link to="/page-d-accueil">
            <IconAwesomePowerOff src={iconAwesomePowerOff} />
          </Link>
        </OverlapGroup1>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  ${Border1pxDoveGray}
  height: 1078px;
  margin-left: -1px;
  display: flex;
  padding: 73.5px 129.3px;
  align-items: center;
  min-width: 1921px;
  background-color: var(--eerie-black);
`;

const FlexCol = styled.div`
  width: 952px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 684px;
`;

const Profil = styled.div`
  margin-bottom: -5px;
  min-height: 94px;
  margin-right: 10.1px;
  min-width: 217px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--ff5d22);
  font-size: 75px;
  letter-spacing: 0;
  line-height: 99px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  width: 952px;
  height: 303px;
  position: relative;
  margin-top: 287px;
`;

const UserInfo = styled.div`
  position: absolute;
  width: 899px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 303px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 566px;
`;

const Userpic = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 129.91px;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  width: 258px;
  height: 127px;
  position: relative;
  margin-left: 48px;
  margin-top: 21.5px;
`;

const ProductOwner = styled.div`
  position: absolute;
  top: 68px;
  left: 0;
  font-family: var(--font-family-heebo);
  font-weight: 700;
  color: var(--white);
  font-size: 39px;
  letter-spacing: 0;
  line-height: 39px;
  white-space: nowrap;
`;

const EmileeSimchenko = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-family-heebo);
  font-weight: 700;
  color: var(--white);
  font-size: 46px;
  letter-spacing: 0;
  line-height: 46px;
  white-space: nowrap;
`;

const Base = styled.img`
  width: 899px;
  height: 0;
  margin-top: 43px;
  margin-left: 0;
  object-fit: cover;
`;

const ChangerDePhotoDeProfil = styled.p`
  ${HeeboNormalWhite14px}
  position: absolute;
  top: 193px;
  left: 72px;
  text-align: center;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const IconAwesomePen = styled.img`
  position: absolute;
  width: 65px;
  height: 65px;
  top: 97px;
  left: 587px;
  object-fit: cover;
`;

const IconAwesomeFolderPlus = styled.img`
  position: absolute;
  width: 120px;
  height: 88px;
  top: 85px;
  left: 832px;
  object-fit: cover;
  cursor: pointer;
`;

const AjouterDesDocuments = styled.div`
  min-height: 46px;
  margin-left: 19px;
  margin-top: 124px;
  min-width: 316px;
  font-family: var(--font-family-heebo);
  font-weight: 700;
  color: var(--white);
  font-size: 30px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
  cursor: pointer;
`;

const IconAwesomePowerOff = styled.img`
  width: 112px;
  height: 113px;
  margin-left: 207px;
  margin-top: 86.03px;
  object-fit: cover;
  cursor: pointer;
`;

export default Validation2;
