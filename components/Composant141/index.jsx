import React from "react";
import IconPermIdentityFilled from "../IconPermIdentityFilled";
import TextFieldOutlinedUnfilledEnabled from "../TextFieldOutlinedUnfilledEnabled";
import ButtonsContainedEnabled from "../ButtonsContainedEnabled";
import styled from "styled-components";
import { Border1pxChicago, RobotoNormalBlack16px } from "../../styledMixins";


function Composant141(props) {
  const {
    overlapGroup2,
    adresseLctronique,
    iconPermIdentityFilledProps,
    textFieldOutlinedUnfilledEnabledProps,
    buttonsContainedEnabledProps,
  } = props;

  return (
    <Composant1411>
      <OverlapGroup2 style={{ backgroundImage: `url(${overlapGroup2})` }}>
        <IconPermIdentityFilled src={iconPermIdentityFilledProps.src} />
      </OverlapGroup2>
      <TextFieldOutlinedUnfilledEnabled1>
        <AdresseLctronique>{adresseLctronique}</AdresseLctronique>
      </TextFieldOutlinedUnfilledEnabled1>
      <TextFieldOutlinedUnfilledEnabled
        motDePasse={textFieldOutlinedUnfilledEnabledProps.motDePasse}
        iconVisibilityFilledProps={textFieldOutlinedUnfilledEnabledProps.iconVisibilityFilledProps}
      />
      <ButtonsContainedEnabled
        sEnregistrerPasserAuFormulaire={buttonsContainedEnabledProps.sEnregistrerPasserAuFormulaire}
        composant211Props={buttonsContainedEnabledProps.composant211Props}
      />
    </Composant1411>
  );
}

const Composant1411 = styled.div`
  position: absolute;
  width: 632px;
  top: 78px;
  left: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 626px;
`;

const OverlapGroup2 = styled.div`
  height: 130px;
  position: relative;
  margin-top: -4px;
  margin-left: 0;
  display: flex;
  padding: 13.5px 17.5px;
  align-items: flex-start;
  min-width: 130px;
  background-size: cover;
  background-position: 50% 50%;
`;

const TextFieldOutlinedUnfilledEnabled1 = styled.div`
  ${Border1pxChicago}
  height: 56px;
  margin-top: 43px;
  display: flex;
  padding: 14px 21px;
  align-items: flex-end;
  min-width: 632px;
  border-radius: 4px;
`;

const AdresseLctronique = styled.div`
  ${RobotoNormalBlack16px}
  min-height: 23px;
  min-width: 155px;
  letter-spacing: 0.15px;
  line-height: 16px;
  white-space: nowrap;
`;

export default Composant141;
