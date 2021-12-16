import React from "react";
import styled from "styled-components";
import { HeeboNormalBlack20px } from "../../styledMixins";


function Composant571(props) {
  const { children } = props;

  return (
    <Composant5711>
      <ImageSonAnimation23D>{children}</ImageSonAnimation23D>
    </Composant5711>
  );
}

const Composant5711 = styled.div`
  width: 250px;
  height: 29px;
  display: flex;
`;

const ImageSonAnimation23D = styled.div`
  ${HeeboNormalBlack20px}
  margin-top: 3.5px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -5.5px;
  width: 250px;
  -webkit-text-stroke: 0.10000000149011612px var(--black-2);
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Composant571;
