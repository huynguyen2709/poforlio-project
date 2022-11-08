import React from "react";
import styled from "styled-components";
import { Container } from "../../common/styles";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterTitle>Huy Nguyen</FooterTitle>

        <FooterList>
          <li>
            <FooterLink href="#about">About</FooterLink>
          </li>

          <li>
            <FooterLink href="#skills">Skill Set</FooterLink>
          </li>

          <li>
            <FooterLink href="#portfolio">Portfolio</FooterLink>
          </li>
        </FooterList>

        <FooterSocial>
          <HomeIcon
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100005983564188"
          >
            <i className="uil uil-facebook"></i>
          </HomeIcon>
          <HomeIcon
            target="_blank"
            href="https://www.linkedin.com/in/huy-nguyen-969769254/"
          >
            <i className="uil uil-linkedin"></i>
          </HomeIcon>
          <HomeIcon target="_blank" href="https://github.com/huynguyen2709">
            <i className="uil uil-github"></i>
          </HomeIcon>
        </FooterSocial>

        <FooterCopyRight>
          Idea's layout by Cryptical Coder. Coded by Huy Nguyen
        </FooterCopyRight>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const FooterContainer = styled.div`
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 0 4rem;
  }
`;

const FooterCopyRight = styled.div`
  text-align: center;
  margin-top: 3rem;
  color: #333333;
  font-size: 0.813rem;
`;

const FooterTitle = styled.h1`
  font-size: 1.75rem;
  color: #333333;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled.a`
  color: #333333;
  :hover {
    color: #000;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.75rem;
`;

const HomeIcon = styled.a`
  .uil {
    font-size: 2rem;
    color: #333333;

    :hover {
      color: #000000;
    }
  }
`;
