import React from "react";
import styled from "styled-components";
import { Grid, Container } from "../../common/styles";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <HomeSection>
      <HomeContainer>
        <HomeContent>
          <Social />
          <HomeImage></HomeImage>
          <Data />
        </HomeContent>

        <ScrollDown />
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled(Container)`
  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    padding: 0 0 4rem;
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7rem;
  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
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

const HomeContent = styled(Grid)`
  grid-template-columns: 116px repeat(2, 1fr);
  padding-top: 8.5rem;
  column-gap: 2rem;
  align-items: center;

  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
    grid-template-columns: 100px repeat(2, 1fr);
    column-gap: 1.2rem;
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    grid-template-columns: 0.5fr 3fr;
    padding-top: 3.5rem;
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;

const HomeImage = styled.div`
  background-image: url("https://picsum.photos/300/300");
  justify-self: center;
  order: 1;
  box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  animation: profile_animate 8s ease-in-out infinite 1s;

  @keyframes profile_animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
    box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    box-shadow: inset 0 0 0 6px rgb(255 255 255 / 30%);
    order: initial;
    justify-self: initial;
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    width: 180px;
    height: 180px;
  }
`;
