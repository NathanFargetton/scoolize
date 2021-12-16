import React from "react";
import styled from "styled-components";
import { HeeboBoldBlack15px } from "../../styledMixins";


function TestDorientation() {
  return (
    <TestDorientation1>
      <StyloABille src="/img/stylo-a-bille-1@1x.png" />
      <Next>Test d&#39;orientation</Next>
    </TestDorientation1>
  );
}

const TestDorientation1 = styled.div`
  width: 198px;
  height: 47px;
  display: flex;
  background-color: var(--ff5d22);
  border-radius: 25px;
`;

const StyloABille = styled.img`
  margin-top: -10.6px;
  width: 22px;
  height: 22px;
  margin-left: 19px;
  object-fit: cover;
`;

const Next = styled.div`
  ${HeeboBoldBlack15px}
  align-self: flex-end;
  margin-bottom: -7.3px;
  width: 120px;
  height: 24px;
  margin-left: 8px;
  margin-right: 29px;
  flex: 1;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const TestDorientation2 = styled.div`
  width: 198px;
  height: 47px;
  display: flex;
  background-color: var(--ff5d22);
  border-radius: 25px;
`;

const StyloABille1 = styled.img`
  margin-top: -10.6px;
  width: 22px;
  height: 22px;
  margin-left: 19px;
  object-fit: cover;
`;

const Next1 = styled.div`
  ${HeeboBoldBlack15px}
  align-self: flex-end;
  margin-bottom: -7.3px;
  width: 120px;
  height: 24px;
  margin-left: 8px;
  margin-right: 29px;
  flex: 1;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

export default TestDorientation;
