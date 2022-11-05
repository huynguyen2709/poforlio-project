import React from "react";
import styled from "styled-components";
import * as pallete from "../../common/cssVariables";

const Header = () => {
  console.log("this:", pallete.testBg);
  return (
    <StyledHeader>
      <NavContainer>
        <NavLogo href="index.html">Huy Nguyen</NavLogo>

        <NavMenu>
          <NavList>
            <NavItem>
              <NavLink href="#home">
                <i class="uil uil-estate"></i> Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#about">
                <i class="uil uil-user"></i> About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#skills">
                <i class="uil uil-file-alt"></i> Skills
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#services">
                <i class="uil uil-briefcase-alt"></i> Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#porforlio">
                <i class="uil uil-scenery"></i> Porforlio
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#contact">
                <i class="uil uil-message"></i> Contact
              </NavLink>
            </NavItem>
          </NavList>
          <i class="uil uil-times"></i> Contact
        </NavMenu>

        <NavToggle>
          <i class="uil uil-apps"></i>
        </NavToggle>
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: ${pallete.zIndexFix};
  background-color: ${pallete.testBg};
`;

const NavContainer = styled.div``;

const NavLogo = styled.a``;

const NavMenu = styled.div``;

const NavList = styled.ul`
  list-style-type: none;
`;

const NavItem = styled.li`
  text-decoration: none;
`;

const NavLink = styled.a``;

const NavToggle = styled.div``;
