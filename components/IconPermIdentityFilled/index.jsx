import React from "react";
import styled from "styled-components";


function IconPermIdentityFilled(props) {
  const { src } = props;

  return (
    <IconPermIdentityFilled1>
      <Trac1990 src={src} />
    </IconPermIdentityFilled1>
  );
}

const IconPermIdentityFilled1 = styled.div`
  width: 95px;
  height: 95px;
  display: flex;
`;

const Trac1990 = styled.img`
  margin-top: 4px;
  margin-left: 4px;
  margin-right: 0.4px;
  flex: 1;
  width: 90.150390625px;
  object-fit: cover;
`;

export default IconPermIdentityFilled;
