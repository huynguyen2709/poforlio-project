import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../common/styles";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleOpenMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };
  return (
    <StyledHeader>
      <NavContainer>
        <NavLogo href="index.html">Huy Nguyen</NavLogo>
        <NavMenu showMenu={showMenu}>
          <NavList>
            <NavItem>
              <NavLink href="#home">
                <NavIcon>
                  <i className="uil uil-estate"></i>
                </NavIcon>{" "}
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#about">
                <NavIcon>
                  <i className="uil uil-user"></i>
                </NavIcon>{" "}
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#skills">
                <NavIcon>
                  <i className="uil uil-file-alt"></i>
                </NavIcon>{" "}
                Skills
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#portfolio">
                <NavIcon>
                  <i className="uil uil-scenery"></i>
                </NavIcon>{" "}
                Qualification
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#contact">
                <NavIcon>
                  <i className="uil uil-message"></i>
                </NavIcon>{" "}
                Contact
              </NavLink>
            </NavItem>
          </NavList>

          <NavClose onClick={handleCloseMenu}>
            <NavIcon>
              <i className="uil uil-times"></i>
            </NavIcon>
          </NavClose>
        </NavMenu>

        <NavToggle onClick={handleOpenMenu}>
          <NavIcon>
            <i className="uil uil-apps"></i>
          </NavIcon>
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
  z-index: 100;
  background-color: #fafafa;
  /* BREAKPOINTS */
  /* For medium devices */
  @media (max-width: 768px) {
    top: initial;
    bottom: 0;
  }
`;

const NavContainer = styled(Container)`
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
`;

const NavLogo = styled.a``;

const NavMenu = styled.div`
  display: flex;
  /* BREAKPOINTS */
  /* For medium devices */
  @media (max-width: 768px) {
    position: fixed;
    bottom: ${({ showMenu }) => (showMenu ? "0" : "-100%")};
    left: 0;
    width: 100%;
    background-color: #fafafa;
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
  /* For small devices */
  @media (max-width: 350px) {
    padding: 2rem 0.25rem 4rem;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  column-gap: 2rem;
  @media (max-width: 768px) {
    display: grid;
    flex-grow: 1;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  /* For small devices */
  @media (max-width: 350px) {
    column-gap: 0;
  }
`;

const NavItem = styled.li`
  text-decoration: none;
`;

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333333;
  font-size: 0.875rem;
  font-weight: 500;
  transition: 0.3s;
  :hover {
    color: #000000;
  }
`;

const NavIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    .uil {
      font-size: 1.2rem;
    }
    display: block;
  }
`;

const NavClose = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1.3rem;
    .uil {
      font-size: 1.5rem;
    }
    bottom: 0.5rem;
    cursor: pointer;
    color: #333333;
    :hover {
      color: #000000;
    }
  }
`;

const NavToggle = styled.div`
  color: #333333;
  font-weight: 500;
  display: none;
  @media (max-width: 768px) {
    display: block;
    .uil-apps {
      font-size: 1.1rem;
    }
    cursor: pointer;
  }
`;
