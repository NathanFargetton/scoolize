import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function Layer2(props) {
  const { src, className } = props;

  return <Layer21 className={`layer-2 ${className || ""}`} style={{ backgroundImage: `url(${src})` }}></Layer21>;
}

const Layer21 = styled.div`
  position: absolute;
  width: 49px;
  height: 47px;
  top: 37px;
  left: 1376px;
  background-size: cover;
  background-position: 50% 50%;

  &.layer-2.layer-2-1 {
    top: 52px;
    left: 1371px;
  }

  &.layer-2.layer-2-2 {
    align-self: flex-start;
    margin-left: 227px;
    cursor: pointer;
    position: unset;
    top: unset;
    left: unset;
  }

  &.layer-2.layer-2-3 {
    top: 30px;
    left: 1413px;
    cursor: pointer;
  }

  &.layer-2.layer-2-4 {
    top: 402px;
    left: 1413px;
    cursor: pointer;
  }

  &.layer-2.layer-2-5 {
    top: 765px;
    left: 1413px;
    cursor: pointer;
  }

  &.layer-2.layer-2-6 {
    left: 1388px;
    cursor: pointer;
  }
`;

export default Layer2;
