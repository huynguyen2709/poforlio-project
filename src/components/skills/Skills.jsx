import React from "react";
import {
  Grid,
  CommonSection,
  CommonTitle,
  CommonSubTitle,
} from "../../common/styles";
import styled from "styled-components";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
const Skills = () => {
  return (
    <CommonSection id="skills">
      <CommonTitle>Skills</CommonTitle>
      <CommonSubTitle>My technical level</CommonSubTitle>
      <SkillsContainer>
        <FrontEnd />
        <BackEnd />
      </SkillsContainer>
    </CommonSection>
  );
};

export default Skills;

const SkillsContainer = styled(Grid)`
  grid-template-columns: repeat(2, 350px);
  column-gap: 3rem;
  justify-content: center;

  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
    grid-template-columns: 650px;
    column-gap: 3rem;
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    grid-template-columns: 400px;
    column-gap: 5rem;
  }

  /* For medium devices */
  @media screen and (max-width: 576px) {
    /* TODO: does not work */
    grid-template-columns: 1fr;
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;
