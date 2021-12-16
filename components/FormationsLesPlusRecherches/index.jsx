import React from "react";
import Composant291 from "../Composant291";
import Composant292 from "../Composant292";
import styled from "styled-components";
import { HeeboBoldBlack16px } from "../../styledMixins";


function FormationsLesPlusRecherches(props) {
  const {
    className,
    composant291Props,
    composant2912Props,
    composant2913Props,
    composant2914Props,
    composant2915Props,
    composant2916Props,
    composant2917Props,
    composant2918Props,
    composant2919Props,
    composant29110Props,
    composant29111Props,
  } = props;

  return (
    <FormationsLesPlusRecherches1 className={`formations-les-plus-recherches ${className || ""}`}>
      <FormationsLesPlus className="formations-les-plus">
        Formations les plus recherchées BAC + 1 / Bac + 2
      </FormationsLesPlus>
      <ComposantContainer className="composant-container">
        <Composant291 btsAgPmePmi={composant291Props.btsAgPmePmi} />
        <Composant292 />
        <Composant291 btsAgPmePmi={composant2912Props.btsAgPmePmi} className={composant2912Props.className} />
        <Composant291 btsAgPmePmi={composant2913Props.btsAgPmePmi} className={composant2913Props.className} />
      </ComposantContainer>
      <ComposantContainer1 className="composant-container-1">
        <Composant291 btsAgPmePmi={composant2914Props.btsAgPmePmi} />
        <Composant291 btsAgPmePmi={composant2915Props.btsAgPmePmi} className={composant2915Props.className} />
        <Composant291 btsAgPmePmi={composant2916Props.btsAgPmePmi} className={composant2916Props.className} />
        <Composant291 btsAgPmePmi={composant2917Props.btsAgPmePmi} className={composant2917Props.className} />
      </ComposantContainer1>
      <ComposantContainer1 className="composant-container-2">
        <Composant291 btsAgPmePmi={composant2918Props.btsAgPmePmi} />
        <Composant291 btsAgPmePmi={composant2919Props.btsAgPmePmi} className={composant2919Props.className} />
        <Composant291 btsAgPmePmi={composant29110Props.btsAgPmePmi} className={composant29110Props.className} />
        <Composant291 btsAgPmePmi={composant29111Props.btsAgPmePmi} className={composant29111Props.className} />
      </ComposantContainer1>
    </FormationsLesPlusRecherches1>
  );
}

const FormationsLesPlusRecherches1 = styled.div`
  width: 1178px;
  z-index: 5;
  align-self: center;
  margin-top: 150px;
  margin-left: 196px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 477px;
`;

const FormationsLesPlus = styled.p`
  ${HeeboBoldBlack16px}
  width: 515px;
  height: 50px;
  margin-top: -3px;
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 22px;
`;

const ComposantContainer = styled.div`
  height: 113px;
  position: relative;
  margin-top: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 1061px;
`;

const ComposantContainer1 = styled.div`
  height: 113px;
  position: relative;
  margin-top: 45px;
  display: flex;
  align-items: flex-start;
  min-width: 1061px;
`;

const FormationsLesPlusRecherches2 = styled.div`
  .formations-les-plus-recherches & {
    align-self: unset;
  }
`;

export default FormationsLesPlusRecherches;
