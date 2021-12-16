import React from "react";
import Icon from "../Icon";
import More from "../More";
import styled from "styled-components";
import { HeeboBlackOrange32px } from "../../styledMixins";


function ProjectHeader5(props) {
  const { websiteRedesign, iconProps, moreProps } = props;

  return (
    <ProjectHeader>
      <ProjectHeader1>
        <Title>
          <Icon className={iconProps.className} />
          <Groupe1946>
            <WebsiteRedesign>{websiteRedesign}</WebsiteRedesign>
          </Groupe1946>
        </Title>
        <More className={moreProps.className} />
      </ProjectHeader1>
    </ProjectHeader>
  );
}

const ProjectHeader = styled.div`
  position: absolute;
  width: 362px;
  height: 49px;
  top: 0;
  left: 0;
  display: flex;
`;

const ProjectHeader1 = styled.div`
  height: 49.14617919921875px;
  flex: 1;
  position: relative;
  display: flex;
`;

const Title = styled.div`
  width: 317.14599609375px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Groupe1946 = styled.div`
  margin-top: 2.1px;
  margin-bottom: 0;
  width: 263px;
  display: flex;
`;

const WebsiteRedesign = styled.div`
  ${HeeboBlackOrange32px}
  width: 263px;
  height: 49px;
  letter-spacing: 0;
  line-height: 32px;
`;

export default ProjectHeader5;
