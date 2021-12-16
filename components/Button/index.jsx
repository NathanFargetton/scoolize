import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeeboBoldWhite15px } from "../../styledMixins";


function Button(props) {
  const { className } = props;

  return (
    <Button1 className={`button ${className || ""}`}>
      <Link to="/inscription">
        <Next className="next">S&#39;inscrire / Se Connecter</Next>
      </Link>
    </Button1>
  );
}

const Button1 = styled.div`
  height: 72px;
  margin-top: 11px;
  display: flex;
  padding: 19.5px 22.5px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 216px;
  background-color: var(--ff5d22);
  border-radius: 25px;

  &.button.button-2 {
    cursor: pointer;
  }

  &.button.button-3 {
    cursor: pointer;
  }

  &.button.button-4 {
    cursor: pointer;
  }

  &.button.button-5 {
    cursor: pointer;
  }

  &.button.button-6 {
    cursor: pointer;
  }
`;

const Next = styled.div`
  ${HeeboBoldWhite15px}
  min-height: 24px;
  min-width: 169px;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

export default Button;
