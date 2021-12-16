import React from "react";
import styled from "styled-components";
import { HeeboNormalBlack48px } from "../../styledMixins";


function Composant1111(props) {
  const { iconAwesomePenNib, entrerLesDonnesLaMain } = props;

  return (
    <Composant11111>
      <IconAwesomePenNib src={iconAwesomePenNib} />
      <EntrerLesDonnesLaMain>{entrerLesDonnesLaMain}</EntrerLesDonnesLaMain>
    </Composant11111>
  );
}

const Composant11111 = styled.div`
  width: 725px;
  height: 71px;
  align-self: flex-end;
  margin-top: 84px;
  display: flex;
  justify-content: space-between;
`;

const IconAwesomePenNib = styled.img`
  margin-top: 0;
  margin-bottom: 0;
  width: 71.42791748046875px;
  object-fit: cover;
`;

const EntrerLesDonnesLaMain = styled.div`
  ${HeeboNormalBlack48px}
  margin-top: 12.4px;
  margin-bottom: -13px;
  width: 605px;
  margin-right: -2px;
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

export default Composant1111;
