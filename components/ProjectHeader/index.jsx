import React from "react";
import ProjectHeader2 from "../ProjectHeader2";
import styled from "styled-components";


function ProjectHeader(props) {
  const { className, projectHeader2Props } = props;

  return (
    <ProjectHeader1 className={`project-header-1 ${className || ""}`}>
      <ProjectHeader2 iconProps={projectHeader2Props.iconProps} />
    </ProjectHeader1>
  );
}

const ProjectHeader1 = styled.div`
  position: absolute;
  height: 136px;
  top: 0;
  left: 0;
  display: flex;
  padding: 32.9px 31.9px;
  align-items: flex-start;
  min-width: 1696px;
  background-color: var(--white);

  &.project-header-1.project-header-2 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-3 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-4 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-5 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-6 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-7 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-8 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-9 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-10 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-11 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-12 {
    min-width: 1650px;
  }

  &.project-header-1.project-header-13 {
    min-width: 1650px;
  }
`;

export default ProjectHeader;
