import styled from "styled-components";

// LAYOUT
export const Container = styled.div`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;

  /* BREAKPOINTS */
  /* For large devices */
  @media (max-width: 992px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  /* For small devices */
  @media (max-width: 350px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

// SECTION
export const CommonSection = styled(Container)`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    margin-top: initial;
    padding: 0 0 6rem;
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;

export const CommonTitle = styled.h2`
  font-size: 2rem;
`;

export const CommonSubTitle = styled.span`
  font-size: 0.875rem;
  margin-bottom: 3.5rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

// BUTTON
export const Button = styled.div`
  display: inline-block;
  background-color: #333333;
  color: #fff;
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  font-weight: 500;
  :hover {
    background-color: #000000;
  }
`;

export const ButtonFlex = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const ButtonIcon = styled.div`
  margin-left: 20px;
`;

export const H3Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
`;
