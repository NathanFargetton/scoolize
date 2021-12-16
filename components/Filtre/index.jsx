import React from "react";
import styled from "styled-components";
import { HeeboBoldLicorice16px } from "../../styledMixins";


function Filtre() {
  return (
    <Filtre1>
      <Filtre2>Filtres</Filtre2>
    </Filtre1>
  );
}

const Filtre1 = styled.div`
  width: 48px;
  height: 24px;
  margin-left: 12px;
  display: flex;
`;

const Filtre2 = styled.div`
  ${HeeboBoldLicorice16px}
  margin-top: 4px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -6px;
  width: 48px;
  opacity: 0.7;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Filtre3 = styled.div`
  width: 48px;
  height: 24px;
  margin-left: 12px;
  display: flex;
`;

const Filtre4 = styled.div`
  ${HeeboBoldLicorice16px}
  margin-top: 4px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -6px;
  width: 48px;
  opacity: 0.7;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Filtre;
