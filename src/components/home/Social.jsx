import React from "react";
import styled from "styled-components";

const Social = () => {
  return (
    <HomeSocial>
      <HomeIcon target="_blank" href="https://www.instagram.com/huynguyen145/">
        <i className="uil uil-instagram"></i>
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
    </HomeSocial>
  );
};

export default Social;

const HomeSocial = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const HomeIcon = styled.a`
  .uil {
    font-size: 1.5rem;
    color: #333333;

    :hover {
      color: #000000;
    }
  }
`;
