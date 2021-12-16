import React from "react";
import styled from "styled-components";


function Icon(props) {
  const { className } = props;

  return (
    <Icon1 className={`icon ${className || ""}`}>
      <OverlapGroup className="overlap-group">
        <Icon2 className="icon-1" src="/img/icon-10@1x.png" />
      </OverlapGroup>
    </Icon1>
  );
}

const Icon1 = styled.div`
  height: 49.14617919921875px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 49.14617919921875px;
`;

const OverlapGroup = styled.div`
  height: 50px;
  margin-top: -0.5px;
  display: flex;
  padding: 0.5px 0.5px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 50px;
  background-image: url(/img/mask-10@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Icon2 = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const OverlapGroup1 = styled.div`
  .icon.icon-3 & {
    padding: 0.5px;
  }
`;

const OverlapGroup2 = styled.div`
  .icon.icon-4 & {
    padding: 0.5px;
  }
`;

const OverlapGroup3 = styled.div`
  .icon.icon-5 & {
    padding: 0.5px;
  }
`;

const OverlapGroup4 = styled.div`
  .icon.icon-6 & {
    padding: 0.5px;
  }
`;

const OverlapGroup5 = styled.div`
  .icon.icon-7 & {
    padding: 0.5px;
  }
`;

const OverlapGroup6 = styled.div`
  .icon.icon-8 & {
    padding: 0.5px;
  }
`;

const OverlapGroup7 = styled.div`
  .icon.icon-9 & {
    padding: 0.5px;
  }
`;

const OverlapGroup8 = styled.div`
  .icon.icon-10 & {
    padding: 0.5px;
  }
`;

const OverlapGroup9 = styled.div`
  .icon.icon-11 & {
    padding: 0.5px;
  }
`;

const OverlapGroup10 = styled.div`
  .icon.icon-12 & {
    padding: 0.5px;
  }
`;

const OverlapGroup11 = styled.div`
  .icon.icon-13 & {
    padding: 0.5px;
  }
`;

const OverlapGroup12 = styled.div`
  .icon.icon-14 & {
    padding: 0.5px;
  }
`;

const OverlapGroup13 = styled.div`
  .icon.icon-15 & {
    padding: 0.5px;
  }
`;

export default Icon;
