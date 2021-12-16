import React from "react";
import styled from "styled-components";
import { HeeboNormalBlack20px } from "../../styledMixins";


function Composant561(props) {
  const { children } = props;

  return (
    <Composant5611>
      <HtellerieTourisme>{children}</HtellerieTourisme>
    </Composant5611>
  );
}

const Composant5611 = styled.div`
  width: 178px;
  height: 29px;
  display: flex;
`;

const HtellerieTourisme = styled.div`
  ${HeeboNormalBlack20px}
  margin-top: 3.5px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -5.5px;
  width: 178px;
  -webkit-text-stroke: 0.10000000149011612px var(--black-2);
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Composant561;
