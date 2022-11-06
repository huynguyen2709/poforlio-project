import React from "react";
import styled from "styled-components";

const ScrollDown = () => {
  return (
    <HomeScroll>
      <ButtonLink href="#about">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={{ fill: "none", stroke: "#333333", strokeWidth: "20px" }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{ fill: "none", stroke: "#333333", strokeWidth: "20px" }}
          ></path>
        </svg>
        <HomeScrollName>Scroll Down</HomeScrollName>
        <i className="uil uil-arrow-down"></i>
      </ButtonLink>
    </HomeScroll>
  );
};

export default ScrollDown;

const HomeScroll = styled.div`
  margin-left: 9.25rem;

  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
    margin-left: 7.25rem;
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
  .uil {
    font-size: 1.25rem;
    color: #333333;
  }
`;

const HomeScrollName = styled.span`
  font-weight: 500;
  color: #333333;
  margin-right: 0.25rem;
`;

const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  .wheel {
    animation: scroll 2s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }

    30% {
      transform: translateY(3.75rem);
    }
  }
`;
