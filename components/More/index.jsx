import React from "react";
import styled from "styled-components";


function More(props) {
  const { className } = props;

  return (
    <More1 className={`more ${className || ""}`}>
      <MoreIcon className="more-icon" src="/img/more-icon-10@1x.png" />
    </More1>
  );
}

const More1 = styled.div`
  margin-top: 12.1px;
  height: 30px;
  margin-left: 13px;
  display: flex;
  padding: 0 7px;
  align-items: center;
  min-width: 30px;
  background-color: var(--gray-nurse);
  border-radius: 15px;

  &.more.more-1 {
    margin-left: 15px;
  }
`;

const MoreIcon = styled.img`
  width: 16px;
  height: 4px;
  object-fit: cover;
`;

export default More;
