import React from "react";
import styled from "styled-components";
import { HeeboNormalBlack20px } from "../../styledMixins";


function Composant601(props) {
  const { children } = props;

  return (
    <Composant6011>
      <LanguesScHumaines>{children}</LanguesScHumaines>
    </Composant6011>
  );
}

const Composant6011 = styled.div`
  width: 204px;
  height: 29px;
  display: flex;
`;

const LanguesScHumaines = styled.div`
  ${HeeboNormalBlack20px}
  margin-top: 3.5px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -5.5px;
  width: 204px;
  -webkit-text-stroke: 0.10000000149011612px var(--black-2);
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Composant601;
