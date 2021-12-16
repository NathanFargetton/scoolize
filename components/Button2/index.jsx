import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeeboBoldWhite15px } from "../../styledMixins";


function Button2(props) {
  const { children } = props;

  return (
    <Button>
      <OverlapGroup>
        <Link to="/inscription">
          <Base></Base>
        </Link>
        <Next>{children}</Next>
      </OverlapGroup>
    </Button>
  );
}

const Button = styled.div`
  margin-top: 11px;
  display: flex;
  align-items: flex-start;
  min-width: 216px;
`;

const OverlapGroup = styled.div`
  width: 216px;
  height: 72px;
  position: relative;
  border-radius: 25px;
`;

const Base = styled.div`
  position: absolute;
  width: 216px;
  height: 72px;
  top: 0;
  left: 0;
  background-color: var(--ff5d22);
  border-radius: 25px;
  cursor: pointer;
`;

const Next = styled.div`
  ${HeeboBoldWhite15px}
  position: absolute;
  top: 28px;
  left: 24px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

export default Button2;
