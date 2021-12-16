import React from "react";
import styled from "styled-components";
import { HeeboBoldBlack16px } from "../../styledMixins";


function ColesLesPlusRecherches(props) {
  const { className } = props;

  return (
    <ColesLesPlusRecherches1 className={`coles-les-plus-recherches ${className || ""}`}>
      <LesColesLesPlusRecherches className="les-coles-les-plus-recherches">
        Les écoles les plus recherchées
      </LesColesLesPlusRecherches>
      <Image5 className="image-5" src="/img/image-5-1@1x.png" />
    </ColesLesPlusRecherches1>
  );
}

const ColesLesPlusRecherches1 = styled.div`
  width: 1140px;
  height: 277px;
  z-index: 7;
  align-self: center;
  margin-top: 150px;
  margin-left: 196px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.coles-les-plus-recherches.coles-les-plus-recherches-1 {
    align-self: unset;
  }
`;

const LesColesLesPlusRecherches = styled.p`
  ${HeeboBoldBlack16px}
  width: 302px;
  height: 31px;
  margin-top: -3px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Image5 = styled.img`
  margin-left: 108px;
  flex: 1;
  max-height: 217px;
  height: 217px;
  object-fit: cover;
`;

export default ColesLesPlusRecherches;
