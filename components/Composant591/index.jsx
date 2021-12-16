import React from "react";
import styled from "styled-components";
import { HeeboNormalBlack20px } from "../../styledMixins";


function Composant591(props) {
  const { children } = props;

  return (
    <Composant5911>
      <IngnierieSciences>{children}</IngnierieSciences>
    </Composant5911>
  );
}

const Composant5911 = styled.div`
  width: 178px;
  height: 29px;
  display: flex;
`;

const IngnierieSciences = styled.div`
  ${HeeboNormalBlack20px}
  margin-top: 3.5px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -5.5px;
  width: 178px;
  -webkit-text-stroke: 0.10000000149011612px var(--black-2);
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Composant591;
