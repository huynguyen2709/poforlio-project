import React from "react";
import styled from "styled-components";
import { Grid } from "../../common/styles";

const Info = () => {
  return (
    <AboutInfo>
      <AboutBox>
        <i class="bx bx-award"></i>
        <AboutTitle>Experience</AboutTitle>
        <AboutSubTitle>1 Year Working</AboutSubTitle>
      </AboutBox>

      <AboutBox>
        <i class="bx bxs-graduation"></i>
        <AboutTitle>Education</AboutTitle>
        <AboutSubTitle>RMIT University</AboutSubTitle>
      </AboutBox>

      <AboutBox>
        <i class="bx bx-location-plus"></i>
        <AboutTitle>Location</AboutTitle>
        <AboutSubTitle>Viet Nam</AboutSubTitle>
      </AboutBox>
    </AboutInfo>
  );
};

export default Info;

const AboutInfo = styled(Grid)`
  grid-template-columns: repeat(3, 140px);
  gap: 0.5rem;
  margin-bottom: 2rem;

  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 200px);
    justify-content: center;
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 150px);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AboutBox = styled.div`
  background-color: #fff;
  border: 1px solid #757575;
  border-radius: 0.75rem;
  text-align: center;
  padding: 1rem 1.25rem;

  .bx {
    font-size: 1.5rem;
    color: #333333;
    margin-bottom: 0.5rem;
  }

  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
    padding: 0.75rem 0.5rem;
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;

const AboutTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
`;

const AboutSubTitle = styled.span`
  font-size: 0.625rem;
`;
