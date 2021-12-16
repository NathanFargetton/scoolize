import React from "react";
import styled from "styled-components";


function Bouton(props) {
  const { src, className } = props;

  return (
    <Bouton1 className={`bouton ${className || ""}`}>
      <Trac433 className="trac-433" src={src} />
    </Bouton1>
  );
}

const Bouton1 = styled.div`
  position: absolute;
  width: 47px;
  height: 47px;
  top: 501px;
  left: 247px;
  display: flex;
  justify-content: flex-end;
  background-color: var(--ff5d22);
  border-radius: 23.5px;

  &.bouton.bouton-4 {
    top: 351px;
    left: 236px;
  }

  &.bouton.bouton-5 {
    top: 351px;
    left: 236px;
  }

  &.bouton.bouton-7 {
    top: 351px;
    left: 236px;
  }
`;

const Trac433 = styled.img`
  margin-top: -3.9px;
  width: 47.5458984375px;
  margin-bottom: -10.1px;
  object-fit: cover;
`;

const Trac4331 = styled.img`
  .bouton.bouton-2 & {
    width: 47.546875px;
  }
`;

const Trac4332 = styled.img`
  .bouton.bouton-3 & {
    width: 47.546875px;
  }
`;

const Trac4333 = styled.img`
  .bouton.bouton-4 & {
    width: 47.54669189453125px;
  }
`;

const Trac4334 = styled.img`
  .bouton.bouton-5 & {
    width: 47.54669189453125px;
  }
`;

const Trac4335 = styled.img`
  .bouton.bouton-6 & {
    width: 47.546875px;
  }
`;

const Trac4336 = styled.img`
  .bouton.bouton-7 & {
    width: 47.546875px;
  }
`;

const Trac4337 = styled.img`
  .bouton.bouton-8 & {
    width: 47.546875px;
  }
`;

const Trac4338 = styled.img`
  .bouton.bouton-9 & {
    width: 47.54669189453125px;
  }
`;

const Trac4339 = styled.img`
  .bouton.bouton-10 & {
    width: 47.546875px;
  }
`;

const Trac43310 = styled.img`
  .bouton.bouton-11 & {
    width: 47.54669189453125px;
  }
`;

const Trac43311 = styled.img`
  .bouton.bouton-12 & {
    width: 47.546875px;
  }
`;

export default Bouton;
