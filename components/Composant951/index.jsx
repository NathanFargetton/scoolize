import React from "react";
import styled from "styled-components";
import { HeeboBoldOrange25px, Border1pxFf5d22 } from "../../styledMixins";


function Composant951(props) {
  const { children, className } = props;

  return (
    <Composant744 className={`composant-74-4 ${className || ""}`}>
      <Place className="place-5">{children}</Place>
    </Composant744>
  );
}

const Composant744 = styled.div`
  ${Border1pxFf5d22}
  height: 64px;
  margin-left: 70px;
  display: flex;
  padding: 13.5px 60px;
  align-items: flex-end;
  min-width: 332px;
  background-color: var(--white);
  border-radius: 18px;

  &.composant-74-4.composant-74-6 {
    padding: 13.5px 137px;
    justify-content: flex-end;
  }

  &.composant-74-4.composant-74-8 {
    padding: 13.5px 138px;
  }

  &.composant-74-4.groupe-1967 {
    padding: 13.5px 13px;
    justify-content: flex-end;
  }

  &.composant-74-4.composant-74-1-2 {
    padding: 13.5px 115px;
    justify-content: flex-end;
  }

  &.composant-74-4.composant-74-1-3 {
    padding: 13.5px 14px;
  }

  &.composant-74-4.composant-95-1 {
    margin-left: unset;
  }

  &.composant-74-4.composant-98-1 {
    margin-top: 20px;
    padding: 13.5px 117px;
    margin-left: unset;
  }
`;

const Place = styled.div`
  ${HeeboBoldOrange25px}
  width: 212px;
  height: 34px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Place1 = styled.div`
  ${HeeboBoldOrange25px}

  .composant-74-4.composant-74-6  & {
    width: 57px;
  }
`;

const Place2 = styled.div`
  ${HeeboBoldOrange25px}

  .composant-74-4.composant-74-8  & {
    width: 56px;
  }
`;

const FormationProfessionnelle = styled.div`
  ${HeeboBoldOrange25px}

  .composant-74-4.groupe-1967  & {
    width: 305px;
  }
`;

const Seconde = styled.div`
  ${HeeboBoldOrange25px}

  .composant-74-4.composant-74-1-2  & {
    width: 101px;
  }
`;

const DistanceMonRythme = styled.div`
  ${HeeboBoldOrange25px}

  .composant-74-4.composant-74-1-3  & {
    width: 304px;
  }
`;

const Langues = styled.div`
  ${HeeboBoldOrange25px}

  .composant-74-4.composant-98-1  & {
    width: 98px;
  }
`;

export default Composant951;
