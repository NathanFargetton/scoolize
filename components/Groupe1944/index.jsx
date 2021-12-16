import React from "react";
import styled from "styled-components";
import { SegoeuiRegularNormalEastBay20px, Border05pxEastBay } from "../../styledMixins";


function Groupe1944(props) {
  const { lycen, className } = props;

  return (
    <Groupe19441 className={`groupe-1944 ${className || ""}`}>
      <IcSearch24px className="ic_search_24px-2" src="/img/ic-search-24px-10@1x.png" />
      <Place className="place-2">{lycen}</Place>
    </Groupe19441>
  );
}

const Groupe19441 = styled.div`
  ${Border05pxEastBay}
  flex: 1;
  max-height: 43px;
  height: 43px;
  display: flex;
  background-color: var(--white);
  border-radius: 18px;

  &.groupe-1944.groupe-1944-1 {
    position: absolute;
    width: 1098px;
    top: 96px;
    left: 0;
    flex: unset;
    max-height: unset;
  }
`;

const IcSearch24px = styled.img`
  align-self: flex-end;
  margin-bottom: -10.7px;
  width: 22.1806640625px;
  height: 22.1796875px;
  margin-left: 14px;
  object-fit: cover;
`;

const Place = styled.div`
  ${SegoeuiRegularNormalEastBay20px}
  margin-top: 9.5px;
  width: 43px;
  height: 29px;
  margin-left: 11.9px;
  opacity: 0.31;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const BTS = styled.div`
  ${SegoeuiRegularNormalEastBay20px}

  .groupe-1944.groupe-1944-1  & {
    width: 33px;
  }
`;

const Lycen = styled.div`
  ${SegoeuiRegularNormalEastBay20px}

  .groupe-1944.groupe-1944-2  & {
    width: 62px;
  }
`;

const Place1 = styled.div`
  ${SegoeuiRegularNormalEastBay20px}

  .groupe-1944.groupe-1944-3  & {
    width: 98px;
  }
`;

const Lycen1 = styled.div`
  ${SegoeuiRegularNormalEastBay20px}

  .groupe-1944.groupe-1944-4  & {
    width: 62px;
  }
`;

const Prsentiel = styled.div`
  ${SegoeuiRegularNormalEastBay20px}

  .groupe-1944.groupe-1944-5  & {
    width: 88px;
  }
`;

const IcSearch24px1 = styled.img`
  .groupe-1944.groupe-1944-6 & {
    width: 22.180419921875px;
  }
`;

const Lycen2 = styled.div`
  ${SegoeuiRegularNormalEastBay20px}

  .groupe-1944.groupe-1944-6  & {
    width: 62px;
  }
`;

export default Groupe1944;
