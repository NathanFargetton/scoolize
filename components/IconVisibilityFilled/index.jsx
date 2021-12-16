import React from "react";
import styled from "styled-components";


function IconVisibilityFilled(props) {
  const { className } = props;

  return (
    <IconVisibilityFilled1 className={`icon-visibility-filled ${className || ""}`}>
      <OverlapGroup className="overlap-group-4">
        <Trac988 className="trac-988" src="/img/trac--988-1@1x.png" />
        <Box className="box"></Box>
      </OverlapGroup>
    </IconVisibilityFilled1>
  );
}

const IconVisibilityFilled1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 24px;
  opacity: 0.5;

  &.icon-visibility-filled.icon-visibility-filled-1 {
    align-self: flex-end;
    margin-left: 478px;
  }
`;

const OverlapGroup = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;

const Trac988 = styled.img`
  position: absolute;
  width: 22px;
  height: 15px;
  top: 5px;
  left: 1px;
  object-fit: cover;
`;

const Box = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 0;
`;

export default IconVisibilityFilled;
